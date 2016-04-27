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
    var EduCourseService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            EduCourseService = (function () {
                function EduCourseService() {
                    this.courses = [
                        { "CourseID": 11, "Title": "PHP", "Description": "Mr. Nice", "CountLesson": "12" },
                        { "CourseID": 12, "Title": "Java", "Description": "Narco", "CountLesson": "12" },
                        { "CourseID": 13, "Title": "CSS3", "Description": "Bombasto", "CountLesson": "12" },
                        { "CourseID": 14, "Title": "HTML5", "Description": "Celeritas", "CountLesson": "12" },
                        { "CourseID": 15, "Title": "JavaScript", "Description": "Magneta", "CountLesson": "12" },
                        { "CourseID": 16, "Title": "C#", "Description": "RubberMan", "CountLesson": "12" },
                        { "CourseID": 17, "Title": "SQL", "Description": "Dynama", "CountLesson": "12" },
                        { "CourseID": 18, "Title": "Git", "Description": "Dr IQ", "CountLesson": "12" },
                        { "CourseID": 19, "Title": "NodeJS", "Description": "Magma", "CountLesson": "12" },
                        { "CourseID": 20, "Title": "Laravel 5", "Description": "Tornado", "CountLesson": "12" }
                    ];
                }
                EduCourseService.prototype.getCourses = function () {
                    return this.courses;
                };
                ;
                EduCourseService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], EduCourseService);
                return EduCourseService;
            }());
            exports_1("EduCourseService", EduCourseService);
        }
    }
});
