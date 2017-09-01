webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-resume>\n</app-resume>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__ = __webpack_require__("../../../flex-layout/@angular/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__resume_resume_component__ = __webpack_require__("../../../../../src/app/resume/resume.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__summary_summary_component__ = __webpack_require__("../../../../../src/app/summary/summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__experience_experience_component__ = __webpack_require__("../../../../../src/app/experience/experience.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__education_education_component__ = __webpack_require__("../../../../../src/app/education/education.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__skill_skill_component__ = __webpack_require__("../../../../../src/app/skill/skill.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__resume_service__ = __webpack_require__("../../../../../src/app/resume.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__confirm_dialog_confirm_dialog_component__ = __webpack_require__("../../../../../src/app/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__project_project_component__ = __webpack_require__("../../../../../src/app/project/project.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__resume_resume_component__["a" /* ResumeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__summary_summary_component__["b" /* SummaryComponent */],
                __WEBPACK_IMPORTED_MODULE_11__summary_summary_component__["a" /* EditSummaryDialog */],
                __WEBPACK_IMPORTED_MODULE_12__experience_experience_component__["a" /* ExperienceComponent */],
                __WEBPACK_IMPORTED_MODULE_12__experience_experience_component__["b" /* PositionDialog */],
                __WEBPACK_IMPORTED_MODULE_13__education_education_component__["b" /* EducationDialog */],
                __WEBPACK_IMPORTED_MODULE_14__skill_skill_component__["b" /* SkillDialog */],
                __WEBPACK_IMPORTED_MODULE_13__education_education_component__["a" /* EducationComponent */],
                __WEBPACK_IMPORTED_MODULE_14__skill_skill_component__["a" /* SkillComponent */],
                __WEBPACK_IMPORTED_MODULE_17__project_project_component__["a" /* ProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_17__project_project_component__["b" /* ProjectDialog */],
                __WEBPACK_IMPORTED_MODULE_16__confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__education_education_component__["b" /* EducationDialog */],
                __WEBPACK_IMPORTED_MODULE_12__experience_experience_component__["b" /* PositionDialog */],
                __WEBPACK_IMPORTED_MODULE_14__skill_skill_component__["b" /* SkillDialog */],
                __WEBPACK_IMPORTED_MODULE_11__summary_summary_component__["a" /* EditSummaryDialog */],
                __WEBPACK_IMPORTED_MODULE_17__project_project_component__["b" /* ProjectDialog */],
                __WEBPACK_IMPORTED_MODULE_16__confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_15__resume_service__["a" /* ResumeService */], __WEBPACK_IMPORTED_MODULE_6__angular_common__["d" /* Location */], { provide: __WEBPACK_IMPORTED_MODULE_6__angular_common__["e" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_6__angular_common__["h" /* PathLocationStrategy */] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/confirm-dialog/confirm-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 md-dialog-title>Confirm</h3>\n<div md-dialog-content>\n  {{ message }}\n</div>\n<div md-dialog-actions>\n  <button md-button color=\"primary\" (click)=\"dialogRef.close(false)\">Cancel</button>\n  <button md-button color=\"primary\" (click)=\"dialogRef.close(true)\">Ok</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/confirm-dialog/confirm-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    ConfirmDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-confirm-dialog',
            template: __webpack_require__("../../../../../src/app/confirm-dialog/confirm-dialog.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */]) === "function" && _a || Object])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
    var _a;
}());

//# sourceMappingURL=confirm-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/education/education.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n  <h1><md-icon>school</md-icon>Education</h1>\n  <md-card>\n    <md-list>\n      <md-list-item *ngFor=\"let education of educations\">\n        <h3 md-line>{{education.field}} - {{education.school}}</h3>\n        <p md-line class=\"date-label\">{{months[education.startDate.month] + ' ' + education.startDate.year}} - {{education.endDate ? (months[education.endDate.month] + ' ' + education.endDate.year) : 'Present'}}</p>\n        <p md-line>{{education.degree ? education.degree : '-'}}</p>\n        <button *ngIf=\"resumeService.editMode\" md-icon-button color=\"primary\" (click)=\"editEducation(education)\">\n          <md-icon>edit</md-icon>\n        </button>\n        <button *ngIf=\"resumeService.editMode\" md-icon-button color=\"primary\" (click)=\"deleteEducation(education)\">\n          <md-icon>delete</md-icon>\n        </button>\n      </md-list-item>\n    </md-list>\n    <md-card-actions *ngIf=\"resumeService.editMode\">\n      <button md-button color=\"primary\" (click)=\"newEducation()\">Add Education</button>\n    </md-card-actions>\n  </md-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/education/education.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EducationDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resume_service__ = __webpack_require__("../../../../../src/app/resume.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__confirm_dialog_confirm_dialog_component__ = __webpack_require__("../../../../../src/app/confirm-dialog/confirm-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EducationComponent = /** @class */ (function () {
    function EducationComponent(dialog, viewContainerRef, resumeService) {
        this.dialog = dialog;
        this.viewContainerRef = viewContainerRef;
        this.resumeService = resumeService;
    }
    EducationComponent.prototype.ngOnInit = function () {
        this.months = this.resumeService.months;
        this.educations = this.educations || [];
        this.sortEducations();
    };
    EducationComponent.prototype.newEducation = function () {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogConfig */]();
        config.width = "75vw";
        var dialogRef = this.dialog.open(EducationDialog, config);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                result.endDate = result.current ? null : result.endDate;
                _this.educations = _this.resumeService.addEducation(result);
                _this.sortEducations();
            }
        });
    };
    EducationComponent.prototype.editEducation = function (education) {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogConfig */]();
        config.viewContainerRef = this.viewContainerRef;
        config.width = "75vw";
        var dialogRef = this.dialog.open(EducationDialog, config);
        dialogRef.componentInstance.education = education;
        dialogRef.afterClosed().subscribe(function (result) {
            _this.educations = result ? _this.resumeService.updateEducations(_this.educations) :
                _this.resumeService.retrieveResume().educations;
            _this.sortEducations();
        });
    };
    EducationComponent.prototype.deleteEducation = function (education) {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogConfig */]();
        config.viewContainerRef = this.viewContainerRef;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */], config);
        dialogRef.componentInstance.message = "Are you sure you want to remove your work education at " + education.school + "?";
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.educations = _this.resumeService.removeEducation(education);
            }
        });
    };
    // Sort by start date
    EducationComponent.prototype.sortEducations = function () {
        this.educations.sort(function (a, b) {
            return b.startDate.year - a.startDate.year ? b.startDate.year - a.startDate.year :
                b.startDate.month - a.startDate.month;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], EducationComponent.prototype, "educations", void 0);
    EducationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-education',
            template: __webpack_require__("../../../../../src/app/education/education.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewContainerRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__resume_service__["a" /* ResumeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__resume_service__["a" /* ResumeService */]) === "function" && _c || Object])
    ], EducationComponent);
    return EducationComponent;
    var _a, _b, _c;
}());

