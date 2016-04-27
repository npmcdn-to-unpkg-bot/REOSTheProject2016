System.register(['angular2/core', './../services/edu-course.service'], function(exports_1, context_1) {
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
    var core_1, edu_course_service_1;
    var EduCourseManagerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (edu_course_service_1_1) {
                edu_course_service_1 = edu_course_service_1_1;
            }],
        execute: function() {
            EduCourseManagerComponent = (function () {
                function EduCourseManagerComponent(_eduCourseService) {
                    this._eduCourseService = _eduCourseService;
                    this.courses = this._eduCourseService.getCourses();
                    console.log(this._eduCourseService.getCourses());
                }
                EduCourseManagerComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'typescript/education/partials/edu-course-manager.html',
                        providers: [edu_course_service_1.EduCourseService]
                    }), 
                    __metadata('design:paramtypes', [edu_course_service_1.EduCourseService])
                ], EduCourseManagerComponent);
                return EduCourseManagerComponent;
            }());
            exports_1("EduCourseManagerComponent", EduCourseManagerComponent);
        }
    }
});
