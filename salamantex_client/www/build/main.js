webpackJsonp([6],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_Transaction__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_service_http_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_class_transformer__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_class_transformer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_class_transformer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user__ = __webpack_require__(41);
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





var TransactionsProvider = /** @class */ (function () {
    function TransactionsProvider(httpService, userService) {
        this.httpService = httpService;
        this.userService = userService;
        this.transactions = [];
    }
    TransactionsProvider.prototype.loadUserTransactions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, transactions, _i, transactions_1, trx, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.userService.profileLoading) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.userService.userProfile$];
                    case 1:
                        _c.sent();
                        _c.label = 2;
                    case 2: return [4 /*yield*/, this.httpService.getRequest("api", "/users/" + this.userService.user.id + "/transactions", true, true)];
                    case 3:
                        res = _c.sent();
                        if (!(res && res.success)) return [3 /*break*/, 12];
                        transactions = res.body;
                        _i = 0, transactions_1 = transactions;
                        _c.label = 4;
                    case 4:
                        if (!(_i < transactions_1.length)) return [3 /*break*/, 11];
                        trx = transactions_1[_i];
                        if (!(trx.sourceId == this.userService.user.id)) return [3 /*break*/, 5];
                        trx.source = this.userService.user;
                        return [3 /*break*/, 7];
                    case 5:
                        _a = trx;
                        return [4 /*yield*/, this.loadUserFromTransaction(trx.sourceId)];
                    case 6:
                        _a.source = _c.sent();
                        _c.label = 7;
                    case 7:
                        if (!(trx.targetId == this.userService.user.id)) return [3 /*break*/, 8];
                        trx.target = this.userService.user;
                        return [3 /*break*/, 10];
                    case 8:
                        _b = trx;
                        return [4 /*yield*/, this.loadUserFromTransaction(trx.targetId)];
                    case 9:
                        _b.target = _c.sent();
                        _c.label = 10;
                    case 10:
                        _i++;
                        return [3 /*break*/, 4];
                    case 11:
                        transactions.reverse();
                        this.transactions = Object(__WEBPACK_IMPORTED_MODULE_3_class_transformer__["plainToClass"])(__WEBPACK_IMPORTED_MODULE_1__model_Transaction__["a" /* Transaction */], res.body);
                        return [2 /*return*/, true];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    TransactionsProvider.prototype.loadUserFromTransaction = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpService.getRequest("api", "/user/" + userId, true, false)];
                    case 1:
                        res = _a.sent();
                        if (res && res.success) {
                            return [2 /*return*/, res.body];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TransactionsProvider.prototype.loadTransaction = function (transactionId) {
        return __awaiter(this, void 0, void 0, function () {
            var res, trx, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.httpService.getRequest("api", "/transactions/" + transactionId, true, true)];
                    case 1:
                        res = _c.sent();
                        if (!(res && res.success)) return [3 /*break*/, 4];
                        trx = res.body;
                        _a = trx;
                        return [4 /*yield*/, this.loadUserFromTransaction(trx.sourceId)];
                    case 2:
                        _a.source = _c.sent();
                        _b = trx;
                        return [4 /*yield*/, this.loadUserFromTransaction(trx.targetId)];
                    case 3:
                        _b.target = _c.sent();
                        this.selectedTransaction = Object(__WEBPACK_IMPORTED_MODULE_3_class_transformer__["plainToClass"])(__WEBPACK_IMPORTED_MODULE_1__model_Transaction__["a" /* Transaction */], trx);
                        return [2 /*return*/, true];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TransactionsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_service_http_service__["a" /* HttpServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__user_user__["a" /* UserProvider */]])
    ], TransactionsProvider);
    return TransactionsProvider;
}());

//# sourceMappingURL=transactions.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingStateProvider; });
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

var LoadingStateProvider = /** @class */ (function () {
    function LoadingStateProvider() {
        this.isLoading = false;
        console.log('Hello LoadingStateProvider Provider');
    }
    LoadingStateProvider.prototype.startLoading = function () {
        this.isLoading = true;
    };
    LoadingStateProvider.prototype.endLoading = function () {
        this.isLoading = false;
    };
    LoadingStateProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LoadingStateProvider);
    return LoadingStateProvider;
}());