// Add new education dialog
var EducationDialog = /** @class */ (function () {
    function EducationDialog(dialogRef, resumeService) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.resumeService = resumeService;
        this.degreeCtrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]();
        this.filteredDegrees = this.degreeCtrl.valueChanges
            .startWith(null)
            .map(function (val) { return _this.filterDegrees(val); });
        this.education = {
            school: '',
            field: '',
            current: true,
            startDate: this.resumeService.todayAsYearMonth(),
            endDate: this.resumeService.todayAsYearMonth(),
            degree: ''
        };
        this.years = resumeService.years;
        this.months = resumeService.months;
        this.degrees = resumeService.degrees;
    }
    EducationDialog.prototype.ngOnInit = function () {
        // Assume edit mode if school isn't blank
        this.editMode = this.education && this.education.school.length > 0;
    };
    EducationDialog.prototype.filterDegrees = function (val) {
        return val ? this.degrees.filter(function (s) { return new RegExp(val, 'gi').test(s); }) : this.degrees;
    };
    EducationDialog.prototype.currentChanged = function () {
        if (!this.education.current && !this.education.endDate) {
            this.education.endDate = this.resumeService.todayAsYearMonth();
        }
    };
    EducationDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n    <h3 md-dialog-title>{{editMode ? 'Edit ' : 'Add new '}}education</h3>\n    <div md-dialog-content fxLayout=\"column\">\n\n      <md-input-container>\n        <input mdInput\n          [(ngModel)]=\"education.school\"\n          placeholder=\"School\">\n      </md-input-container>\n\n      <md-input-container>\n        <input mdInput\n          [(ngModel)]=\"education.field\"\n          placeholder=\"Field of Study\">\n      </md-input-container>\n\n      <md-input-container>\n        <input mdInput\n              [(ngModel)]=\"education.degree\"\n              placeholder=\"Degree\"\n              [formControl]=\"degreeCtrl\"\n              [mdAutocomplete]=\"auto\">\n      </md-input-container>\n      <md-autocomplete #auto=\"mdAutocomplete\">\n        <md-option *ngFor=\"let degree of filteredDegrees | async\" [value]=\"degree\">\n          {{ degree }}\n        </md-option>\n      </md-autocomplete>\n\n      <div class=\"date-container\">\n        <label>From</label>\n        <div fxLayout=\"row\">\n          <md-select fxFlex=\"50\" [(ngModel)]=\"education.startDate.year\" placeholder=\"Year\">\n            <md-option *ngFor=\"let year of years\" [value]=\"year\"> {{year}} </md-option>\n          </md-select>\n          <md-select fxFlex=\"50\" [(ngModel)]=\"education.startDate.month\" placeholder=\"Month\">\n            <md-option *ngFor=\"let month of months\" [value]=\"months.indexOf(month)\"> {{month}} </md-option>\n          </md-select>\n        </div>\n      </div>\n      <md-checkbox [(ngModel)]=\"education.current\" (change)=\"currentChanged()\">\n        Current education\n      </md-checkbox>\n      <div class=\"date-container\" *ngIf=\"!education.current\">\n        <label>To</label>\n        <div fxLayout=\"row\">\n          <md-select fxFlex=\"50\" [(ngModel)]=\"education.endDate.year\" placeholder=\"Year\">\n            <md-option *ngFor=\"let year of years\" [value]=\"year\"> {{year}} </md-option>\n          </md-select>\n          <md-select fxFlex=\"50\" [(ngModel)]=\"education.endDate.month\" placeholder=\"Month\">\n            <md-option *ngFor=\"let month of months\" [value]=\"months.indexOf(month)\"> {{month}} </md-option>\n          </md-select>\n        </div>\n      </div>\n    </div>\n\n    <div md-dialog-actions>\n      <button md-button color=\"primary\" (click)=\"dialogRef.close()\">Cancel</button>\n      <button md-button color=\"primary\" (click)=\"dialogRef.close(education)\">Save</button>\n    </div>\n  ",
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__resume_service__["a" /* ResumeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__resume_service__["a" /* ResumeService */]) === "function" && _b || Object])
    ], EducationDialog);
    return EducationDialog;
    var _a, _b;
}());

//# sourceMappingURL=education.component.js.map

/***/ }),

/***/ "../../../../../src/app/experience/experience.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n  <h1><md-icon>work</md-icon>Work experience</h1>\n  <md-card>\n    <md-list>\n      <md-list-item *ngFor=\"let position of positions\">\n        <h3 md-line>{{position.title}} - {{position.company}}</h3>\n        <p md-line class=\"date-label\">{{months[position.startDate.month] + ' ' + position.startDate.year}} - {{position.endDate ? (months[position.endDate.month] + ' ' + position.endDate.year) : 'Present'}}</p>\n        <p md-line [mdTooltip]=\"position.summary\">{{position.summary ? position.summary : '-'}}</p>\n        <button *ngIf=\"resumeService.editMode\" md-icon-button color=\"primary\" (click)=\"editPosition(position)\">\n          <md-icon>edit</md-icon>\n        </button>\n        <button *ngIf=\"resumeService.editMode\" md-icon-button color=\"primary\" (click)=\"deletePosition(position)\">\n          <md-icon>delete</md-icon>\n        </button>\n      </md-list-item>\n    </md-list>\n    <md-card-actions *ngIf=\"resumeService.editMode\">\n      <button md-button color=\"primary\" (click)=\"newPosition()\">Add Position</button>\n    </md-card-actions>\n  </md-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/experience/experience.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperienceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PositionDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resume_service__ = __webpack_require__("../../../../../src/app/resume.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__confirm_dialog_confirm_dialog_component__ = __webpack_require__("../../../../../src/app/confirm-dialog/confirm-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent(dialog, viewContainerRef, resumeService) {
        this.dialog = dialog;
        this.viewContainerRef = viewContainerRef;
        this.resumeService = resumeService;
    }
    ExperienceComponent.prototype.ngOnInit = function () {
        this.months = this.resumeService.months;
        this.positions = this.positions || [];
        this.sortPositions();
    };
    ExperienceComponent.prototype.newPosition = function () {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogConfig */]();
        config.width = "75vw";
        var dialogRef = this.dialog.open(PositionDialog, config);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                result.endDate = result.current ? null : result.endDate;
                _this.positions = _this.resumeService.addPosition(result);
                _this.sortPositions();
            }
        });
    };
    ExperienceComponent.prototype.editPosition = function (position) {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogConfig */]();
        config.viewContainerRef = this.viewContainerRef;
        config.width = "75vw";
        var dialogRef = this.dialog.open(PositionDialog, config);
        dialogRef.componentInstance.position = position;
        dialogRef.afterClosed().subscribe(function (result) {
            _this.positions = result ? _this.resumeService.updatePositions(_this.positions) :
                _this.resumeService.retrieveResume().positions;
            _this.sortPositions();
        });
    };
    ExperienceComponent.prototype.deletePosition = function (position) {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogConfig */]();
        config.viewContainerRef = this.viewContainerRef;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */], config);
        dialogRef.componentInstance.message = "Are you sure you want to remove your work experience at " + position.company + "?";
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.positions = _this.resumeService.removePosition(position);
            }
        });
    };
    // Sort by start date
    ExperienceComponent.prototype.sortPositions = function () {
        this.positions.sort(function (a, b) {
            return b.startDate.year - a.startDate.year ? b.startDate.year - a.startDate.year :
                b.startDate.month - a.startDate.month;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ExperienceComponent.prototype, "positions", void 0);
    ExperienceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-experience',
            template: __webpack_require__("../../../../../src/app/experience/experience.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewContainerRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */]) === "function" && _c || Object])
    ], ExperienceComponent);
    return ExperienceComponent;
    var _a, _b, _c;
}());

