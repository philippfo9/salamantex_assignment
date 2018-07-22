webpackJsonp([2],{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionDetailPageModule", function() { return TransactionDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transaction_detail__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TransactionDetailPageModule = /** @class */ (function () {
    function TransactionDetailPageModule() {
    }
    TransactionDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__transaction_detail__["a" /* TransactionDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transaction_detail__["a" /* TransactionDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], TransactionDetailPageModule);
    return TransactionDetailPageModule;
}());

//# sourceMappingURL=transaction-detail.module.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__input_disabled_input_disabled__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__transaction_item_transaction_item__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loading_loading__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__input_disabled_input_disabled__["a" /* InputDisabledComponent */],
                __WEBPACK_IMPORTED_MODULE_6__transaction_item_transaction_item__["a" /* TransactionItemComponent */],
                __WEBPACK_IMPORTED_MODULE_7__loading_loading__["a" /* LoadingComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */], __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__login_login__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__input_disabled_input_disabled__["a" /* InputDisabledComponent */],
                __WEBPACK_IMPORTED_MODULE_6__transaction_item_transaction_item__["a" /* TransactionItemComponent */],
                __WEBPACK_IMPORTED_MODULE_7__loading_loading__["a" /* LoadingComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.localLogin = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.invalidMarker = false;
        this.loginFormGroup = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(24), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[-a-zA-Z0-9ßäöüÄÖÜ,.*+#:; ]*')])]
        });
    }
    LoginComponent.prototype.ngAfterViewInit = function () {
        this.user.showPassword = false;
    };
    LoginComponent.prototype.standardLogin = function () {
        if (this.loginFormGroup.valid) {
            this.localLogin.emit();
        }
        else {
            this.invalidMarker = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "localLogin", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'login-form',template:/*ion-inline-start:"/Users/philipp/Documents/Projects/programs/salamantex_assignment/salamantex_client/src/components/login/login.html"*/'<form [formGroup]="loginFormGroup">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-24 col-sm-16 offset-sm-4 col-lg-12 offset-lg-6>\n        <ion-label>Email</ion-label>\n        <ion-input [(ngModel)]="user.email" formControlName="email" placeholder="max.mustermann@mustermann.at" type="email"></ion-input>\n        <ion-label class="invalidText" *ngIf="invalidMarker && (!loginFormGroup.get(\'email\').valid)">Email nicht korrekt</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-24 col-sm-16 offset-sm-4 col-lg-12 offset-lg-6>\n        <ion-label>Passwort</ion-label>\n        <ion-input [(ngModel)]="user.password" formControlName="password" placeholder="Passwort" [type]="user.showPassword?\'text\':\'password\'"></ion-input>\n        <ion-label class="invalidText" *ngIf="invalidMarker && (!loginFormGroup.get(\'password\').valid)">Passwort nicht korrekt</ion-label>\n      </ion-col>\n      <ion-col col-24 col-sm-16 offset-sm-4 col-lg-12 offset-lg-6 class="checkboxCol">\n        <ion-checkbox [(ngModel)]="user.showPassword" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n        <ion-label>Passwort anzeigen?</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-24 col-sm-16 offset-sm-4 col-lg-12 offset-lg-6>\n        <button ion-button class="standardBtn" full (click)="standardLogin()">Login</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</form>\n'/*ion-inline-end:"/Users/philipp/Documents/Projects/programs/salamantex_assignment/salamantex_client/src/components/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], LoginComponent);
    return LoginComponent;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.registerEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.invalidMarker = false;
        this.registerFormGroup = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].email])],
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[-a-zA-ZßäöüÄÖÜ]*')])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(24), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[-a-zA-Z0-9ßäöüÄÖÜ,.*+#:; ]*')])],
            passwordAgain: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].maxLength(24), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern('[-a-zA-Z0-9ßäöüÄÖÜ,.*+#:; ]*')])]
        });
    }
    RegisterComponent.prototype.register = function () {
        if (this.registerFormGroup.valid && this.user.password == this.user.passwordAgain) {
            this.user.showPassword = false;
            this.invalidMarker = false;
            this.registerEvent.emit();
        }
        else {
            this.invalidMarker = true;
        }
    };
    RegisterComponent.prototype.ngAfterViewInit = function () {
        this.user.showPassword = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "registerEvent", void 0);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'register-form',template:/*ion-inline-start:"/Users/philipp/Documents/Projects/programs/salamantex_assignment/salamantex_client/src/components/register/register.html"*/'<form [formGroup]="registerFormGroup">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-24 col-sm-16 offset-sm-4 col-lg-12 offset-lg-6>\n        <ion-label>Email</ion-label>\n        <ion-input [(ngModel)]="user.email" formControlName="email" placeholder="max.mustermann@mustermann.at z.B." type="email"></ion-input>\n        <ion-label class="invalidText" *ngIf="invalidMarker && (!registerFormGroup.get(\'email\').valid)">Email nicht korrekt</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-24 col-sm-16 offset-sm-4 col-lg-12 offset-lg-6>\n        <ion-label>Username</ion-label>\n        <ion-input [(ngModel)]="user.name" formControlName="name" placeholder="Max z.B." type="name"></ion-input>\n        <ion-label class="invalidText" *ngIf="invalidMarker && (!registerFormGroup.get(\'name\').valid)">Username nicht korrekt</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-24 col-sm-16 offset-sm-4 col-lg-12 offset-lg-6>\n        <ion-label>Passwort</ion-label>\n        <ion-input [(ngModel)]="user.password" formControlName="password" placeholder="Passwort" [type]="user.showPassword?\'text\':\'password\'"></ion-input>\n        <ion-label class="invalidText" *ngIf="invalidMarker && (!registerFormGroup.get(\'password\').valid)">Passwort nicht korrekt</ion-label>\n      </ion-col>\n      <ion-col col-24 col-sm-16 offset-sm-4 col-lg-12 offset-lg-6>\n        <ion-label>Passwort wiederholen</ion-label>\n        <ion-input [(ngModel)]="user.passwordAgain" formControlName="passwordAgain" placeholder="Passwort wiederholen" [type]="user.showPassword?\'text\':\'password\'"></ion-input>\n        <ion-label class="invalidText" *ngIf="invalidMarker && user.password != user.passwordAgain">Passwörter müssen übereinstimmen</ion-label>\n      </ion-col>\n      <ion-col col-24 col-sm-16 offset-sm-4 col-lg-12 offset-lg-6 class="checkboxCol">\n        <ion-checkbox [(ngModel)]="user.showPassword" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n        <ion-label>Passwort anzeigen?</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-24 col-sm-16 offset-sm-4 col-lg-12 offset-lg-6>\n        <button ion-button class="standardBtn" full (click)="register()">Registrieren</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</form>\n'/*ion-inline-end:"/Users/philipp/Documents/Projects/programs/salamantex_assignment/salamantex_client/src/components/register/register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]])
    ], RegisterComponent);
    return RegisterComponent;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputDisabledComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputDisabledComponent = /** @class */ (function () {
    function InputDisabledComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], InputDisabledComponent.prototype, "text", void 0);
    InputDisabledComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'input-disabled',template:/*ion-inline-start:"/Users/philipp/Documents/Projects/programs/salamantex_assignment/salamantex_client/src/components/input-disabled/input-disabled.html"*/'<div class="likeInput input">\n  <div class="text-input">\n    <label>{{text}}</label>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/philipp/Documents/Projects/programs/salamantex_assignment/salamantex_client/src/components/input-disabled/input-disabled.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], InputDisabledComponent);
    return InputDisabledComponent;
}());

//# sourceMappingURL=input-disabled.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_Transaction__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_transactions_transactions__ = __webpack_require__(106);
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



var TransactionItemComponent = /** @class */ (function () {
    function TransactionItemComponent(transactionService) {
        this.transactionService = transactionService;
        this.transactionClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    TransactionItemComponent.prototype.ngAfterViewInit = function () {
        if (!this.transaction) {
            console.log(this.trxId);
            this.loadTrx();
        }
    };
    TransactionItemComponent.prototype.loadTrx = function (ev) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (ev) {
                            ev.preventDefault();
                        }
                        if (!this.trxId) {
                            this.trxId = this.transaction.id;
                        }
                        return [4 /*yield*/, this.transactionService.loadTransaction(this.trxId)];
                    case 1:
                        _a.sent();
                        console.log("trx", this.transactionService.selectedTransaction);
                        this.transaction = this.transactionService.selectedTransaction;
                        return [2 /*return*/];
                }
            });
        });
    };
    TransactionItemComponent.prototype.selectTransaction = function () {
        this.transactionClicked.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_Transaction__["a" /* Transaction */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_Transaction__["a" /* Transaction */]) === "function" && _a || Object)
    ], TransactionItemComponent.prototype, "transaction", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], TransactionItemComponent.prototype, "trxId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], TransactionItemComponent.prototype, "reasonEnabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], TransactionItemComponent.prototype, "transactionClicked", void 0);
    TransactionItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'transaction-item',template:/*ion-inline-start:"/Users/philipp/Documents/Projects/programs/salamantex_assignment/salamantex_client/src/components/transaction-item/transaction-item.html"*/'<ion-row *ngIf="transaction">\n  <ion-col col-24 (tap)="selectTransaction()">\n    <ion-title text-center>Transaktion #{{transaction.id}}</ion-title>\n  </ion-col>\n  <ion-col col-24 col-sm-11 class="centeredContent userTextCol">\n    <span ion-text text-center class="userText">{{transaction.source.publicIdentifier}}</span>\n  </ion-col>\n  <ion-col col-24 col-sm-2 class="centeredContent">\n    <ion-icon ios="ios-arrow-round-forward" md="ios-arrow-round-forward" color="light-grey"></ion-icon>\n  </ion-col>\n  <ion-col col-24 col-sm-11 class="centeredContent userTextCol right">\n    <span ion-text text-center class="userText">{{transaction.target.publicIdentifier}}</span>\n  </ion-col>\n  <ion-col col-24 class="centeredContent">\n    <div class="stateInfoLine" [style.background-color]="transaction.getStateColor()"></div>\n    <span class="stateInfoText">{{transaction.getStateText()}}</span>\n  </ion-col>\n  <ion-col col-24 class="centeredContent" *ngIf="transaction.state.toLowerCase()==\'canceled\' && reasonEnabled">\n    <span class="cancelReason">Abbruchgrund: {{transaction.cancelReason}}</span>\n  </ion-col>\n  <ion-col col-24 class="centeredContent">\n    <button ion-button round outline (click)="loadTrx($event)">Status neu laden</button>\n  </ion-col>\n</ion-row>\n'/*ion-inline-end:"/Users/philipp/Documents/Projects/programs/salamantex_assignment/salamantex_client/src/components/transaction-item/transaction-item.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_transactions_transactions__["a" /* TransactionsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_transactions_transactions__["a" /* TransactionsProvider */]) === "function" && _b || Object])
    ], TransactionItemComponent);
    return TransactionItemComponent;
    var _a, _b;
}());

