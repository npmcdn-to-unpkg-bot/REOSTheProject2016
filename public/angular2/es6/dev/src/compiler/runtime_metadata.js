var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { resolveForwardRef } from 'angular2/src/core/di';
import { Type, isBlank, isPresent, isArray, stringify } from 'angular2/src/facade/lang';
import { BaseException } from 'angular2/src/facade/exceptions';
import * as cpl from './directive_metadata';
import * as md from 'angular2/src/core/metadata/directives';
import { DirectiveResolver } from 'angular2/src/core/linker/directive_resolver';
import { PipeResolver } from 'angular2/src/core/linker/pipe_resolver';
import { ViewResolver } from 'angular2/src/core/linker/view_resolver';
import { hasLifecycleHook } from 'angular2/src/core/linker/directive_lifecycle_reflector';
import { LIFECYCLE_HOOKS_VALUES } from 'angular2/src/core/linker/interfaces';
import { reflector } from 'angular2/src/core/reflection/reflection';
import { Injectable, Inject, Optional } from 'angular2/src/core/di';
import { PLATFORM_DIRECTIVES, PLATFORM_PIPES } from 'angular2/src/core/platform_directives_and_pipes';
import { MODULE_SUFFIX } from './util';
import { assertArrayOfStrings } from './assertions';
import { getUrlScheme } from 'angular2/src/compiler/url_resolver';
export let RuntimeMetadataResolver = class {
    constructor(_directiveResolver, _pipeResolver, _viewResolver, _platformDirectives, _platformPipes) {
        this._directiveResolver = _directiveResolver;
        this._pipeResolver = _pipeResolver;
        this._viewResolver = _viewResolver;
        this._platformDirectives = _platformDirectives;
        this._platformPipes = _platformPipes;
        this._directiveCache = new Map();
        this._pipeCache = new Map();
        this._anonymousTypes = new Map();
        this._anonymousTypeIndex = 0;
    }
    /**
     * Wrap the stringify method to avoid naming things `function (arg1...) {`
     */
    sanitizeName(obj) {
        let result = stringify(obj);
        if (result.indexOf('(') < 0) {
            return result;
        }
        let found = this._anonymousTypes.get(obj);
        if (!found) {
            this._anonymousTypes.set(obj, this._anonymousTypeIndex++);
            found = this._anonymousTypes.get(obj);
        }
        return `anonymous_type_${found}_`;
    }
    getDirectiveMetadata(directiveType) {
        var meta = this._directiveCache.get(directiveType);
        if (isBlank(meta)) {
            var dirMeta = this._directiveResolver.resolve(directiveType);
            var moduleUrl = null;
            var templateMeta = null;
            var changeDetectionStrategy = null;
            if (dirMeta instanceof md.ComponentMetadata) {
                assertArrayOfStrings('styles', dirMeta.styles);
                var cmpMeta = dirMeta;
                moduleUrl = calcModuleUrl(directiveType, cmpMeta);
                var viewMeta = this._viewResolver.resolve(directiveType);
                assertArrayOfStrings('styles', viewMeta.styles);
                templateMeta = new cpl.CompileTemplateMetadata({
                    encapsulation: viewMeta.encapsulation,
                    template: viewMeta.template,
                    templateUrl: viewMeta.templateUrl,
                    styles: viewMeta.styles,
                    styleUrls: viewMeta.styleUrls
                });
                changeDetectionStrategy = cmpMeta.changeDetection;
            }
            meta = cpl.CompileDirectiveMetadata.create({
                selector: dirMeta.selector,
                exportAs: dirMeta.exportAs,
                isComponent: isPresent(templateMeta),
                dynamicLoadable: true,
                type: new cpl.CompileTypeMetadata({ name: this.sanitizeName(directiveType), moduleUrl: moduleUrl, runtime: directiveType }),
                template: templateMeta,
                changeDetection: changeDetectionStrategy,
                inputs: dirMeta.inputs,
                outputs: dirMeta.outputs,
                host: dirMeta.host,
                lifecycleHooks: LIFECYCLE_HOOKS_VALUES.filter(hook => hasLifecycleHook(hook, directiveType))
            });
            this._directiveCache.set(directiveType, meta);
        }
        return meta;
    }
    getPipeMetadata(pipeType) {
        var meta = this._pipeCache.get(pipeType);
        if (isBlank(meta)) {
            var pipeMeta = this._pipeResolver.resolve(pipeType);
            var moduleUrl = reflector.importUri(pipeType);
            meta = new cpl.CompilePipeMetadata({
                type: new cpl.CompileTypeMetadata({ name: this.sanitizeName(pipeType), moduleUrl: moduleUrl, runtime: pipeType }),
                name: pipeMeta.name,
                pure: pipeMeta.pure
            });
            this._pipeCache.set(pipeType, meta);
        }
        return meta;
    }
    getViewDirectivesMetadata(component) {
        var view = this._viewResolver.resolve(component);
        var directives = flattenDirectives(view, this._platformDirectives);
        for (var i = 0; i < directives.length; i++) {
            if (!isValidType(directives[i])) {
                throw new BaseException(`Unexpected directive value '${stringify(directives[i])}' on the View of component '${stringify(component)}'`);
            }
        }
        return directives.map(type => this.getDirectiveMetadata(type));
    }
    getViewPipesMetadata(component) {
        var view = this._viewResolver.resolve(component);
        var pipes = flattenPipes(view, this._platformPipes);
        for (var i = 0; i < pipes.length; i++) {
            if (!isValidType(pipes[i])) {
                throw new BaseException(`Unexpected piped value '${stringify(pipes[i])}' on the View of component '${stringify(component)}'`);
            }
        }
        return pipes.map(type => this.getPipeMetadata(type));
    }
};
RuntimeMetadataResolver = __decorate([
    Injectable(),
    __param(3, Optional()),
    __param(3, Inject(PLATFORM_DIRECTIVES)),
    __param(4, Optional()),
    __param(4, Inject(PLATFORM_PIPES)), 
    __metadata('design:paramtypes', [DirectiveResolver, PipeResolver, ViewResolver, Array, Array])
], RuntimeMetadataResolver);
function flattenDirectives(view, platformDirectives) {
    let directives = [];
    if (isPresent(platformDirectives)) {
        flattenArray(platformDirectives, directives);
    }
    if (isPresent(view.directives)) {
        flattenArray(view.directives, directives);
    }
    return directives;
}
function flattenPipes(view, platformPipes) {
    let pipes = [];
    if (isPresent(platformPipes)) {
        flattenArray(platformPipes, pipes);
    }
    if (isPresent(view.pipes)) {
        flattenArray(view.pipes, pipes);
    }
    return pipes;
}
function flattenArray(tree, out) {
    for (var i = 0; i < tree.length; i++) {
        var item = resolveForwardRef(tree[i]);
        if (isArray(item)) {
            flattenArray(item, out);
        }
        else {
            out.push(item);
        }
    }
}
function isValidType(value) {
    return isPresent(value) && (value instanceof Type);
}
function calcModuleUrl(type, cmpMetadata) {
    var moduleId = cmpMetadata.moduleId;
    if (isPresent(moduleId)) {
        var scheme = getUrlScheme(moduleId);
        return isPresent(scheme) && scheme.length > 0 ? moduleId :
            `package:${moduleId}${MODULE_SUFFIX}`;
    }
    else {
        return reflector.importUri(type);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVudGltZV9tZXRhZGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9jb21waWxlci9ydW50aW1lX21ldGFkYXRhLnRzIl0sIm5hbWVzIjpbIlJ1bnRpbWVNZXRhZGF0YVJlc29sdmVyIiwiUnVudGltZU1ldGFkYXRhUmVzb2x2ZXIuY29uc3RydWN0b3IiLCJSdW50aW1lTWV0YWRhdGFSZXNvbHZlci5zYW5pdGl6ZU5hbWUiLCJSdW50aW1lTWV0YWRhdGFSZXNvbHZlci5nZXREaXJlY3RpdmVNZXRhZGF0YSIsIlJ1bnRpbWVNZXRhZGF0YVJlc29sdmVyLmdldFBpcGVNZXRhZGF0YSIsIlJ1bnRpbWVNZXRhZGF0YVJlc29sdmVyLmdldFZpZXdEaXJlY3RpdmVzTWV0YWRhdGEiLCJSdW50aW1lTWV0YWRhdGFSZXNvbHZlci5nZXRWaWV3UGlwZXNNZXRhZGF0YSIsImZsYXR0ZW5EaXJlY3RpdmVzIiwiZmxhdHRlblBpcGVzIiwiZmxhdHRlbkFycmF5IiwiaXNWYWxpZFR5cGUiLCJjYWxjTW9kdWxlVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7T0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sc0JBQXNCO09BQy9DLEVBQ0wsSUFBSSxFQUNKLE9BQU8sRUFDUCxTQUFTLEVBQ1QsT0FBTyxFQUNQLFNBQVMsRUFFVixNQUFNLDBCQUEwQjtPQUMxQixFQUFDLGFBQWEsRUFBQyxNQUFNLGdDQUFnQztPQUNyRCxLQUFLLEdBQUcsTUFBTSxzQkFBc0I7T0FDcEMsS0FBSyxFQUFFLE1BQU0sdUNBQXVDO09BQ3BELEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw2Q0FBNkM7T0FDdEUsRUFBQyxZQUFZLEVBQUMsTUFBTSx3Q0FBd0M7T0FDNUQsRUFBQyxZQUFZLEVBQUMsTUFBTSx3Q0FBd0M7T0FFNUQsRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHdEQUF3RDtPQUNoRixFQUFpQixzQkFBc0IsRUFBQyxNQUFNLHFDQUFxQztPQUNuRixFQUFDLFNB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dCB7cmVzb2x2ZUZvcndhcmRSZWZ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2RpJztcbmltcG9ydCB7XG4gIFR5cGUsXG4gIGlzQmxhbmssXG4gIGlzUHJlc2VudCxcbiAgaXNBcnJheSxcbiAgc3RyaW5naWZ5LFxuICBSZWdFeHBXcmFwcGVyXG59IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge0Jhc2VFeGNlcHRpb259IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvZXhjZXB0aW9ucyc7XG5pbXBvcnQgKiBhcyBjcGwgZnJvbSAnLi9kaXJlY3RpdmVfbWV0YWRhdGEnO1xuaW1wb3J0ICogYXMgbWQgZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbWV0YWRhdGEvZGlyZWN0aXZlcyc7XG5pbXBvcnQge0RpcmVjdGl2ZVJlc29sdmVyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvZGlyZWN0aXZlX3Jlc29sdmVyJztcbmltcG9ydCB7UGlwZVJlc29sdmVyfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvcGlwZV9yZXNvbHZlcic7XG5pbXBvcnQge1ZpZXdSZXNvbHZlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL3ZpZXdfcmVzb2x2ZXInO1xuaW1wb3J0IHtWaWV3TWV0YWRhdGF9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL21ldGFkYXRhL3ZpZXcnO1xuaW1wb3J0IHtoYXNMaWZlY3ljbGVIb29rfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9saW5rZXIvZGlyZWN0aXZlX2xpZmVjeWNsZV9yZWZsZWN0b3InO1xuaW1wb3J0IHtMaWZlY3ljbGVIb29rcywgTElGRUNZQ0xFX0hPT0tTX1ZBTFVFU30gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvbGlua2VyL2ludGVyZmFjZXMnO1xuaW1wb3J0IHtyZWZsZWN0b3J9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL3JlZmxlY3Rpb24vcmVmbGVjdGlvbic7XG5pbXBvcnQge0luamVjdGFibGUsIEluamVjdCwgT3B0aW9uYWx9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2RpJztcbmltcG9ydCB7UExBVEZPUk1fRElSRUNUSVZFUywgUExBVEZPUk1fUElQRVN9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL3BsYXRmb3JtX2RpcmVjdGl2ZXNfYW5kX3BpcGVzJztcbmltcG9ydCB7TU9EVUxFX1NVRkZJWH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7YXNzZXJ0QXJyYXlPZlN0cmluZ3N9IGZyb20gJy4vYXNzZXJ0aW9ucyc7XG5pbXBvcnQge2dldFVybFNjaGVtZX0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvbXBpbGVyL3VybF9yZXNvbHZlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSdW50aW1lTWV0YWRhdGFSZXNvbHZlciB7XG4gIHByaXZhdGUgX2RpcmVjdGl2ZUNhY2hlID0gbmV3IE1hcDxUeXBlLCBjcGwuQ29tcGlsZURpcmVjdGl2ZU1ldGFkYXRhPigpO1xuICBwcml2YXRlIF9waXBlQ2FjaGUgPSBuZXcgTWFwPFR5cGUsIGNwbC5Db21waWxlUGlwZU1ldGFkYXRhPigpO1xuICBwcml2YXRlIF9hbm9ueW1vdXNUeXBlcyA9IG5ldyBNYXA8T2JqZWN0LCBudW1iZXI+KCk7XG4gIHByaXZhdGUgX2Fub255bW91c1R5cGVJbmRleCA9IDA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGlyZWN0aXZlUmVzb2x2ZXI6IERpcmVjdGl2ZVJlc29sdmVyLCBwcml2YXRlIF9waXBlUmVzb2x2ZXI6IFBpcGVSZXNvbHZlcixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfdmlld1Jlc29sdmVyOiBWaWV3UmVzb2x2ZXIsXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoUExBVEZPUk1fRElSRUNUSVZFUykgcHJpdmF0ZSBfcGxhdGZvcm1EaXJlY3RpdmVzOiBUeXBlW10sXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoUExBVEZPUk1fUElQRVMpIHByaXZhdGUgX3BsYXRmb3JtUGlwZXM6IFR5cGVbXSkge31cblxuICAvKipcbiAgICogV3JhcCB0aGUgc3RyaW5naWZ5IG1ldGhvZCB0byBhdm9pZCBuYW1pbmcgdGhpbmdzIGBmdW5jdGlvbiAoYXJnMS4uLikge2BcbiAgICovXG4gIHByaXZhdGUgc2FuaXRpemVOYW1lKG9iajogYW55KTogc3RyaW5nIHtcbiAgICBsZXQgcmVzdWx0ID0gc3RyaW5naWZ5KG9iaik7XG4gICAgaWYgKHJlc3VsdC5pbmRleE9mKCcoJykgPCAwKSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBsZXQgZm91bmQgPSB0aGlzLl9hbm9ueW1vdXNUeXBlcy5nZXQob2JqKTtcbiAgICBpZiAoIWZvdW5kKSB7XG4gICAgICB0aGlzLl9hbm9ueW1vdXNUeXBlcy5zZXQob2JqLCB0aGlzLl9hbm9ueW1vdXNUeXBlSW5kZXgrKyk7XG4gICAgICBmb3VuZCA9IHRoaXMuX2Fub255bW91c1R5cGVzLmdldChvYmopO1xuICAgIH1cbiAgICByZXR1cm4gYGFub255bW91c190eXBlXyR7Zm91bmR9X2A7XG4gIH1cblxuICBnZXREaXJlY3RpdmVNZXRhZGF0YShkaXJlY3RpdmVUeXBlOiBUeXBlKTogY3BsLkNvbXBpbGVEaXJlY3RpdmVNZXRhZGF0YSB7XG4gICAgdmFyIG1ldGEgPSB0aGlzLl9kaXJlY3RpdmVDYWNoZS5nZXQoZGlyZWN0aXZlVHlwZSk7XG4gICAgaWYgKGlzQmxhbmsobWV0YSkpIHtcbiAgICAgIHZhciBkaXJNZXRhID0gdGhpcy5fZGlyZWN0aXZlUmVzb2x2ZXIucmVzb2x2ZShkaXJlY3RpdmVUeXBlKTtcbiAgICAgIHZhciBtb2R1bGVVcmwgPSBudWxsO1xuICAgICAgdmFyIHRlbXBsYXRlTWV0YSA9IG51bGw7XG4gICAgICB2YXIgY2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgPSBudWxsO1xuXG4gICAgICBpZiAoZGlyTWV0YSBpbnN0YW5jZW9mIG1kLkNvbXBvbmVudE1ldGFkYXRhKSB7XG4gICAgICAgIGFzc2VydEFycmF5T2ZTdHJpbmdzKCdzdHlsZXMnLCBkaXJNZXRhLnN0eWxlcyk7XG4gICAgICAgIHZhciBjbXBNZXRhID0gPG1kLkNvbXBvbmVudE1ldGFkYXRhPmRpck1ldGE7XG4gICAgICAgIG1vZHVsZVVybCA9IGNhbGNNb2R1bGVVcmwoZGlyZWN0aXZlVHlwZSwgY21wTWV0YSk7XG4gICAgICAgIHZhciB2aWV3TWV0YSA9IHRoaXMuX3ZpZXdSZXNvbHZlci5yZXNvbHZlKGRpcmVjdGl2ZVR5cGUpO1xuICAgICAgICBhc3NlcnRBcnJheU9mU3RyaW5ncygnc3R5bGVzJywgdmlld01ldGEuc3R5bGVzKTtcbiAgICAgICAgdGVtcGxhdGVNZXRhID0gbmV3IGNwbC5Db21waWxlVGVtcGxhdGVNZXRhZGF0YSh7XG4gICAgICAgICAgZW5jYXBzdWxhdGlvbjogdmlld01ldGEuZW5jYXBzdWxhdGlvbixcbiAgICAgICAgICB0ZW1wbGF0ZTogdmlld01ldGEudGVtcGxhdGUsXG4gICAgICAgICAgdGVtcGxhdGVVcmw6IHZpZXdNZXRhLnRlbXBsYXRlVXJsLFxuICAgICAgICAgIHN0eWxlczogdmlld01ldGEuc3R5bGVzLFxuICAgICAgICAgIHN0eWxlVXJsczogdmlld01ldGEuc3R5bGVVcmxzXG4gICAgICAgIH0pO1xuICAgICAgICBjaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSA9IGNtcE1ldGEuY2hhbmdlRGV0ZWN0aW9uO1xuICAgICAgfVxuICAgICAgbWV0YSA9IGNwbC5Db21waWxlRGlyZWN0aXZlTWV0YWRhdGEuY3JlYXRlKHtcbiAgICAgICAgc2VsZWN0b3I6IGRpck1ldGEuc2VsZWN0b3IsXG4gICAgICAgIGV4cG9ydEFzOiBkaXJNZXRhLmV4cG9ydEFzLFxuICAgICAgICBpc0NvbXBvbmVudDogaXNQcmVzZW50KHRlbXBsYXRlTWV0YSksXG4gICAgICAgIGR5bmFtaWNMb2FkYWJsZTogdHJ1ZSxcbiAgICAgICAgdHlwZTogbmV3IGNwbC5Db21waWxlVHlwZU1ldGFkYXRhKFxuICAgICAgICAgICAge25hbWU6IHRoaXMuc2FuaXRpemVOYW1lKGRpcmVjdGl2ZVR5cGUpLCBtb2R1bGVVcmw6IG1vZHVsZVVybCwgcnVudGltZTogZGlyZWN0aXZlVHlwZX0pLFxuICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGVNZXRhLFxuICAgICAgICBjaGFuZ2VEZXRlY3Rpb246IGNoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICAgICAgICBpbnB1dHM6IGRpck1ldGEuaW5wdXRzLFxuICAgICAgICBvdXRwdXRzOiBkaXJNZXRhLm91dHB1dHMsXG4gICAgICAgIGhvc3Q6IGRpck1ldGEuaG9zdCxcbiAgICAgICAgbGlmZWN5Y2xlSG9va3M6IExJRkVDWUNMRV9IT09LU19WQUxVRVMuZmlsdGVyKGhvb2sgPT4gaGFzTGlmZWN5Y2xlSG9vayhob29rLCBkaXJlY3RpdmVUeXBlKSlcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fZGlyZWN0aXZlQ2FjaGUuc2V0KGRpcmVjdGl2ZVR5cGUsIG1ldGEpO1xuICAgIH1cbiAgICByZXR1cm4gbWV0YTtcbiAgfVxuXG4gIGdldFBpcGVNZXRhZGF0YShwaXBlVHlwZTogVHlwZSk6IGNwbC5Db21waWxlUGlwZU1ldGFkYXRhIHtcbiAgICB2YXIgbWV0YSA9IHRoaXMuX3BpcGVDYWNoZS5nZXQocGlwZVR5cGUpO1xuICAgIGlmIChpc0JsYW5rKG1ldGEpKSB7XG4gICAgICB2YXIgcGlwZU1ldGEgPSB0aGlzLl9waXBlUmVzb2x2ZXIucmVzb2x2ZShwaXBlVHlwZSk7XG4gICAgICB2YXIgbW9kdWxlVXJsID0gcmVmbGVjdG9yLmltcG9ydFVyaShwaXBlVHlwZSk7XG4gICAgICBtZXRhID0gbmV3IGNwbC5Db21waWxlUGlwZU1ldGFkYXRhKHtcbiAgICAgICAgdHlwZTogbmV3IGNwbC5Db21waWxlVHlwZU1ldGFkYXRhKFxuICAgICAgICAgICAge25hbWU6IHRoaXMuc2FuaXRpemVOYW1lKHBpcGVUeXBlKSwgbW9kdWxlVXJsOiBtb2R1bGVVcmwsIHJ1bnRpbWU6IHBpcGVUeXBlfSksXG4gICAgICAgIG5hbWU6IHBpcGVNZXRhLm5hbWUsXG4gICAgICAgIHB1cmU6IHBpcGVNZXRhLnB1cmVcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fcGlwZUNhY2hlLnNldChwaXBlVHlwZSwgbWV0YSk7XG4gICAgfVxuICAgIHJldHVybiBtZXRhO1xuICB9XG5cbiAgZ2V0Vmlld0RpcmVjdGl2ZXNNZXRhZGF0YShjb21wb25lbnQ6IFR5cGUpOiBjcGwuQ29tcGlsZURpcmVjdGl2ZU1ldGFkYXRhW10ge1xuICAgIHZhciB2aWV3ID0gdGhpcy5fdmlld1Jlc29sdmVyLnJlc29sdmUoY29tcG9uZW50KTtcbiAgICB2YXIgZGlyZWN0aXZlcyA9IGZsYXR0ZW5EaXJlY3RpdmVzKHZpZXcsIHRoaXMuX3BsYXRmb3JtRGlyZWN0aXZlcyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaXJlY3RpdmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIWlzVmFsaWRUeXBlKGRpcmVjdGl2ZXNbaV0pKSB7XG4gICAgICAgIHRocm93IG5ldyBCYXNlRXhjZXB0aW9uKFxuICAgICAgICAgICAgYFVuZXhwZWN0ZWQgZGlyZWN0aXZlIHZhbHVlICcke3N0cmluZ2lmeShkaXJlY3RpdmVzW2ldKX0nIG9uIHRoZSBWaWV3IG9mIGNvbXBvbmVudCAnJHtzdHJpbmdpZnkoY29tcG9uZW50KX0nYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGl2ZXMubWFwKHR5cGUgPT4gdGhpcy5nZXREaXJlY3RpdmVNZXRhZGF0YSh0eXBlKSk7XG4gIH1cblxuICBnZXRWaWV3UGlwZXNNZXRhZGF0YShjb21wb25lbnQ6IFR5cGUpOiBjcGwuQ29tcGlsZVBpcGVNZXRhZGF0YVtdIHtcbiAgICB2YXIgdmlldyA9IHRoaXMuX3ZpZXdSZXNvbHZlci5yZXNvbHZlKGNvbXBvbmVudCk7XG4gICAgdmFyIHBpcGVzID0gZmxhdHRlblBpcGVzKHZpZXcsIHRoaXMuX3BsYXRmb3JtUGlwZXMpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGlwZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICghaXNWYWxpZFR5cGUocGlwZXNbaV0pKSB7XG4gICAgICAgIHRocm93IG5ldyBCYXNlRXhjZXB0aW9uKFxuICAgICAgICAgICAgYFVuZXhwZWN0ZWQgcGlwZWQgdmFsdWUgJyR7c3RyaW5naWZ5KHBpcGVzW2ldKX0nIG9uIHRoZSBWaWV3IG9mIGNvbXBvbmVudCAnJHtzdHJpbmdpZnkoY29tcG9uZW50KX0nYCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwaXBlcy5tYXAodHlwZSA9PiB0aGlzLmdldFBpcGVNZXRhZGF0YSh0eXBlKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmxhdHRlbkRpcmVjdGl2ZXModmlldzogVmlld01ldGFkYXRhLCBwbGF0Zm9ybURpcmVjdGl2ZXM6IGFueVtdKTogVHlwZVtdIHtcbiAgbGV0IGRpcmVjdGl2ZXMgPSBbXTtcbiAgaWYgKGlzUHJlc2VudChwbGF0Zm9ybURpcmVjdGl2ZXMpKSB7XG4gICAgZmxhdHRlbkFycmF5KHBsYXRmb3JtRGlyZWN0aXZlcywgZGlyZWN0aXZlcyk7XG4gIH1cbiAgaWYgKGlzUHJlc2VudCh2aWV3LmRpcmVjdGl2ZXMpKSB7XG4gICAgZmxhdHRlbkFycmF5KHZpZXcuZGlyZWN0aXZlcywgZGlyZWN0aXZlcyk7XG4gIH1cbiAgcmV0dXJuIGRpcmVjdGl2ZXM7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW5QaXBlcyh2aWV3OiBWaWV3TWV0YWRhdGEsIHBsYXRmb3JtUGlwZXM6IGFueVtdKTogVHlwZVtdIHtcbiAgbGV0IHBpcGVzID0gW107XG4gIGlmIChpc1ByZXNlbnQocGxhdGZvcm1QaXBlcykpIHtcbiAgICBmbGF0dGVuQXJyYXkocGxhdGZvcm1QaXBlcywgcGlwZXMpO1xuICB9XG4gIGlmIChpc1ByZXNlbnQodmlldy5waXBlcykpIHtcbiAgICBmbGF0dGVuQXJyYXkodmlldy5waXBlcywgcGlwZXMpO1xuICB9XG4gIHJldHVybiBwaXBlcztcbn1cblxuZnVuY3Rpb24gZmxhdHRlbkFycmF5KHRyZWU6IGFueVtdLCBvdXQ6IEFycmF5PFR5cGUgfCBhbnlbXT4pOiB2b2lkIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmVlLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSByZXNvbHZlRm9yd2FyZFJlZih0cmVlW2ldKTtcbiAgICBpZiAoaXNBcnJheShpdGVtKSkge1xuICAgICAgZmxhdHRlbkFycmF5KGl0ZW0sIG91dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpc1ZhbGlkVHlwZSh2YWx1ZTogVHlwZSk6IGJvb2xlYW4ge1xuICByZXR1cm4gaXNQcmVzZW50KHZhbHVlKSAmJiAodmFsdWUgaW5zdGFuY2VvZiBUeXBlKTtcbn1cblxuZnVuY3Rpb24gY2FsY01vZHVsZVVybCh0eXBlOiBUeXBlLCBjbXBNZXRhZGF0YTogbWQuQ29tcG9uZW50TWV0YWRhdGEpOiBzdHJpbmcge1xuICB2YXIgbW9kdWxlSWQgPSBjbXBNZXRhZGF0YS5tb2R1bGVJZDtcbiAgaWYgKGlzUHJlc2VudChtb2R1bGVJZCkpIHtcbiAgICB2YXIgc2NoZW1lID0gZ2V0VXJsU2NoZW1lKG1vZHVsZUlkKTtcbiAgICByZXR1cm4gaXNQcmVzZW50KHNjaGVtZSkgJiYgc2NoZW1lLmxlbmd0aCA+IDAgPyBtb2R1bGVJZCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHBhY2thZ2U6JHttb2R1bGVJZH0ke01PRFVMRV9TVUZGSVh9YDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmVmbGVjdG9yLmltcG9ydFVyaSh0eXBlKTtcbiAgfVxufVxuIl19