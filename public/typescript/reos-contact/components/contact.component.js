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
                        template: "\n\n<div style=\"width:100%;background:#f2f2f2;height:100%;position: absolute;padding-left: 310px;\">\n\t<div style=\"width: 100%;text-align: center;font-size: 34px;margin-top: 50px;\">\n\t\t<i class=\"fa fa-at fa-4x\"></i>\n\t</div>\n\n\t<div style=\"width: 100%;text-align: center;font-size: 34px;\">\n\t<h2>KAPCSOLAT</h2>\n\t</div>\t\n\n\t<div style=\"width: 100%;text-align: center;font-size: 24px;\">\n\t\t<p style=\"background:#E2E2E2;padding:10px;width:40%;margin: 0 auto;\">K\u00E9rd\u00E9s eset\u00E9n fordulj hozz\u00E1nk bizalommal!</p>\n\t</div>\n</div>\n  ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], ContactComponent);
                return ContactComponent;
            }());
            exports_1("ContactComponent", ContactComponent);
        }
    }
});