//# sourceMappingURL=loading-state.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Transaction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TransactionState__ = __webpack_require__(282);

var Transaction = /** @class */ (function () {
    function Transaction() {
    }
    Transaction.prototype.getStateColor = function () {
        var _this = this;
        var bgColor = "";
        Object.keys(__WEBPACK_IMPORTED_MODULE_0__TransactionState__["a" /* TransactionState */]).forEach(function (key) {
            if (_this.state.toLowerCase() == key.toLowerCase()) {
                bgColor = __WEBPACK_IMPORTED_MODULE_0__TransactionState__["a" /* TransactionState */][key];
            }
        });
        return bgColor;
    };
    Transaction.prototype.getStateText = function () {
        switch (this.state.toLowerCase()) {
            case "processing": {
                return "Transaktion in Bearbeitung";
            }
            case "canceled": {
                return "Transaktion abgebrochen";
            }
            case "finished": {
                return "Transaktion erfolgreich";
            }
            default: {
                return "Kein Status verfügbar";
            }
        }
    };
    return Transaction;
}());

//# sourceMappingURL=Transaction.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StandardsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StandardsProvider = /** @class */ (function () {
    function StandardsProvider(alertCtrl, toastCtrl, popoverCtrl, modalCtrl, menu, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.menu = menu;
        this.loadingCtrl = loadingCtrl;
        console.log('Hello StandardsProvider Provider');
    }
    StandardsProvider.prototype.presentLoadingDefault = function () {
        var _this = this;
        if (this.loading == null) {
            this.loading = this.loadingCtrl.create({
                content: 'Bitte warten...'
            });
            this.loading.present();
            this.loading.onDidDismiss(function () {
                _this.loading = null;
            });
        }
    };
    StandardsProvider.prototype.dismissLoadingDefault = function () {
        if (this.loading != null)
            this.loading.dismiss();
    };
    StandardsProvider.prototype.showAlert = function (title, subTitle, callback) {
        var _this = this;
        if (this.alert == null) {
            this.alert = this.alertCtrl.create({
                title: title,
                subTitle: subTitle,
                buttons: ['OK']
            });
            this.alert.present();
            this.alert.onDidDismiss(function () {
                _this.alert = null;
                callback();
            });
        }
    };
    StandardsProvider.prototype.showToast = function (message, duration, position) {
        var _this = this;
        if (this.toast == null) {
            this.toast = this.toastCtrl.create({
                message: message,
                duration: duration,
                position: position
            });
            this.toast.present();
            this.toast.onDidDismiss(function () {
                _this.toast = null;
            });
        }
    };
    StandardsProvider.prototype.presentPopover = function (myEvent, page) {
        var popover = this.popoverCtrl.create(page);
        popover.present({
            ev: myEvent
        });
    };
    StandardsProvider.prototype.openModal = function (page, params, enableBackdrop, dismissOnBackdrop, callback) {
        var _this = this;
        if (this.modal == null) {
            this.modal = this.modalCtrl.create(page, params, { showBackdrop: enableBackdrop, enableBackdropDismiss: dismissOnBackdrop });
            this.modal.onDidDismiss(function (data) {
                _this.modal = null;
                callback(data);
            });
            this.modal.present();
        }
    };
    StandardsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], StandardsProvider);
    return StandardsProvider;
}());

