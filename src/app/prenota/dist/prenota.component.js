"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PrenotaComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var PrenotaComponent = /** @class */ (function () {
    function PrenotaComponent(ServizioPrenota) {
        this.ServizioPrenota = ServizioPrenota;
        this.loginform = new forms_1.FormGroup({
            codice: new forms_1.FormControl('', [forms_1.Validators.required])
        });
        this.codice2 = '';
    }
    Object.defineProperty(PrenotaComponent.prototype, "codice", {
        get: function () { return this.loginform.get(''); },
        enumerable: false,
        configurable: true
    });
    PrenotaComponent.prototype.ngOnInit = function () {
        console.log(sessionStorage.getItem("libro.codice"));
        this.valoreCodiceCopia = sessionStorage.getItem("libro.codice");
    };
    PrenotaComponent.prototype.prenotaCopia = function () {
        var _this = this;
        console.log("PRENOTACOPIA " + this.valoreCodiceCopia + this.codice2);
        this.ServizioPrenota.prestito(this.valoreCodiceCopia, this.valoreCodiceCopia + this.codice2).subscribe(function (data) {
            _this.loginform = data;
        }, function (err) {
            _this.loginform = JSON.parse(err.error).message;
        });
    };
    PrenotaComponent = __decorate([
        core_1.Component({
            selector: 'app-prenota',
            templateUrl: './prenota.component.html',
            styleUrls: ['./prenota.component.css']
        })
    ], PrenotaComponent);
    return PrenotaComponent;
}());
exports.PrenotaComponent = PrenotaComponent;
