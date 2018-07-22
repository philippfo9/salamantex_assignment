webpackJsonp([5],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionComponentModule", function() { return TransactionComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__submit_transaction__ = __webpack_require__(315);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TransactionComponentModule = /** @class */ (function () {
    function TransactionComponentModule() {
    }
    TransactionComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__submit_transaction__["a" /* SubmitTransactionComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__submit_transaction__["a" /* SubmitTransactionComponent */])
            ],
            exports: [],
            providers: []
        })
    ], TransactionComponentModule);
    return TransactionComponentModule;
}());

//# sourceMappingURL=submit-transaction.module.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmitTransactionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_component__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_submit_transaction_submit_transaction__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_standards_standards__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_user__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var SubmitTransactionComponent = /** @class */ (function () {
    function SubmitTransactionComponent(formBuilder, myApp, transactionSubmitService, standards, userService, navCtrl) {
        this.formBuilder = formBuilder;
        this.myApp = myApp;
        this.transactionSubmitService = transactionSubmitService;
        this.standards = standards;
        this.userService = userService;
        this.navCtrl = navCtrl;
        this.submitted = false;
        this.TransactionForm = this.formBuilder.group({
            amount: [0, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].min(0)])],
            currency: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required])],
            target: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i)])],
        });
    }
    SubmitTransactionComponent.prototype.ionViewDidEnter = function () {
        this.myApp.setPageActive("SubmitTransactionComponent");
    };
    SubmitTransactionComponent.prototype.confirmTransaction = function () {
        return __awaiter(this, void 0, void 0, function () {
            var trxId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.submitted = true;
                        if (!this.TransactionForm.valid) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.transactionSubmitService.submitTransaction()];
                    case 1:
                        trxId = _a.sent();
                        if (trxId) {
                            this.standards.showToast("Transaktion wurde erfolgreich zur Überprüfung eingereicht", 3000, function () { });
                            this.navCtrl.push("TransactionDetailPage", {
                                id: trxId
                            });
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    SubmitTransactionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'submit-transaction',template:/*ion-inline-start:"/Users/philipp/Documents/Projects/programs/salamantex_assignment/salamantex_client/src/pages/submit-transaction/submit-transaction.html"*/'<ion-content>\n	<form [formGroup]=\'TransactionForm\'>\n	<ion-grid>\n		<ion-row class=\'headlineRow\'>\n			<ion-title>Neue Transaktion</ion-title>\n		</ion-row>\n		<ion-row class=\'itemRow\'>\n      <ion-col col-6 class="bigDisplay">\n        <ion-label text-right>Wie viel?</ion-label>\n      </ion-col>\n				<ion-col col-24 col-sm-18 col-lg-12 class=\'centeredContent\'>\n					<ion-label text-right class="smallDisplay">Wie viel?</ion-label>\n					<ion-input type=\'number\' [(ngModel)]=\'transactionSubmitService.transactionToSubmit.amount\' formControlName=\'amount\' placeholder=\'0.45 z.B.\' ></ion-input>\n          <ion-label class="invalidText" *ngIf="submitted && !TransactionForm.get(\'amount\').valid">Menge nicht korrekt</ion-label>\n          <ion-label class="invalidText" *ngIf="!transactionSubmitService.balanceHighEnough() && transactionSubmitService.transactionToSubmit.amount">Ihr Konto besitzt nicht genug {{transactionSubmitService.transactionToSubmit.currency}}-Guthaben</ion-label>\n          <ion-label class="invalidText" *ngIf="!transactionSubmitService.amountSmallerMaximalTransactionAmount() && transactionSubmitService.transactionToSubmit.amount">Die Transaktionsmenge überschreitet die maximale Transaktionsmenge für Ihr Profil</ion-label>\n				</ion-col>\n		</ion-row>\n    <ion-row class=\'itemRow\'>\n      <ion-col col-sm-6 class="bigDisplay">\n        <ion-label text-right>Währung</ion-label>\n      </ion-col>\n      <ion-col col-24 col-sm-18 col-lg-12 class=\'centeredContent\'>\n        <ion-label text-right class="smallDisplay">Währung</ion-label>\n        <ion-select [(ngModel)]=\'transactionSubmitService.transactionToSubmit.currency\' formControlName=\'currency\'>\n          <ion-option *ngFor=\'let currency of transactionSubmitService.currencies\' [value]=\'currency.name\'>{{ currency.name }}</ion-option>\n        </ion-select>\n        <ion-label class="invalidText" *ngIf="!transactionSubmitService.currencyAccountExists()">Sie besitzen kein Wallet dieser Währung</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\'itemRow\'>\n      <ion-col col-6 class="bigDisplay">\n        <ion-label text-right>Empfänger-Public-Key</ion-label>\n      </ion-col>\n      <ion-col col-24 col-lg-15 class=\'centeredContent\'>\n        <ion-label text-right class="smallDisplay">Empfänger-Public-Key</ion-label>\n        <ion-input type=\'text\' [(ngModel)]=\'transactionSubmitService.transactionToSubmit.targetPublicId\' formControlName=\'target\'  ></ion-input>\n        <ion-label class="invalidText" *ngIf="submitted && !TransactionForm.get(\'target\').valid">Empfänger-Key ist nicht korrekt. Beachte, dass du das richtige Format verwendest.</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-24 class="centeredContent">\n        <button (click)="confirmTransaction()" ion-button class="standardBtn">Transaktion durchführen</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-24 class="centeredContent">\n        <ion-spinner *ngIf="submitted && TransactionForm.valid"></ion-spinner>\n      </ion-col>\n    </ion-row>\n	</ion-grid>\n	</form>\n</ion-content>\n'/*ion-inline-end:"/Users/philipp/Documents/Projects/programs/salamantex_assignment/salamantex_client/src/pages/submit-transaction/submit-transaction.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__app_app_component__["a" /* MyApp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_app_component__["a" /* MyApp */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_submit_transaction_submit_transaction__["a" /* SubmitTransactionProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_submit_transaction_submit_transaction__["a" /* SubmitTransactionProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__providers_standards_standards__["a" /* StandardsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_standards_standards__["a" /* StandardsProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__providers_user_user__["a" /* UserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_user_user__["a" /* UserProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */]) === "function" && _f || Object])
    ], SubmitTransactionComponent);
    return SubmitTransactionComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=submit-transaction.js.map

/***/ })

});
//# sourceMappingURL=5.js.map