// Add new position dialog
var PositionDialog = /** @class */ (function () {
    function PositionDialog(dialogRef, resumeService) {
        this.dialogRef = dialogRef;
        this.resumeService = resumeService;
        this.position = {
            company: '',
            current: true,
            startDate: this.resumeService.todayAsYearMonth(),
            endDate: this.resumeService.todayAsYearMonth(),
            summary: '',
            title: ''
        };
        this.years = resumeService.years;
        this.months = resumeService.months;
    }
    PositionDialog.prototype.ngOnInit = function () {
        // Assume edit mode if company isn't blank
        this.editMode = this.position && this.position.company.length > 0;
    };
    PositionDialog.prototype.currentChanged = function () {
        if (!this.position.current && !this.position.endDate) {
            this.position.endDate = this.resumeService.todayAsYearMonth();
        }
    };
    PositionDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n    <h3 md-dialog-title>{{ editMode ? 'Edit ' : 'Add new '}}position</h3>\n    <div md-dialog-content fxLayout=\"column\">\n      <md-input-container>\n        <input mdInput\n          [(ngModel)]=\"position.company\"\n          placeholder=\"Company\">\n      </md-input-container>\n      <md-input-container>\n        <input mdInput\n          [(ngModel)]=\"position.title\"\n          placeholder=\"Title\">\n      </md-input-container>\n      <md-input-container>\n        <textarea mdInput\n        [(ngModel)]=\"position.summary\"\n        rows=\"4\" placeholder=\"Summary\"></textarea>\n      </md-input-container>\n      <div class=\"date-container\">\n        <label>From</label>\n        <div fxLayout=\"row\">\n          <md-select fxFlex=\"50\" [(ngModel)]=\"position.startDate.year\" placeholder=\"Year\">\n            <md-option *ngFor=\"let year of years\" [value]=\"year\"> {{year}} </md-option>\n          </md-select>\n          <md-select fxFlex=\"50\" [(ngModel)]=\"position.startDate.month\" placeholder=\"Month\">\n            <md-option *ngFor=\"let month of months\" [value]=\"months.indexOf(month)\"> {{month}} </md-option>\n          </md-select>\n        </div>\n      </div>\n      <md-checkbox [(ngModel)]=\"position.current\" (change)=\"currentChanged()\">\n        Current job\n      </md-checkbox>\n      <div class=\"date-container\" *ngIf=\"!position.current\">\n        <label>To</label>\n        <div fxLayout=\"row\">\n          <md-select fxFlex=\"50\" [(ngModel)]=\"position.endDate.year\" placeholder=\"Year\">\n            <md-option *ngFor=\"let year of years\" [value]=\"year\"> {{year}} </md-option>\n          </md-select>\n          <md-select fxFlex=\"50\" [(ngModel)]=\"position.endDate.month\" placeholder=\"Month\">\n            <md-option *ngFor=\"let month of months\" [value]=\"months.indexOf(month)\"> {{month}} </md-option>\n          </md-select>\n        </div>\n      </div>\n    </div>\n    <div md-dialog-actions>\n      <button md-button color=\"primary\" (click)=\"dialogRef.close()\">Cancel</button>\n      <button md-button color=\"primary\" (click)=\"dialogRef.close(position)\">Save</button>\n    </div>\n  ",
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */]) === "function" && _b || Object])
    ], PositionDialog);
    return PositionDialog;
    var _a, _b;
}());

//# sourceMappingURL=experience.component.js.map

/***/ }),

/***/ "../../../../../src/app/project/project.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n  <h1><md-icon>trending_up</md-icon>Projects</h1>\n  <div *ngIf=\"resumeService.editMode\">\n    <button md-raised-button color=\"primary\" (click)=\"newProject()\" *ngIf=\"resumeService.editMode\">Add Project</button>\n  </div>\n  <div class=\"masonry\">\n    <div class=\"item\" *ngFor=\"let project of projects\">\n      <md-card>\n        <md-card-header>\n          <md-card-title>{{project.name}}</md-card-title>\n          <md-card-subtitle>\n            {{ months[project.startDate.month] + ' ' + project.startDate.year}} - {{project.endDate ? (months[project.endDate.month] + ' ' + project.endDate.year) : 'Present' }}\n          </md-card-subtitle>\n        </md-card-header>\n        <img *ngIf=\"project.imageUrl\" md-card-image [src]=\"project.imageUrl\">\n        <md-card-content>\n          <p>\n            {{ project.description }}\n          </p>\n        </md-card-content>\n        <md-card-actions>\n          <a md-button color=\"primary\" [href]=\"project.web\" target=\"_project\" *ngIf=\"project.web\">Visit Page</a>\n          <button md-button color=\"primary\" (click)=\"editProject(project)\" *ngIf=\"resumeService.editMode\"><md-icon>edit</md-icon></button>\n          <button md-button color=\"primary\" (click)=\"deleteProject(project)\" *ngIf=\"resumeService.editMode\"><md-icon>delete</md-icon></button>\n        </md-card-actions>\n      </md-card>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/project/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProjectDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resume_service__ = __webpack_require__("../../../../../src/app/resume.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__confirm_dialog_confirm_dialog_component__ = __webpack_require__("../../../../../src/app/confirm-dialog/confirm-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(dialog, viewContainerRef, resumeService) {
        this.dialog = dialog;
        this.viewContainerRef = viewContainerRef;
        this.resumeService = resumeService;
    }
    ProjectComponent.prototype.ngOnInit = function () {
        this.projects = this.projects || [];
        this.months = this.resumeService.months;
        this.sortProjects();
    };
    ProjectComponent.prototype.newProject = function () {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogConfig */]();
        config.width = "75vw";
        var dialogRef = this.dialog.open(ProjectDialog, config);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                result.endDate = result.current ? null : result.endDate;
                _this.projects = _this.resumeService.addProject(result);
                _this.sortProjects();
            }
        });
    };
    ProjectComponent.prototype.editProject = function (project) {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogConfig */]();
        config.viewContainerRef = this.viewContainerRef;
        config.width = "75vw";
        var dialogRef = this.dialog.open(ProjectDialog, config);
        dialogRef.componentInstance.project = project;
        dialogRef.afterClosed().subscribe(function (result) {
            _this.projects = result ? _this.resumeService.updateProjects(_this.projects) :
                _this.resumeService.retrieveResume().projects;
            _this.sortProjects();
        });
    };
    ProjectComponent.prototype.deleteProject = function (project) {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogConfig */]();
        config.viewContainerRef = this.viewContainerRef;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */], config);
        dialogRef.componentInstance.message = "Are you sure you want to remove your project " + project.name + "?";
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.projects = _this.resumeService.removeProject(project);
            }
        });
    };
    // Sort by start date
    ProjectComponent.prototype.sortProjects = function () {
        this.projects.sort(function (a, b) {
            return b.startDate.year - a.startDate.year ? b.startDate.year - a.startDate.year :
                b.startDate.month - a.startDate.month;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ProjectComponent.prototype, "projects", void 0);
    ProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-project',
            template: __webpack_require__("../../../../../src/app/project/project.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewContainerRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */]) === "function" && _c || Object])
    ], ProjectComponent);
    return ProjectComponent;
    var _a, _b, _c;
}());