//# sourceMappingURL=standards.js.map

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		301,
		4
	],
	"../pages/register/register.module": [
		302,
		3
	],
	"../pages/submit-transaction/submit-transaction.module": [
		303,
		5
	],
	"../pages/transaction-detail/transaction-detail.module": [
		304,
		2
	],
	"../pages/transactions/transactions.module": [
		305,
		1
	],
	"../pages/user-profile/user.module": [
		306,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorHandlerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__standards_standards__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorHandlerProvider = /** @class */ (function () {
    function ErrorHandlerProvider(standards) {
        this.standards = standards;
        console.log('Hello ErrorHandlerProvider Provider');
    }
    ErrorHandlerProvider.prototype.handle = function (err, showError) {
        console.log("new error", err);
        if (err.type == "http") {
            var message = err.message;
            if (err.status == 500)
                message = "Es ist ein interner Serverfehler aufgetreten";
            if (showError)
                this.standards.showAlert("Fehler", message, function () { });
        }
    };
    ErrorHandlerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__standards_standards__["a" /* StandardsProvider */]])
    ], ErrorHandlerProvider);
    return ErrorHandlerProvider;
}());

//# sourceMappingURL=error-handler.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_config_app_config__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_user__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, appConfig, userService) {
        this.appConfig = appConfig;
        this.userService = userService;
        this.rootPage = 'UserProfileComponent';
        this.initializeApp();
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.appConfig.init();
        this.unauthorizedPages = [
            { title: 'Login', component: 'LoginPage', selected: false },
            { title: 'Registrieren', component: 'RegisterPage', selected: false },
        ];
        this.authorizedPages = [
            { title: 'Userprofil', component: 'UserProfileComponent', selected: false },
            { title: 'Neue Transaktion', component: 'SubmitTransactionComponent', selected: false },
            { title: 'Bisherige Transaktionen', component: 'TransactionsPage', selected: false }
        ];
        this.pages = this.unauthorizedPages;
        this.userService.loadUserProfile(false).then(function (success) {
            console.log("callback user profile", success);
            if (success) {
                _this.pages = _this.authorizedPages;
                _this.rootPage = 'UserProfileComponent';
            }
            else {
                _this.rootPage = 'LoginPage';
            }
        });
    };
    MyApp.prototype.navigateTo = function (page) {
        var _this = this;
        this.pages.forEach(function (p) {
            if (p == page) {
                p.selected = true;
                _this.nav.setRoot(p.component);
            }
            else {
                p.selected = false;
            }
        });
    };
    MyApp.prototype.setPageActive = function (pageName) {
        if (pageName == 'LoginPage' || pageName == 'RegisterPage') {
            this.pages = this.unauthorizedPages;
        }
        else {
            this.pages = this.authorizedPages;
        }
        this.pages.forEach(function (page) {
            if (page.component == pageName) {
                page.selected = true;
            }
            else {
                page.selected = false;
            }
        });
    };
    MyApp.prototype.logout = function () {
        this.isLoggedIn = false;
        this.pages = this.unauthorizedPages;
        this.nav.setRoot('LoginPage');
        this.userService.logout();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/philipp/Documents/Projects/programs/salamantex_assignment/salamantex_client/src/app/app.html"*/'<ion-split-pane when="lg">\n  <ion-menu [content]="content">\n    <ion-content class="menuContent">\n\n      <ion-grid class="navigationGrid">\n        <ion-row *ngFor="let page of pages">\n          <ion-col col-11 offset-1 class="centeredContent">\n            <p (click)="navigateTo(page)" [class.selected]="page.selected" class="navigationTitle">{{page.title}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="isLoggedIn">\n          <ion-col col-11 offset-1 class="centeredContent">\n            <p (click)="generatePdf()" class="navigationTitle">Produktübersicht PDF</p>\n          </ion-col>\n        </ion-row>\n        <ion-row *ngIf="isLoggedIn">\n          <ion-col col-11 offset-1>\n            <button ion-button class="standardBtn" (click)="logout()">Logout</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-content>\n\n  </ion-menu>\n\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" main #content swipeBackEnabled="false"></ion-nav>\n</ion-split-pane>\n'/*ion-inline-end:"/Users/philipp/Documents/Projects/programs/salamantex_assignment/salamantex_client/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__providers_app_config_app_config__["a" /* AppConfigProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_user_user__["a" /* UserProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmitTransactionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service_http_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_Transaction__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__transactions_transactions__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_class_transformer__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_class_transformer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_class_transformer__);
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






var SubmitTransactionProvider = /** @class */ (function () {
    function SubmitTransactionProvider(httpService, transactionService, userService) {
        this.httpService = httpService;
        this.transactionService = transactionService;
        this.userService = userService;
        //normally fetch from backend
        this.currencies = [{
                name: "Ethereum"
            }, {
                name: "Bitcoin"
            }];
        this.transactionToSubmit = new __WEBPACK_IMPORTED_MODULE_2__model_Transaction__["a" /* Transaction */]();
        console.log('Hello SubmitTransactionProvider Provider');
        this.transactionToSubmit.currency = "Ethereum";
    }
    SubmitTransactionProvider.prototype.submitTransaction = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.balanceHighEnough() && this.amountSmallerMaximalTransactionAmount() && this.currencyAccountExists())) return [3 /*break*/, 2];
                        console.log("submitting transaction");
                        return [4 /*yield*/, this.httpService.postRequest("auth", "/transactions", this.transactionToSubmit, true, true)];
                    case 1:
                        res = _a.sent();
                        if (res && res.success) {
                            res.body.source = this.userService.user;
                            res.body.target = {
                                publicIdentifier: this.transactionToSubmit.targetPublicId
                            };
                            this.transactionService.selectedTransaction = Object(__WEBPACK_IMPORTED_MODULE_5_class_transformer__["plainToClass"])(__WEBPACK_IMPORTED_MODULE_2__model_Transaction__["a" /* Transaction */], res.body);
                            return [2 /*return*/, res.body.id];
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    SubmitTransactionProvider.prototype.balanceHighEnough = function () {
        return this.transactionToSubmit.amount < this.userService.user.getBalanceByCurrency(this.transactionToSubmit.currency);
    };
    SubmitTransactionProvider.prototype.amountSmallerMaximalTransactionAmount = function () {
        return this.transactionToSubmit.amount < this.userService.user.maximumAmountPerTransaction;
    };
    SubmitTransactionProvider.prototype.currencyAccountExists = function () {
        return this.userService.user.walletExistsForCurrency(this.transactionToSubmit.currency) ? true : false;
    };
    SubmitTransactionProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_service_http_service__["a" /* HttpServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__transactions_transactions__["a" /* TransactionsProvider */], __WEBPACK_IMPORTED_MODULE_4__user_user__["a" /* UserProvider */]])
    ], SubmitTransactionProvider);
    return SubmitTransactionProvider;
}());

