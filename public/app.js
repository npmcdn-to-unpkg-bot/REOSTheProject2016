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
                        template: "\n\t\t<nav class=\"navbar navbar-default reos-navigation\">\n\t\t\t<div class=\"container-fluid\">\n\n\t\t\t    <!-- Brand and toggle get grouped for better mobile display -->\n\t\t\t    <div class=\"navbar-header\">\n      \t\t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#reosNav\" aria-expanded=\"false\">\n\t\t\t\t        <span class=\"sr-only\">Toggle navigation</span>\n\t\t\t\t        <span class=\"icon-bar\"></span>\n\t\t\t\t        <span class=\"icon-bar\"></span>\n\t\t\t\t        <span class=\"icon-bar\"></span>\n\t\t\t    \t</button>\n      \t\t\t\t<a class=\"navbar-brand\" href=\"#\">Brand</a>\n    \t\t\t</div>\n\n\t\t\t    <!-- Collect the nav links, forms, and other content for toggling -->\n\t\t\t    <div class=\"collapse navbar-collapse\" id=\"reosNav\">\n\t      \t\t\t<ul class=\"nav navbar-nav pull-right\">\n\t\t                <li><a [routerLink]=\"['Root']\">Home</a></li>\n\t\t                <li><a [routerLink]=\"['About']\">About</a></li>\n\t\t                <li><a [routerLink]=\"['Contact']\">Contact</a></li>\n\t\t                <li><a [routerLink]=\"['AuthLogin']\">Login</a></li>\n\t\t                <li><a [routerLink]=\"['AuthRegister']\">Register</a></li>\n\t\t                <li><a [routerLink]=\"['AuthResetPassword']\">Reset password</a></li>\n\t      \t\t\t</ul>\n    \t\t\t</div><!-- /.navbar-collapse -->\n  \t\t\t</div><!-- /.container-fluid -->\n\t\t</nav>\n\t",
                        directives: [
                            router_1.ROUTER_DIRECTIVES
                        ],
                    }), 
                    __metadata('design:paramtypes', [])
                ], NavigationComponent);
                return NavigationComponent;
            }());
            exports_1("NavigationComponent", NavigationComponent);
        }
    }
});

System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var NavItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NavItemComponent = (function () {
                function NavItemComponent() {
                }
                NavItemComponent = __decorate([
                    core_1.Component({
                        selector: 'reos-nav-item',
                        template: "\n\t\t<li><a href=\"#\">One more separated link<asdas</a></li>\n\t",
                    }), 
                    __metadata('design:paramtypes', [])
                ], NavItemComponent);
                return NavItemComponent;
            }());
            exports_1("NavItemComponent", NavItemComponent);
        }
    }
});

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
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent() {
                }
                HomeComponent = __decorate([
                    core_1.Component({
                        template: "\n  \t<div style=\"background:#222;width:100%;height:100%;position:absolute;left:0;top:0;\">\n\n        <div class=\"container\">\n            <span style=\"color:#fff\">REOS //</span> EDUCATION\n            <div style=\"margin-top:20px;\">\n            \t<a [routerLink]=\"['About']\">Kirp\u00F3b\u00E1lom</a>\n            </div>\n        </div>\n  \t</div>\n\n  ",
                        directives: [
                            router_1.ROUTER_DIRECTIVES
                        ],
                    }), 
                    __metadata('design:paramtypes', [])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});

System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ContactComponent = (function () {
                function ContactComponent() {
                }
                ContactComponent = __decorate([
                    core_1.Component({
                        template: "\n    <h2>CONTACT PAGE</h2>\n  ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], ContactComponent);
                return ContactComponent;
            }());
            exports_1("ContactComponent", ContactComponent);
        }
    }
});

System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var AboutComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AboutComponent = (function () {
                function AboutComponent() {
                }
                AboutComponent = __decorate([
                    core_1.Component({
                        template: "\n    <h2>ABOUT PAGE</h2>\n  ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], AboutComponent);
                return AboutComponent;
            }());
            exports_1("AboutComponent", AboutComponent);
        }
    }
});

System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var AuthLoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AuthLoginComponent = (function () {
                function AuthLoginComponent() {
                }
                AuthLoginComponent = __decorate([
                    core_1.Component({
                        template: "\n\t\t<h2>Login page</h2>\n\t",
                    }), 
                    __metadata('design:paramtypes', [])
                ], AuthLoginComponent);
                return AuthLoginComponent;
            }());
            exports_1("AuthLoginComponent", AuthLoginComponent);
        }
    }
});

System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var AuthRegisterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AuthRegisterComponent = (function () {
                function AuthRegisterComponent() {
                }
                AuthRegisterComponent = __decorate([
                    core_1.Component({
                        template: "\n\t\t<h2>Register page</h2>\n\t",
                    }), 
                    __metadata('design:paramtypes', [])
                ], AuthRegisterComponent);
                return AuthRegisterComponent;
            }());
            exports_1("AuthRegisterComponent", AuthRegisterComponent);
        }
    }
});

System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var AuthResetPasswordComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AuthResetPasswordComponent = (function () {
                function AuthResetPasswordComponent() {
                }
                AuthResetPasswordComponent = __decorate([
                    core_1.Component({
                        template: "\n\t\t<h2>Reset Password page</h2>\n\t",
                    }), 
                    __metadata('design:paramtypes', [])
                ], AuthResetPasswordComponent);
                return AuthResetPasswordComponent;
            }());
            exports_1("AuthResetPasswordComponent", AuthResetPasswordComponent);
        }
    }
});

System.register(['angular2/core', 'angular2/router', "./reos-navigation/components/navigation.component", "./reos-navigation/components/nav-item.component", "./reos-home/components/home.component", "./reos-contact/components/contact.component", "./reos-about/components/about.component", "./reos-authentication/components/login.component", "./reos-authentication/components/register.component", "./reos-authentication/components/resetpassword.component"], function(exports_1, context_1) {
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
    var core_1, router_1, navigation_component_1, nav_item_component_1, home_component_1, contact_component_1, about_component_1, login_component_1, register_component_1, resetpassword_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (navigation_component_1_1) {
                navigation_component_1 = navigation_component_1_1;
            },
            function (nav_item_component_1_1) {
                nav_item_component_1 = nav_item_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            },
            function (resetpassword_component_1_1) {
                resetpassword_component_1 = resetpassword_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'Root',
                            component: home_component_1.HomeComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/contact',
                            name: 'Contact',
                            component: contact_component_1.ContactComponent
                        },
                        {
                            path: '/about',
                            name: 'About',
                            component: about_component_1.AboutComponent
                        },
                        {
                            path: '/login',
                            name: 'AuthLogin',
                            component: login_component_1.AuthLoginComponent
                        },
                        {
                            path: '/register',
                            name: 'AuthRegister',
                            component: register_component_1.AuthRegisterComponent
                        },
                        {
                            path: '/resetpassword',
                            name: 'AuthResetPassword',
                            component: resetpassword_component_1.AuthResetPasswordComponent
                        }
                    ]),
                    core_1.Component({
                        template: "\n                <reos-navigation></reos-navigation>\n                \n                <router-outlet></router-outlet>\n              ",
                        selector: 'my-app',
                        directives: [
                            router_1.ROUTER_DIRECTIVES,
                            navigation_component_1.NavigationComponent,
                            nav_item_component_1.NavItemComponent
                        ],
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

/// <reference path="../../../node_modules/angular2/typings/browser.d.ts" />
System.register(['angular2/platform/browser', 'angular2/router', './app.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, router_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS
            ]);
        }
    }
});