//# sourceMappingURL=transaction-item.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_loading_state_loading_state__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingComponent = /** @class */ (function () {
    function LoadingComponent(loadingState) {
        this.loadingState = loadingState;
    }
    LoadingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'loading',template:/*ion-inline-start:"/Users/philipp/Documents/Projects/programs/salamantex_assignment/salamantex_client/src/components/loading/loading.html"*/'<ion-row *ngIf="loadingState.isLoading">\n  <ion-col col-24 class="centeredContent">\n    <ion-spinner></ion-spinner>\n  </ion-col>\n</ion-row>\n'/*ion-inline-end:"/Users/philipp/Documents/Projects/programs/salamantex_assignment/salamantex_client/src/components/loading/loading.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__providers_loading_state_loading_state__["a" /* LoadingStateProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_loading_state_loading_state__["a" /* LoadingStateProvider */]) === "function" && _a || Object])
    ], LoadingComponent);
    return LoadingComponent;
    var _a;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_transactions_transactions__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_component__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TransactionDetailPage = /** @class */ (function () {
    function TransactionDetailPage(navCtrl, navParams, transactionService, myApp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.transactionService = transactionService;
        this.myApp = myApp;
    }
    TransactionDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransactionDetailPage');
    };
    TransactionDetailPage.prototype.ionViewDidEnter = function () {
        this.myApp.setPageActive("TransactionsPage");
    };
    TransactionDetailPage.prototype.navigateBackToTransactions = function () {
        this.navCtrl.setRoot("TransactionsPage");
    };
    TransactionDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transaction-detail',template:/*ion-inline-start:"/Users/philipp/Documents/Projects/programs/salamantex_assignment/salamantex_client/src/pages/transaction-detail/transaction-detail.html"*/'<ion-content padding>\n  <ion-grid>\n    <transaction-item [transaction]="transactionService.selectedTransaction" [trxId]="this.navParams.get(\'id\')" [reasonEnabled]="true"></transaction-item>\n    <ion-row>\n      <ion-col col-24>\n        <button ion-button clear (click)="navigateBackToTransactions()">Zur Transaktionsübersicht</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n'/*ion-inline-end:"/Users/philipp/Documents/Projects/programs/salamantex_assignment/salamantex_client/src/pages/transaction-detail/transaction-detail.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_transactions_transactions__["a" /* TransactionsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_transactions_transactions__["a" /* TransactionsProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__app_app_component__["a" /* MyApp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_app_component__["a" /* MyApp */]) === "function" && _d || Object])
    ], TransactionDetailPage);
    return TransactionDetailPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=transaction-detail.js.map

/***/ })

});
//# sourceMappingURL=2.js.map