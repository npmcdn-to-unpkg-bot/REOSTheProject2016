System.register(['angular2/core', './../services/reos-user.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, reos_user_service_1;
    var REOSUserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (reos_user_service_1_1) {
                reos_user_service_1 = reos_user_service_1_1;
            }],
        execute: function() {
            REOSUserComponent = (function () {
                function REOSUserComponent(_reosUserService) {
                    this._reosUserService = _reosUserService;
                    this.users = this._reosUserService.getUsers();
                    console.log(this._reosUserService.getUsers());
                }
                REOSUserComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'typescript/reos-user/partials/reos-user.html',
                        providers: [reos_user_service_1.REOSUserService]
                    }), 
                    __metadata('design:paramtypes', [reos_user_service_1.REOSUserService])
                ], REOSUserComponent);
                return REOSUserComponent;
            }());
            exports_1("REOSUserComponent", REOSUserComponent);
        }
    }
});