//# sourceMappingURL=submit-transaction.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_transactions_transactions__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_user_user__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_standards_standards__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_error_handler_error_handler__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_http_service_http_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_app_config_app_config__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_loading_state_loading_state__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_submit_transaction_submit_transaction__ = __webpack_require__(212);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/submit-transaction/submit-transaction.module#TransactionComponentModule', name: 'SubmitTransactionComponent', segment: 'neue-transaktion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/transaction-detail/transaction-detail.module#TransactionDetailPageModule', name: 'TransactionDetailPage', segment: 'transaktionen/:id', priority: 'low', defaultHistory: ['TransactionsPage'] },
                        { loadChildren: '../pages/transactions/transactions.module#TransactionsPageModule', name: 'TransactionsPage', segment: 'transaktionen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user-profile/user.module#UserComponentModule', name: 'UserProfileComponent', segment: 'userprofil', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_transactions_transactions__["a" /* TransactionsProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_standards_standards__["a" /* StandardsProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_error_handler_error_handler__["a" /* ErrorHandlerProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_http_service_http_service__["a" /* HttpServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_app_config_app_config__["a" /* AppConfigProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_loading_state_loading_state__["a" /* LoadingStateProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_submit_transaction_submit_transaction__["a" /* SubmitTransactionProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomError; });
var CustomError = /** @class */ (function () {
    function CustomError(type, message, status) {
        this.type = type;
        this.message = message;
        this.status = status;
    }
    return CustomError;
}());

//# sourceMappingURL=CustomError.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.getBalanceByCurrency = function (currencyName) {
        //relation between currency obj and currency arr in user would be better (one to many)
        return this[currencyName.toLowerCase() + "Balance"];
    };
    User.prototype.walletExistsForCurrency = function (currencyName) {
        return this[currencyName.toLowerCase() + "WalletID"];
    };
    return User;
}());