// Add new project dialog
var ProjectDialog = /** @class */ (function () {
    function ProjectDialog(dialogRef, resumeService) {
        this.dialogRef = dialogRef;
        this.resumeService = resumeService;
        this.project = {
            name: '',
            description: '',
            imageUrl: '',
            web: '',
            current: true,
            startDate: this.resumeService.todayAsYearMonth(),
            endDate: this.resumeService.todayAsYearMonth()
        };
        this.years = resumeService.years;
        this.months = resumeService.months;
    }
    ProjectDialog.prototype.ngOnInit = function () {
        // Assume edit mode if name isn't blank
        this.editMode = this.project && this.project.name.length > 0;
    };
    ProjectDialog.prototype.currentChanged = function () {
        if (!this.project.current && !this.project.endDate) {
            this.project.endDate = this.resumeService.todayAsYearMonth();
        }
    };
    ProjectDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n    <h3 md-dialog-title>{{editMode ? 'Edit ' : 'Add new '}}project</h3>\n    <div md-dialog-content fxLayout=\"column\">\n      <md-input-container>\n        <input mdInput\n          [(ngModel)]=\"project.name\"\n          placeholder=\"Project name\">\n      </md-input-container>\n      <md-input-container>\n        <textarea mdInput\n          rows=\"4\"\n          [(ngModel)]=\"project.description\"\n          placeholder=\"Project description\">\n        </textarea>\n      </md-input-container>\n      <md-input-container>\n        <input mdInput\n          [(ngModel)]=\"project.imageUrl\"\n          placeholder=\"Project logo url (Optional)\">\n      </md-input-container>\n      <md-input-container>\n        <input mdInput\n          [(ngModel)]=\"project.web\"\n          placeholder=\"Project website (Optional)\">\n      </md-input-container>\n      <div class=\"date-container\">\n        <label class=\"select-label\">From</label>\n        <div fxLayout=\"row\">\n          <md-select fxFlex=\"50\" [(ngModel)]=\"project.startDate.year\" placeholder=\"Year\">\n            <md-option *ngFor=\"let year of years\" [value]=\"year\"> {{year}} </md-option>\n          </md-select>\n          <md-select fxFlex=\"50\" [(ngModel)]=\"project.startDate.month\" placeholder=\"Month\">\n            <md-option *ngFor=\"let month of months\" [value]=\"months.indexOf(month)\"> {{month}} </md-option>\n          </md-select>\n        </div>\n      </div>\n      <md-checkbox [(ngModel)]=\"project.current\" (change)=\"currentChanged()\">\n        Current project\n      </md-checkbox>\n      <div class=\"date-container\" *ngIf=\"!project.current\">\n        <label class=\"select-label\">To</label>\n        <div fxLayout=\"row\">\n          <md-select fxFlex=\"50\" [(ngModel)]=\"project.endDate.year\" placeholder=\"Year\">\n            <md-option *ngFor=\"let year of years\" [value]=\"year\"> {{year}} </md-option>\n          </md-select>\n          <md-select fxFlex=\"50\" [(ngModel)]=\"project.endDate.month\" placeholder=\"Month\">\n            <md-option *ngFor=\"let month of months\" [value]=\"months.indexOf(month)\"> {{month}} </md-option>\n          </md-select>\n        </div>\n      </div>\n    </div>\n    <div md-dialog-actions>\n      <button md-button color=\"primary\" (click)=\"dialogRef.close()\">Cancel</button>\n      <button md-button color=\"primary\" (click)=\"dialogRef.close(project)\">Save</button>\n    </div>\n  ",
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */]) === "function" && _b || Object])
    ], ProjectDialog);
    return ProjectDialog;
    var _a, _b;
}());

//# sourceMappingURL=project.component.js.map

/***/ }),

