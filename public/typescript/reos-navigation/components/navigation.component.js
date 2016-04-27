System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var NavigationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            NavigationComponent = (function () {
                function NavigationComponent() {
                }
                NavigationComponent = __decorate([
                    core_1.Component({
                        selector: 'reos-navigation',
                        template: "\n<reos-pages>\n\t<reos-page>\n\t\t<div class=\"reos-navigation\">\n\n\t\t\t<div class=\"reos-profile\">\n\n\t\t\t</div>\n\n\t\t\t<div class=\"reos-nav\">\n\n\t\t\t\t<a [routerLink]=\"['Contact']\" class=\"reos-nav-item\" style=\"background: #E2E2E2;border:0;width: 100%\">\n\t\t\t\t\t<div style=\"background: #4285F4;color: #fff;width:80%;margin: 0 auto;padding: 10px 0;border-radius: 20px;\">\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t<i class=\"fa fa-comment\"></i>\n\t\t\t\t\t\t</span>&nbsp;&nbsp;\n\t\t\t\t\t\t<span>LENNE EGY K\u00C9RD\u00C9SEM!</span>\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\n\t\t\t\t<a [routerLink]=\"['UserManager']\" class=\"reos-nav-item\" style=\"background: #34A853;color: #fff;\">\n\t\t\t\t\t<span class=\"reos-nav-icon\">\n\t\t\t\t\t\t<i class=\"fa fa-users fa-2x\"></i>\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class=\"reos-nav-title\">FELHASZN\u00C1L\u00D3K KEZEL\u00C9SE</span>\n\t\t\t\t</a>\n\n\t\t\t\t<a [routerLink]=\"['CourseManager']\" class=\"reos-nav-item\" style=\"background: #34A853;color: #fff;\">\n\t\t\t\t\t<span class=\"reos-nav-icon\">\n\t\t\t\t\t\t<i class=\"fa fa-graduation-cap fa-2x\"></i>\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class=\"reos-nav-title\">KURZUSOK KEZEL\u00C9SE</span>\n\t\t\t\t</a>\n\n\t\t\t\t<a [routerLink]=\"['TestManager']\" class=\"reos-nav-item\" style=\"background: #34A853;color: #fff;\">\n\t\t\t\t\t<span class=\"reos-nav-icon\">\n\t\t\t\t\t\t<i class=\"fa fa-pencil fa-2x\"></i>\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class=\"reos-nav-title\">VIZSG\u00C1K KEZEL\u00C9SE</span>\n\t\t\t\t</a>\n\n\t\t\t\t<a [routerLink]=\"['Root']\" class=\"reos-nav-item\" style=\"background: #34A853;color: #fff;\">\n\t\t\t\t\t<span class=\"reos-nav-icon\">\n\t\t\t\t\t\t<i class=\"fa fa-desktop fa-2x\"></i>\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class=\"reos-nav-title\">MONITOR</span>\n\t\t\t\t</a>\n\n\t\t\t\t<a [routerLink]=\"['Root']\" class=\"reos-nav-item\">\n\t\t\t\t\t<span class=\"reos-nav-icon\">\n\t\t\t\t\t\t<i class=\"fa fa-dashboard fa-2x\"></i>\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class=\"reos-nav-title\">DASHBOARD</span>\n\t\t\t\t</a>\n\n\t\t\t\t<a [routerLink]=\"['MyProfile']\" class=\"reos-nav-item\">\n\t\t\t\t\t<span class=\"reos-nav-icon\">\n\t\t\t\t\t\t<i class=\"fa fa-user fa-2x\"></i>\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class=\"reos-nav-title\">PROFILOM</span>\n\t\t\t\t</a>\n\n\t\t\t\t<a [routerLink]=\"['MyCourse']\" class=\"reos-nav-item\">\n\t\t\t\t\t<span class=\"reos-nav-icon\">\n\t\t\t\t\t\t<i class=\"fa fa-graduation-cap fa-2x\"></i>\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class=\"reos-nav-title\">KURZUSAIM</span>\n\t\t\t\t</a>\n\t\t\t\t<a [routerLink]=\"['MyTest']\" class=\"reos-nav-item\">\n\t\t\t\t\t<span class=\"reos-nav-icon\">\n\t\t\t\t\t\t<i class=\"fa fa-pencil fa-2x\"></i>\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class=\"reos-nav-title\">VIZSG\u00C1IM</span>\n\t\t\t\t</a>\n\t\t\t\t<div class=\"reos-nav-item\">\n\t\t\t\t\t<span class=\"reos-nav-icon\">\n\t\t\t\t\t\t<i class=\"fa fa-line-chart fa-2x\"></i>\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class=\"reos-nav-title\">STATISZTIK\u00C1K</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"reos-nav-item\">\n\t\t\t\t\t<span class=\"reos-nav-icon\">\n\t\t\t\t\t\t<i class=\"fa fa-signal fa-2x\"></i>\n\t\t\t\t\t</span>\n\t\t\t\t\t<span class=\"reos-nav-title\">RANGL\u00C9TRA</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</reos-page>\n</reos-pages>\n\t",
                        directives: [router_1.ROUTER_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [])
                ], NavigationComponent);
                return NavigationComponent;
            }());
            exports_1("NavigationComponent", NavigationComponent);
        }
    }
});