//# sourceMappingURL=User.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionState; });
var TransactionState;
(function (TransactionState) {
    TransactionState["PROCESSING"] = "#F9D047";
    TransactionState["CANCELED"] = "#EB575F";
    TransactionState["FINISHED"] = "#6ECC95";
})(TransactionState || (TransactionState = {}));
//# sourceMappingURL=TransactionState.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/philipp/Documents/Projects/programs/salamantex_assignment/salamantex_client/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/philipp/Documents/Projects/programs/salamantex_assignment/salamantex_client/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service_http_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_User__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_class_transformer__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_class_transformer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_class_transformer__);
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





var UserProvider = /** @class */ (function () {
    function UserProvider(httpService, authService) {
        this.httpService = httpService;
        this.authService = authService;
        this.profileLoading = false;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__model_User__["a" /* User */]();
    }
    UserProvider.prototype.activateEdit = function () {
        this.user.backup = this.user;
    };
    UserProvider.prototype.cancelEdit = function () {
        if (this.user.hasOwnProperty("id")) {
            for (var prop in this.user) {
                if (this.user.hasOwnProperty(prop)) {
                    for (var backupProp in this.user.backup) {
                        if (this.user.backup.hasOwnProperty(backupProp)) {
                            if (prop == backupProp) {
                                this.user[prop] = this.user.backup[backupProp];
                            }
                        }
                    }
                }
            }
        }
    };
    UserProvider.prototype.register = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, success, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.httpService.postRequest("api", "/register", this.user, false, true)];
                    case 1:
                        res = _b.sent();
                        if (!(res && res.success)) return [3 /*break*/, 3];
                        this.user.id = res.body.id;
                        _a = { register: true };
                        return [4 /*yield*/, this.login()];
                    case 2:
                        success = (_a.login = _b.sent(), _a);
                        return [2 /*return*/, success];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserProvider.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.removeToken()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserProvider.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpService.postRequest("api", "/login", this.user, false, true)];
                    case 1:
                        res = _a.sent();
                        if (!(res && res.success)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.authService.setToken(res.body.token)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserProvider.prototype.updateUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpService.postRequest("auth", "/user/" + this.user.id, this.user, false, true)];
                    case 1:
                        res = _a.sent();
                        if (res && res.success) {
                            return [2 /*return*/, true];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UserProvider.prototype.loadUserProfile = function (showError) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.profileLoading) return [3 /*break*/, 2];
                        this.profileLoading = true;
                        this.userProfile$ = this.httpService.getRequest("auth", "/user", true, showError);
                        return [4 /*yield*/, this.userProfile$];
                    case 1:
                        res = _a.sent();
                        if (res && res.success) {
                            this.profileLoading = false;
                            this.user = Object(__WEBPACK_IMPORTED_MODULE_4_class_transformer__["plainToClass"])(__WEBPACK_IMPORTED_MODULE_2__model_User__["a" /* User */], res.body);
                            return [2 /*return*/, true];
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_service_http_service__["a" /* HttpServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__auth_auth__["a" /* AuthProvider */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config_app_config__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error_handler_error_handler__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_CustomError__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loading_state_loading_state__ = __webpack_require__(107);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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







var HttpServiceProvider = /** @class */ (function () {
    function HttpServiceProvider(http, authService, appConfig, errorHandler, loadingState) {
        this.http = http;
        this.authService = authService;
        this.appConfig = appConfig;
        this.errorHandler = errorHandler;
        this.loadingState = loadingState;
    }
    HttpServiceProvider.prototype.getRequest = function (base, path, authorization, showError) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var token, reqPath, options, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //for whatever reason with httpclient i can't outsource the preparation code in a function
                        this.loadingState.startLoading();
                        token = "";
                        if (!authorization) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.authService.getToken()];
                    case 1:
                        token = _a.sent();
                        _a.label = 2;
                    case 2:
                        reqPath = this.getBasePath(base) + path;
                        options = this.getOptions(token);
                        return [4 /*yield*/, this.http.get(reqPath, __assign({ observe: "response" }, options)).toPromise()
                                .catch(function (err) {
                                console.log("err", err);
                                _this.errorHandler.handle(new __WEBPACK_IMPORTED_MODULE_5__model_CustomError__["a" /* CustomError */]("http", err.error.message, err.status), showError);
                            })];
                    case 3:
                        res = _a.sent();
                        return [2 /*return*/, this.handleResponse(res, showError)];
                }
            });
        });
    };
    HttpServiceProvider.prototype.postRequest = function (base, path, body, authorization, showError) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var token, reqPath, options, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loadingState.startLoading();
                        token = "";
                        if (!authorization) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.authService.getToken()];
                    case 1:
                        token = _a.sent();
                        _a.label = 2;
                    case 2:
                        reqPath = this.getBasePath(base) + path;
                        options = this.getOptions(token);
                        return [4 /*yield*/, this.http.post(reqPath, body, __assign({ observe: "response" }, options)).toPromise()
                                .catch(function (err) {
                                console.log("err", err);
                                _this.errorHandler.handle(new __WEBPACK_IMPORTED_MODULE_5__model_CustomError__["a" /* CustomError */]("http", err.error.message, err.status), showError);
                            })];
                    case 3:
                        res = _a.sent();
                        return [2 /*return*/, this.handleResponse(res, showError)];
                }
            });
        });
    };
    HttpServiceProvider.prototype.getOptions = function (token) {
        console.log("token for request", token);
        return {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                Authorization: "Bearer " + token
            })
        };
    };
    HttpServiceProvider.prototype.handleResponse = function (res, showError) {
        this.loadingState.endLoading();
        if (res) {
            if (res.status == 200) {
                return { success: true, body: res.body };
            }
            else {
                this.errorHandler.handle(new __WEBPACK_IMPORTED_MODULE_5__model_CustomError__["a" /* CustomError */]("http", res.body.message, res.status), showError);
            }
        }
        return { success: false };
    };
    HttpServiceProvider.prototype.getBasePath = function (base) {
        return (base == "auth") ? this.appConfig.authEndpoint : this.appConfig.apiEndpoint;
    };
    HttpServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_auth__["a" /* AuthProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__app_config_app_config__["a" /* AppConfigProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_config_app_config__["a" /* AppConfigProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__error_handler_error_handler__["a" /* ErrorHandlerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__error_handler_error_handler__["a" /* ErrorHandlerProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__loading_state_loading_state__["a" /* LoadingStateProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__loading_state_loading_state__["a" /* LoadingStateProvider */]) === "function" && _e || Object])
    ], HttpServiceProvider);
    return HttpServiceProvider;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=http-service.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(164);
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


var AuthProvider = /** @class */ (function () {
    function AuthProvider(storage) {
        this.storage = storage;
        console.log('Hello AuthProvider Provider');
    }
    AuthProvider.prototype.setToken = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.set("token", token)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AuthProvider.prototype.getToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!this.token) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.storage.get("token")];
                    case 1:
                        _a.token = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/, this.token];
                }
            });
        });
    };
    AuthProvider.prototype.removeToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.remove("token")];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfigProvider; });
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

var AppConfigProvider = /** @class */ (function () {
    function AppConfigProvider() {
        this.environment = "dev";
        console.log('Hello AppConfigProvider Provider');
    }
    AppConfigProvider.prototype.init = function () {
        if (this.environment == "dev") {
            this.apiEndpoint = "http://localhost:3000/api";
            this.authEndpoint = "http://localhost:3000/auth";
        }
    };
    AppConfigProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AppConfigProvider);
    return AppConfigProvider;
}());

//# sourceMappingURL=app-config.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map