/***/ "../../../../../src/app/resume.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResumeService = /** @class */ (function () {
    function ResumeService(location) {
        this.STORAGE_KEY = 'resume';
        this.THEME_KEY = 'theme';
        this.RESUME = {
            name: 'Mats Roshauw',
            title: 'Frontend engineer',
            pictureUrl: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/010/3a0/1d2671f.jpg',
            summary: 'Good stuff dev',
            email: 'mats@mail.com',
            phone: '0707-777777',
            positions: [{
                    company: 'Acando',
                    startDate: {
                        year: 2011,
                        month: 6
                    },
                    endDate: {
                        year: 2013,
                        month: 6
                    },
                    current: false,
                    summary: 'Consulting stuffs',
                    title: 'IT consultant'
                }, {
                    company: 'Seal',
                    startDate: {
                        year: 2013,
                        month: 6
                    },
                    current: true,
                    summary: 'Frontend stuffs',
                    title: 'Frontend developer'
                }],
            educations: [{
                    degree: 'Bachelor',
                    school: 'Växjö Unversity',
                    startDate: {
                        year: 2003,
                        month: 8
                    },
                    endDate: {
                        year: 2006,
                        month: 6
                    },
                    field: 'Computer science'
                }, {
                    degree: 'Master',
                    school: 'Chalmers Unversity',
                    startDate: {
                        year: 2006,
                        month: 8
                    },
                    endDate: {
                        year: 2007,
                        month: 1
                    },
                    field: 'Computer gaming'
                }],
            projects: [{
                    name: 'GoCD monitor',
                    description: 'Build monitor for Go cd build server. Techniques included ReactJS and NodeJS',
                    startDate: {
                        year: 2016,
                        month: 1
                    },
                    current: true,
                    imageUrl: 'https://www.gocd.io/assets/images/blog/gocd-versions/gocd_15_2-d6c97247.png',
                    web: 'https://github.com/karmats/gocd-monitor'
                },
                {
                    name: 'Resume Generator',
                    description: 'Generates a resume in material design, that can be stored and put up on your website. Written in Angular 2.',
                    startDate: {
                        year: 2016,
                        month: 10
                    },
                    current: true,
                    imageUrl: 'https://d13yacurqjgara.cloudfront.net/users/36126/screenshots/2228873/rb-logo_1x.png',
                    web: 'https://github.com/karmats/resume-generator'
                }],
            skills: [{
                    name: 'Angular',
                    competence: 90
                }, {
                    name: 'React',
                    competence: 60
                }, {
                    name: 'Javascript',
                    competence: 80
                }]
        };
        // Years and months to choose from when adding new content to resume
        this.years = [];
        this.months = [];
        // All posssible education degrees
        this.degrees = [
            'Associate’s Degree',
            'Bachelor’s Degree',
            'Master’s Degree',
            'Master of Business Administration (M.B.A)',
            'Juris Doctor (J.D.)',
            'Doctor of Medicine (M.D.)',
            'Doctor of Philosophy (Ph.D.)',
            'Engineer’s Degree',
            'Other'
        ];
        // EventEmitter to let components know when the resume is changed
        this.resumeChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */](false);
        // Create years to choose from, 1950 - current years
        var today = new Date();
        for (var year = 1950; year <= today.getFullYear(); year++) {
            this.years.push(year);
        }
        // To get the name of the month, use the browsers language and angular DatePipe,
        // the position in the array will tell which js month it is
        var datePipe = new __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* DatePipe */](navigator.language);
        for (var month = 1; month <= 12; month++) {
            var dateString = "2016-" + (month < 10 ? '0' : '') + month + "-15";
            this.months.push(datePipe.transform(dateString, 'MMMM '));
        }
        // Edit mode if path is /edit
        this.editMode = location.isCurrentPathEqualTo('/?edit');
    }
    /**
     * Saves resume in browser
     *
     * @param {Resume}  resume  The resume to store
     */
    ResumeService.prototype.saveResume = function (resume) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(resume));
    };
    /**
     * Retrive last saved resume stored in browser
     *
     * @return {Resume}  Latest stored resume
     */
    ResumeService.prototype.retrieveResume = function () {
        var resumeAsString = localStorage.getItem(this.STORAGE_KEY);
        return resumeAsString ? JSON.parse(resumeAsString) : this.RESUME;
    };
    /**
     * Adds a position to the saved resume and saves it.
     *
     * @param   {Position}  position  The position to add
     * @return  {Array<Position>}     Updated positions array
     */
    ResumeService.prototype.addPosition = function (position) {
        var currentResume = this.retrieveResume();
        currentResume.positions.push(position);
        this.saveResume(currentResume);
        return currentResume.positions;
    };
    /**
     * Update positions.
     *
     * @param   {Array<Position>}   positions   The positons to update resume with
     * @return  {Array<Position>}               Updated positions
     */
    ResumeService.prototype.updatePositions = function (positions) {
        var currentResume = this.retrieveResume();
        currentResume.positions = positions;
        this.saveResume(currentResume);
        return currentResume.positions;
    };
    /**
     * Removes a position.
     *
     * @param   {Position}        position  The position to remove
     * @return  {Array<Position>}           Positions after the deletion
     */
    ResumeService.prototype.removePosition = function (position) {
        var currentResume = this.retrieveResume();
        currentResume.positions = currentResume.positions.filter(function (p) { return p.company !== position.company; });
        this.saveResume(currentResume);
        return currentResume.positions;
    };
    /**
     * Adds an education to the saved resume and saves it.
     *
     * @param   {Education}  education  The education to add
     * @return  {Array<Education>}      Updated educations array
     */
    ResumeService.prototype.addEducation = function (education) {
        var currentResume = this.retrieveResume();
        currentResume.educations.push(education);
        this.saveResume(currentResume);
        return currentResume.educations;
    };
    /**
     * Update educations.
     *
     * @param   {Array<Education>}   educations   The educations to update resume with
     * @return  {Array<Education>}                Updated educations
     */
    ResumeService.prototype.updateEducations = function (educations) {
        var currentResume = this.retrieveResume();
        currentResume.educations = educations;
        this.saveResume(currentResume);
        return currentResume.educations;
    };
    /**
     * Removes an education.
     *
     * @param   {Education}        education  The education to remove
     * @return  {Array<Education>}            Educations after the deletion
     */
    ResumeService.prototype.removeEducation = function (education) {
        var currentResume = this.retrieveResume();
        currentResume.educations = currentResume.educations.filter(function (e) { return e.school !== education.school; });
        this.saveResume(currentResume);
        return currentResume.educations;
    };
    /**
     * Adds a skill to the saved resume and saves it.
     *
     * @param   {Skill}  skill  The skill to add
     * @return  {Array<Skill>}  Updated skills array
     */
    ResumeService.prototype.addSkill = function (skill) {
        var currentResume = this.retrieveResume();
        currentResume.skills.push(skill);
        this.saveResume(currentResume);
        return currentResume.skills;
    };
    /**
     * Update skills.
     *
     * @param   {Array<Skill>}   skills     The skills to update resume with
     * @return  {Array<Skill>}              Updated skills
     */
    ResumeService.prototype.updateSkills = function (skills) {
        var currentResume = this.retrieveResume();
        currentResume.skills = skills;
        this.saveResume(currentResume);
        return currentResume.skills;
    };
    /**
     * Removes a skill.
     *
     * @param   {Skill}             skill   The skill to remove
     * @return  {Array<Skill>}              Skills after the deletion
     */
    ResumeService.prototype.removeSkill = function (skill) {
        var currentResume = this.retrieveResume();
        currentResume.skills = currentResume.skills.filter(function (s) { return s.name !== skill.name; });
        this.saveResume(currentResume);
        return currentResume.skills;
    };
    /**
     * Adds a project to the saved resume and saves it.
     *
     * @param   {Project}         project   The project to add
     * @return  {Array<Project>}            Updated projects array
     */
    ResumeService.prototype.addProject = function (project) {
        var currentResume = this.retrieveResume();
        currentResume.projects.push(project);
        this.saveResume(currentResume);
        return currentResume.projects;
    };
    /**
     * Update projects.
     *
     * @param   {Array<Project>}    projects     The projects to update resume with
     * @return  {Array<Project>}                 Updated projects
     */
    ResumeService.prototype.updateProjects = function (projects) {
        var currentResume = this.retrieveResume();
        currentResume.projects = projects;
        this.saveResume(currentResume);
        return currentResume.projects;
    };
    /**
     * Stores current app theme
     *
     * @param themeName Name of the theme (css-class)
     * @param isDark    True if it's dark themed
     */
    ResumeService.prototype.updateTheme = function (themeName, isDark) {
        localStorage.setItem(this.THEME_KEY, JSON.stringify({ themeName: themeName, isDark: isDark }));
    };
    /**
     * Retrieve last saved theme
     *
     * @return Theme name and if it's dark
     */
    ResumeService.prototype.retrieveTheme = function () {
        var themeAsString = localStorage.getItem(this.THEME_KEY);
        return themeAsString ? JSON.parse(themeAsString) : {};
    };
    /**
     * Removes a project.
     *
     * @param   {Project}             project   The project to remove
     * @return  {Array<Project>}                Projects after the deletion
     */
    ResumeService.prototype.removeProject = function (project) {
        var currentResume = this.retrieveResume();
        currentResume.projects = currentResume.projects.filter(function (s) { return s.name !== project.name; });
        this.saveResume(currentResume);
        return currentResume.projects;
    };
    /**
     * Update resume personal information.
     */
    ResumeService.prototype.updateSummary = function (name, profileUrl, description, title, phone, email) {
        var currentResume = this.retrieveResume();
        currentResume.name = name;
        currentResume.pictureUrl = profileUrl;
        currentResume.summary = description;
        currentResume.title = title;
        currentResume.phone = phone;
        currentResume.email = email;
        this.saveResume(currentResume);
        return currentResume;
    };
    /**
     * Parse and save a resume stored in the standardized json resume format (https://github.com/jsonresume/resume-schema/blob/0.0.0/schema.json)
     *
     * @param jsonResume A json resume object
     */
    ResumeService.prototype.parseAndSaveJsonResume = function (jsonResume) {
        var _this = this;
        var basics = jsonResume.basics;
        var resume = {
            name: basics.name,
            title: basics.label,
            summary: basics.summary,
            phone: basics.phone,
            email: basics.email,
            pictureUrl: basics.picture,
            positions: jsonResume.work.map(function (w) {
                var sd = _this.dateAsYearMonth(new Date(w.startDate));
                var ed = w.endDate ? _this.dateAsYearMonth(new Date(w.endDate)) : null;
                return {
                    title: w.position,
                    summary: w.summary,
                    startDate: sd,
                    endDate: ed,
                    current: ed === null,
                    company: w.company
                };
            }),
            educations: jsonResume.education.map(function (e) {
                var sd = _this.dateAsYearMonth(new Date(e.startDate));
                var ed = e.endDate ? _this.dateAsYearMonth(new Date(e.endDate)) : null;
                return {
                    school: e.institution,
                    field: e.area,
                    startDate: sd,
                    endDate: ed,
                    current: ed === null,
                    degree: e.studyType
                };
            }),
            skills: jsonResume.skills.map(function (s) {
                return {
                    name: s.name,
                    competence: 0
                };
            }),
            projects: jsonResume.projects.map(function (p) {
                var sd = _this.dateAsYearMonth(new Date(p.startDate));
                var ed = p.endDate ? _this.dateAsYearMonth(new Date(p.endDate)) : null;
                return {
                    name: p.name,
                    description: p.summary,
                    startDate: sd,
                    endDate: ed,
                    current: ed === null,
                    web: p.url
                };
            })
        };
        this.saveResume(resume);
        // Tell components resume has changed
        this.resumeChanged.emit(resume);
    };
    /**
     * @return {YearAndMonth}   Todays date as YearAndMonth object
     */
    ResumeService.prototype.todayAsYearMonth = function () {
        return this.dateAsYearMonth(new Date());
    };
    /**
     * @return  {YearAndMonth}   A date as YearAndMonth object
     */
    ResumeService.prototype.dateAsYearMonth = function (d) {
        return d ? {
            year: d.getUTCFullYear(),
            month: d.getUTCMonth()
        } : null;
    };
    ResumeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* Location */]) === "function" && _a || Object])
    ], ResumeService);
    return ResumeService;
    var _a;
}());

