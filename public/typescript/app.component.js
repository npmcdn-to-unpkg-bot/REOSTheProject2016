System.register(['angular2/core', 'angular2/router', "./reos-navigation/components/navigation.component", "./reos-home/components/home.component", "./reos-contact/components/contact.component", "./reos-about/components/about.component", "./reos-authentication/components/login.component", "./reos-authentication/components/register.component", "./reos-authentication/components/resetpassword.component", "./reos-user/components/reos-user.component", "./reos-profile/components/profile.component", "./education/components/edu-course.component", "./education/components/edu-test.component", "./education/components/edu-course-manager.component", "./education/components/edu-test-manager.component"], function(exports_1, context_1) {
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
    var core_1, router_1, navigation_component_1, home_component_1, contact_component_1, about_component_1, login_component_1, register_component_1, resetpassword_component_1, reos_user_component_1, profile_component_1, edu_course_component_1, edu_test_component_1, edu_course_manager_component_1, edu_test_manager_component_1;
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
            },
            function (reos_user_component_1_1) {
                reos_user_component_1 = reos_user_component_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            },
            function (edu_course_component_1_1) {
                edu_course_component_1 = edu_course_component_1_1;
            },
            function (edu_test_component_1_1) {
                edu_test_component_1 = edu_test_component_1_1;
            },
            function (edu_course_manager_component_1_1) {
                edu_course_manager_component_1 = edu_course_manager_component_1_1;
            },
            function (edu_test_manager_component_1_1) {
                edu_test_manager_component_1 = edu_test_manager_component_1_1;
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
                            path: '/profile/myprofile',
                            name: 'MyProfile',
                            component: profile_component_1.REOSProfileComponent
                        },
                        {
                            path: '/profile/courses',
                            name: 'MyCourse',
                            component: edu_course_component_1.EduCourseComponent
                        },
                        {
                            path: '/profile/tests',
                            name: 'MyTest',
                            component: edu_test_component_1.EduTestComponent
                        },
                        {
                            path: '/studio/courses',
                            name: 'CourseManager',
                            component: edu_course_manager_component_1.EduCourseManagerComponent
                        },
                        {
                            path: '/studio/tests',
                            name: 'TestManager',
                            component: edu_test_manager_component_1.EduTestManagerComponent
                        },
                        {
                            path: '/studio/users',
                            name: 'UserManager',
                            component: reos_user_component_1.REOSUserComponent
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
                        selector: 'my-app',
                        templateUrl: 'typescript/app.html',
                        directives: [router_1.ROUTER_DIRECTIVES, navigation_component_1.NavigationComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
