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
    var EduTestService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            EduTestService = (function () {
                function EduTestService() {
                    this.tests = [
                        { "UserID": 11, "Username": "Nice", "Fullname": "Mr. Nice", "Email": "test@test.teszt" },
                        { "UserID": 12, "Username": "Narco", "Fullname": "Narco", "Email": "test@test.teszt" },
                        { "UserID": 13, "Username": "Bombasto", "Fullname": "Bombasto", "Email": "test@test.teszt" },
                        { "UserID": 14, "Username": "Celeritas", "Fullname": "Celeritas", "Email": "test@test.teszt" },
                        { "UserID": 15, "Username": "Magneta", "Fullname": "Magneta", "Email": "test@test.teszt" },
                        { "UserID": 16, "Username": "RubberMan", "Fullname": "RubberMan", "Email": "test@test.teszt" },
                        { "UserID": 17, "Username": "Dynama", "Fullname": "Dynama", "Email": "test@test.teszt" },
                        { "UserID": 18, "Username": "Dr IQ", "Fullname": "Dr IQ", "Email": "test@test.teszt" },
                        { "UserID": 19, "Username": "Magma", "Fullname": "Magma", "Email": "test@test.teszt" },
                        { "UserID": 20, "Username": "Tornado", "Fullname": "Tornado", "Email": "test@test.teszt" }
                    ];
                }
                EduTestService.prototype.getTests = function () {
                    return this.tests;
                };
                ;
                EduTestService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], EduTestService);
                return EduTestService;
            }());
            exports_1("EduTestService", EduTestService);
        }
    }
});