//# sourceMappingURL=resume.service.js.map

/***/ }),

/***/ "../../../../../src/app/resume/resume.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Summary -->\n<div class=\"app-content\" [ngClass]=\"cssClasses()\">\n    <div *ngIf=\"resumeService.editMode\" class=\"theme-switch\">\n        <md-select placeholder=\"Theme\" [(ngModel)]=\"currentTheme\" (change)=\"themeChanged(currentTheme, darkTheme)\">\n            <md-option *ngFor=\"let theme of themes\" [value]=\"theme\">{{ theme.name }}</md-option>\n        </md-select>\n        <md-slide-toggle [(ngModel)]=\"darkTheme\" (change)=\"themeChanged(currentTheme, darkTheme)\">Dark</md-slide-toggle>\n    </div>\n    <div fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-between stretch\" fxLayoutWrap>\n        <aside fxFlex=\"30\" class=\"summary\">\n            <app-summary [picture]=\"resume.pictureUrl\" [name]=\"resume.name\" [description]=\"resume.summary\" [title]=\"resume.title\" [phone]=\"resume.phone\"\n                [email]=\"resume.email\" [skills]=\"resume.skills\">\n            </app-summary>\n        </aside>\n\n\n        <section fxFlex=\"70\">\n            <!-- Work experience -->\n            <app-experience [positions]=\"resume.positions\">\n            </app-experience>\n\n            <!-- Education -->\n            <app-education [educations]=\"resume.educations\">\n            </app-education>\n\n            <!-- Projects -->\n            <app-project [projects]=\"resume.projects\">\n            </app-project>\n        </section>\n    </div>\n\n    <!-- Footer -->\n    <div class=\"footer\">\n        Generated with <a class=\"mat-link\" href=\"https://github.com/karmats/resume-generator\" target=\"_homepage\">resume generator</a>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/resume/resume.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resume_service__ = __webpack_require__("../../../../../src/app/resume.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResumeComponent = /** @class */ (function () {
    function ResumeComponent(resumeService) {
        this.resumeService = resumeService;
        this.themes = [
            { name: 'Blue grey', value: 'blue-grey' },
            { name: 'Indigo', value: 'indigo' },
            { name: 'Light blue', value: 'light-blue' },
            { name: 'Orange', value: 'orange' },
            { name: 'Purple', value: 'purple' },
            { name: 'Teal', value: 'teal' }
        ];
        this.darkTheme = false;
    }
    ResumeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resume = this.resumeService.retrieveResume();
        // Listen to resume changed events
        this.resumeService.resumeChanged.subscribe(function (resume) { return _this.resume = resume; });
        // Retrieve theme
        var theme = this.resumeService.retrieveTheme();
        if (theme && theme.themeName) {
            this.currentTheme = this.themes.filter(function (t) { return t.value === theme.themeName; }).pop();
            this.darkTheme = theme.isDark;
        }
        else {
            // Indigo default theme
            this.currentTheme = this.themes[1];
            this.darkTheme = false;
        }
        this.darkTheme ? document.body.classList.add('dark') : document.body.classList.remove('dark');
    };
    ResumeComponent.prototype.cssClasses = function () {
        return this.currentTheme.value + (this.darkTheme ? ' dark' : '');
    };
    ResumeComponent.prototype.themeChanged = function (theme, dark) {
        this.resumeService.updateTheme(this.currentTheme.value, this.darkTheme);
        this.darkTheme ? document.body.classList.add('dark') : document.body.classList.remove('dark');
    };
    ResumeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-resume',
            template: __webpack_require__("../../../../../src/app/resume/resume.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__resume_service__["a" /* ResumeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__resume_service__["a" /* ResumeService */]) === "function" && _a || Object])
    ], ResumeComponent);
    return ResumeComponent;
    var _a;
}());

