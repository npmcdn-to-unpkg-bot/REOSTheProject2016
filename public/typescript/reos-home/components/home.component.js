System.register(['angular2/core', './../../reos-pages/components/reos-pages.component', './../../reos-pages/components/reos-page.component'], function(exports_1, context_1) {
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
    var core_1, reos_pages_component_1, reos_page_component_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (reos_pages_component_1_1) {
                reos_pages_component_1 = reos_pages_component_1_1;
            },
            function (reos_page_component_1_1) {
                reos_page_component_1 = reos_page_component_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent() {
                    this.title = 'Home Page';
                    this.body = 'This is the Home page body';
                }
                HomeComponent.prototype.ngOnInit = function () {
                    this.message = "Almafa";
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'typescript/reos-home/partials/home.html',
                        directives: [reos_pages_component_1.REOSPagesComponent, reos_page_component_1.REOSPageComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