//# sourceMappingURL=resume.component.js.map

/***/ }),

/***/ "../../../../../src/app/skill/skill.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\"\n    fxLayoutAlign=\"space-between stretch\" fxLayoutWrap>\n  <div *ngFor=\"let skill of skills\" fxFlex=\"90\">\n    <span>{{skill.name}}</span>\n    <button *ngIf=\"resumeService.editMode\" md-icon-button color=\"secondary\" (click)=\"editSkill(skill)\">\n      <md-icon>edit</md-icon>\n    </button>\n    <button *ngIf=\"resumeService.editMode\" md-icon-button color=\"secondary\" (click)=\"deleteSkill(skill)\">\n      <md-icon>delete</md-icon>\n    </button>\n    <md-progress-bar class=\"skill-bar\" color=\"primary\" mode=\"determinate\" value=\"{{skill.competence}}\"></md-progress-bar>\n  </div>\n</div>\n<md-card-actions *ngIf=\"resumeService.editMode\">\n  <button md-button color=\"secondary\" (click)=\"newSkill()\">Add Skill</button>\n</md-card-actions>\n"

/***/ }),

/***/ "../../../../../src/app/skill/skill.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SkillDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resume_service__ = __webpack_require__("../../../../../src/app/resume.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__confirm_dialog_confirm_dialog_component__ = __webpack_require__("../../../../../src/app/confirm-dialog/confirm-dialog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SkillComponent = /** @class */ (function () {
    function SkillComponent(dialog, resumeService, viewContainerRef) {
        this.dialog = dialog;
        this.resumeService = resumeService;
        this.viewContainerRef = viewContainerRef;
    }
    SkillComponent.prototype.ngOnInit = function () {
        this.skills = this.skills || [];
        this.sortSkills();
    };
    SkillComponent.prototype.newSkill = function () {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogConfig */]();
        config.width = "75vw";
        var dialogRef = this.dialog.open(SkillDialog, config);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.skills = _this.resumeService.addSkill(result);
                _this.sortSkills();
            }
        });
    };
    SkillComponent.prototype.editSkill = function (skill) {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogConfig */]();
        config.width = "75vw";
        config.viewContainerRef = this.viewContainerRef;
        var dialogRef = this.dialog.open(SkillDialog, config);
        dialogRef.componentInstance.skill = skill;
        dialogRef.afterClosed().subscribe(function (result) {
            _this.skills = result ? _this.resumeService.updateSkills(_this.skills) :
                _this.resumeService.retrieveResume().skills;
            _this.sortSkills();
        });
    };
    SkillComponent.prototype.deleteSkill = function (skill) {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdDialogConfig */]();
        config.viewContainerRef = this.viewContainerRef;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__confirm_dialog_confirm_dialog_component__["a" /* ConfirmDialogComponent */], config);
        dialogRef.componentInstance.message = "Are you sure you want to remove your skill in " + skill.name + "?";
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.skills = _this.resumeService.removeSkill(skill);
            }
        });
    };
    // Sort by competence first, name second
    SkillComponent.prototype.sortSkills = function () {
        this.skills.sort(function (a, b) {
            if (a.competence !== b.competence) {
                return b.competence - a.competence;
            }
            return a.name > b.name ? 1 : -1;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SkillComponent.prototype, "skills", void 0);
    SkillComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-skill',
            template: __webpack_require__("../../../../../src/app/skill/skill.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewContainerRef */]) === "function" && _c || Object])
    ], SkillComponent);
    return SkillComponent;
    var _a, _b, _c;
}());

// Add new skill dialog
var SkillDialog = /** @class */ (function () {
    function SkillDialog(dialogRef, resumeService) {
        this.dialogRef = dialogRef;
        this.resumeService = resumeService;
        var today = new Date();
        this.skill = {
            competence: 0,
            name: ''
        };
    }
    SkillDialog.prototype.ngOnInit = function () {
        // Assume edit mode if name isn't blank
        this.editMode = this.skill && this.skill.name.length > 0;
    };
    SkillDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n    <h3 md-dialog-title>{{editMode ? 'Edit ' : 'Add new '}}skill</h3>\n    <div md-dialog-content fxLayout=\"column\">\n      <md-input-container>\n        <input mdInput\n          [(ngModel)]=\"skill.name\"\n          placeholder=\"Skill name\">\n      </md-input-container>\n      <md-slider\n        [(ngModel)]=\"skill.competence\"\n        min=\"0\"\n        max=\"100\"\n        thumbLabel\n        step=\"10\"\n        tickInterval=\"1\"></md-slider>\n    </div>\n    <div md-dialog-actions>\n      <button md-button color=\"primary\" (click)=\"dialogRef.close()\">Cancel</button>\n      <button md-button color=\"primary\" (click)=\"dialogRef.close(skill)\">Save</button>\n    </div>\n  ",
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__resume_service__["a" /* ResumeService */]) === "function" && _b || Object])
    ], SkillDialog);
    return SkillDialog;
    var _a, _b;
}());

//# sourceMappingURL=skill.component.js.map

/***/ }),

/***/ "../../../../../src/app/summary/summary.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\n    <div fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" class=\"text-center space-up\">\n        <div fxFlex><h1 style=\"margin-bottom:0\">{{name}}</h1></div>\n    </div>\n\n    <div fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" class=\"text-center space-down\">\n        <div fxFlex>{{title}}</div>\n    </div>\n\n    <div class=\"text-center\">\n        <img *ngIf=\"profileUrl && profileUrl.length\" class=\"profile-picture\" [src]=\"profileUrl\" alt=\"Profile picture\">\n        <md-icon *ngIf=\"!profileUrl || !profileUrl.length\" svgIcon=\"account-circle\" class=\"profile-picture\"></md-icon>\n    </div>\n\n    <div fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" class=\"space-up\">\n        <div fxFlex=\"25\" class=\"text-center\">\n            <md-icon>person</md-icon>\n        </div>\n        <div fxFlex><div class=\"description\">{{description}}</div></div>\n    </div>\n\n    <div fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" class=\"space-up\">\n        <div fxFlex=\"25\" class=\"text-center\">\n            <md-icon>phone</md-icon>\n        </div>\n        <div fxFlex>{{phone}}</div>\n    </div>\n\n    <div fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" class=\"space-up\">\n        <div fxFlex=\"25\" class=\"text-center\">\n            <md-icon>email</md-icon>\n        </div>\n        <div fxFlex>{{email}}</div>\n    </div>\n\n    <div fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.xs=\"column\" class=\"space-up\">\n        <div fxFlex=\"25\" class=\"text-center\">\n            <md-icon>settings</md-icon>\n        </div>\n        <div fxFlex>\n            <app-skill [skills]=\"skills\">\n            </app-skill>\n        </div>\n    </div>\n\n    <div *ngIf=\"resumeService.editMode\" class=\"actions\">\n        <button md-raised-button color=\"primary\" (click)=\"editSummary()\">Edit profile</button>\n        <input id=\"resumeFile\" style=\"display:none\" *ngIf=\"resumeService.editMode\" type=\"file\" accept=\"application/json\" (change)=\"uploadResume($event)\">\n        <label for=\"resumeFile\" class=\"mat-primary mat-raised-button\">Upload Resume</label>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/summary/summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SummaryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditSummaryDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__resume_service__ = __webpack_require__("../../../../../src/app/resume.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SummaryComponent = /** @class */ (function () {
    function SummaryComponent(dialog, viewContainerRef, resumeService, iconRegistry, sanitizer) {
        this.dialog = dialog;
        this.viewContainerRef = viewContainerRef;
        this.resumeService = resumeService;
        this.iconRegistry = iconRegistry;
        this.sanitizer = sanitizer;
    }
    SummaryComponent.prototype.ngOnInit = function () {
        // Profile picture placeholder
        this.iconRegistry.addSvgIcon('account-circle', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/svg/account_circle.svg'));
    };
    SummaryComponent.prototype.editSummary = function () {
        var _this = this;
        var config = new __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MdDialogConfig */]();
        config.viewContainerRef = this.viewContainerRef;
        config.width = "75vw";
        var dialogRef = this.dialog.open(EditSummaryDialog, config);
        dialogRef.componentInstance.summary = {
            name: this.name,
            profileUrl: this.profileUrl,
            description: this.description,
            title: this.title,
            phone: this.phone,
            email: this.email
        };
        dialogRef.afterClosed().subscribe(function (result) {
            if (!result) {
                return;
            }
            var resume = _this.resumeService.updateSummary(result.name, result.profileUrl, result.description, result.title, result.phone, result.email);
            _this.name = resume.name;
            _this.profileUrl = resume.pictureUrl;
            _this.description = resume.summary;
            _this.title = resume.title;
            _this.phone = resume.phone;
            _this.email = resume.email;
        });
    };
    SummaryComponent.prototype.uploadResume = function (event) {
        var _this = this;
        var resumeFile = event.target.files[0];
        var reader = new FileReader();
        // Callback when the file has been read
        reader.onload = function () {
            if (reader && reader.result && reader) {
                var jsonResume = JSON.parse(reader.result);
                _this.resumeService.parseAndSaveJsonResume(jsonResume);
            }
        };
        if (resumeFile) {
            reader.readAsText(resumeFile, 'UTF-8');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SummaryComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('picture'),
        __metadata("design:type", String)
    ], SummaryComponent.prototype, "profileUrl", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SummaryComponent.prototype, "description", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SummaryComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SummaryComponent.prototype, "phone", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SummaryComponent.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SummaryComponent.prototype, "skills", void 0);
    SummaryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-summary',
            template: __webpack_require__("../../../../../src/app/summary/summary.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewContainerRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__resume_service__["a" /* ResumeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__resume_service__["a" /* ResumeService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdIconRegistry */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MdIconRegistry */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _e || Object])
    ], SummaryComponent);
    return SummaryComponent;
    var _a, _b, _c, _d, _e;
}());

// Edit summary dialog
var EditSummaryDialog = /** @class */ (function () {
    function EditSummaryDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    EditSummaryDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n    <h3 md-dialog-title>Edit summary</h3>\n    <div md-dialog-content fxLayout=\"column\">\n      <md-input-container>\n        <input mdInput\n          [(ngModel)]=\"summary.name\"\n          placeholder=\"Your name\">\n      </md-input-container>\n      <md-input-container>\n        <input mdInput\n          [(ngModel)]=\"summary.profileUrl\"\n          placeholder=\"Url to profile picture\">\n      </md-input-container>\n      <md-input-container>\n        <input mdInput\n          [(ngModel)]=\"summary.title\"\n          placeholder=\"Job title\">\n      </md-input-container>\n      <md-input-container>\n        <textarea mdInput\n        [(ngModel)]=\"summary.description\"\n        rows=\"4\" placeholder=\"Description of yourself\"></textarea>\n      </md-input-container>\n      <md-input-container>\n        <input mdInput\n          [(ngModel)]=\"summary.phone\"\n          placeholder=\"Your phone number\">\n      </md-input-container>\n      <md-input-container>\n        <input mdInput\n          [(ngModel)]=\"summary.email\"\n          placeholder=\"Your email adress\">\n      </md-input-container>\n    </div>\n    <div md-dialog-actions>\n      <button md-button color=\"primary\" (click)=\"dialogRef.close()\">Cancel</button>\n      <button md-button color=\"primary\" (click)=\"dialogRef.close(summary)\">Ok</button>\n    </div>\n  ",
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MdDialogRef */]) === "function" && _a || Object])
    ], EditSummaryDialog);
    return EditSummaryDialog;
    var _a;
}());

//# sourceMappingURL=summary.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map