webpackJsonp([3],{

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastro/cadastro.module": [
		286,
		2
	],
	"../pages/escolha/escolha.module": [
		287,
		1
	],
	"../pages/lista-agendamentos/lista-agendamentos.module": [
		288,
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
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrosServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the CarrosServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CarrosServiceProvider = (function () {
    function CarrosServiceProvider(_http) {
        this._http = _http;
        this._url = 'http://localhost:8080/api';
    }
    CarrosServiceProvider.prototype.lista = function () {
        return this._http.get(this._url + "/carro/listaTodos");
    };
    return CarrosServiceProvider;
}());
CarrosServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], CarrosServiceProvider);

//# sourceMappingURL=carros-service.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_agendamentos_service_agendamentos_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_agendamento_dao_agendamento_dao__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CadastroPage = (function () {
    function CadastroPage(navCtrl, navParams, _alertCtrl, _agendamentosService, _agendamentoDAO) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._alertCtrl = _alertCtrl;
        this._agendamentosService = _agendamentosService;
        this._agendamentoDAO = _agendamentoDAO;
        this.nome = "";
        this.endereco = "";
        this.email = "";
        this.data = new Date().toISOString();
        this.carro = this.navParams.get("carroSelecionado");
        this.precoTotal = this.navParams.get("precoTotal");
    }
    CadastroPage.prototype.agenda = function () {
        var _this = this;
        if (!this.nome || !this.endereco || !this.email) {
            this._alertCtrl
                .create({
                title: "Preenchimento obrigatório",
                subTitle: "Preencha todos os campos",
                buttons: [
                    {
                        text: "OK"
                    }
                ]
            })
                .present();
            return;
        }
        var agendamento = {
            nomeCliente: this.nome,
            enderecoCliente: this.endereco,
            emailCliente: this.email,
            modeloCarro: this.carro.nome,
            precoTotal: this.precoTotal,
            confirmado: false,
            enviado: false,
            data: this.data
        };
        this._alerta = this._alertCtrl.create({
            title: "Aviso",
            buttons: [
                {
                    text: "OK",
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                    }
                }
            ]
        });
        var mensagem = "";
        this._agendamentoDAO
            .ehDuplicado(agendamento)
            .mergeMap(function (ehDuplicado) {
            if (ehDuplicado) {
                throw new Error("Agendamento existente!");
            }
            else {
                return _this._agendamentosService.agenda(agendamento);
            }
        })
            .mergeMap(function (valor) {
            var observable = _this._agendamentoDAO.salva(agendamento);
            if (valor instanceof Error) {
                throw valor;
            }
            return observable;
        })
            .finally(function () {
            _this._alerta.setSubTitle(mensagem);
            _this._alerta.present();
        })
            .subscribe(function () { return (mensagem = "Agendamento realizado"); }, function (err) { return (mensagem = err.message); });
    };
    return CadastroPage;
}());
CadastroPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: "page-cadastro",template:/*ion-inline-start:"C:\Projetos\Ionic\aluracar\src\pages\cadastro\cadastro.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cadastro</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <h2>{{ carro.nome }}</h2>\n  <p>R$ {{ precoTotal }}</p>\n\n  <form (ngSubmit)="agenda()" #formulario="ngForm">\n    <ion-item>\n      <ion-label floating>Nome:</ion-label>\n      <ion-input [(ngModel)]="nome" name="nome"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Endereço:</ion-label>\n      <ion-input [(ngModel)]="endereco" name="endereco"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Email:</ion-label>\n      <ion-input [(ngModel)]="email" name="email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Data:</ion-label>\n      <ion-datetime [(ngModel)]="data" name="data" displayFormat="DD/MM/YY"></ion-datetime>\n    </ion-item>\n  </form>\n\n\n  <ion-fab top right edge>\n    <button ion-fab mini (click)="formulario.ngSubmit.emit()">\n      <ion-icon name="send"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\Projetos\Ionic\aluracar\src\pages\cadastro\cadastro.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_agendamentos_service_agendamentos_service__["a" /* AgendamentosServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_4__providers_agendamento_dao_agendamento_dao__["a" /* AgendamentoDaoProvider */]])
], CadastroPage);

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscolhaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_cadastro__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EscolhaPage = (function () {
    function EscolhaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.acessorios = [];
        this.carro = this.navParams.get("carroSelecionado");
        this._precoTotal = this.carro.preco;
        this.acessorios = [
            {
                nome: "Freio ABS",
                preco: 800
            },
            {
                nome: "Ar Condicionado",
                preco: 1000
            },
            {
                nome: "MP3 Player",
                preco: 500
            }
        ];
    }
    EscolhaPage.prototype.atualizaTotal = function (ativado, acessorio) {
        ativado
            ? (this._precoTotal += acessorio.preco)
            : (this._precoTotal -= acessorio.preco);
    };
    EscolhaPage.prototype.avancarCadastro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cadastro_cadastro__["a" /* CadastroPage */].name, {
            carroSelecionado: this.carro,
            precoTotal: this._precoTotal
        });
    };
    Object.defineProperty(EscolhaPage.prototype, "precoTotal", {
        get: function () {
            return this._precoTotal;
        },
        enumerable: true,
        configurable: true
    });
    return EscolhaPage;
}());
EscolhaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: "page-escolha",template:/*ion-inline-start:"C:\Projetos\Ionic\aluracar\src\pages\escolha\escolha.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Escolha</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-slides pager="true">\n    <ion-slide *ngFor="let foto of carro.fotos">\n      <img src="{{ foto }}"/>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-item-group>\n    <ion-item-divider color="light">\n      <ion-icon name="options"></ion-icon>\n      VEÍCULO\n    </ion-item-divider>\n    <ion-item>{{ carro.nome }}</ion-item>\n    <ion-item>R$ {{ carro.preco }}</ion-item>\n  </ion-item-group>\n\n  <ion-item-group>\n    <ion-item-divider color="light">\n      <ion-icon name="options"></ion-icon>\n      ACESSÓRIOS\n    </ion-item-divider>\n\n    <ion-item *ngFor="let acessorio of acessorios">\n      <ion-label>\n        <h2>{{ acessorio.nome }}</h2>\n        <h4>R$ {{ acessorio.preco }}</h4>\n      </ion-label>\n\n      <ion-toggle #toggle color="secondary" (ionChange)="atualizaTotal(toggle.checked, acessorio)"></ion-toggle>\n    </ion-item>\n  </ion-item-group>\n\n  <ion-item-divider color="light">\n    <span item-right>TOTAL: R$ {{ _precoTotal }}</span>\n  </ion-item-divider>\n\n  <ion-fab top right edge>\n    <button ion-fab mini (click)="avancarCadastro()">\n        <ion-icon name="arrow-dropright"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\Projetos\Ionic\aluracar\src\pages\escolha\escolha.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], EscolhaPage);

//# sourceMappingURL=escolha.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaAgendamentosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_agendamento_dao_agendamento_dao__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_agendamentos_service_agendamentos_service__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListaAgendamentosPage = (function () {
    function ListaAgendamentosPage(navCtrl, navParams, _agendamentoDAO, _alertCtrl, _agendamentosService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._agendamentoDAO = _agendamentoDAO;
        this._alertCtrl = _alertCtrl;
        this._agendamentosService = _agendamentosService;
        this._agendamentos = [];
    }
    ListaAgendamentosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this._agendamentoDAO
            .listaTodos()
            .subscribe(function (agendamentos) {
            _this._agendamentos = agendamentos;
        });
    };
    ListaAgendamentosPage.prototype.reenvia = function (agendamento) {
        var _this = this;
        this._alerta = this._alertCtrl.create({
            title: "Aviso",
            buttons: [
                {
                    text: "OK"
                }
            ]
        });
        var mensagem = "";
        this._agendamentosService
            .agenda(agendamento)
            .mergeMap(function (valor) {
            var observable = _this._agendamentoDAO.salva(agendamento);
            if (valor instanceof Error) {
                throw valor;
            }
            return observable;
        })
            .finally(function () {
            _this._alerta.setSubTitle(mensagem);
            _this._alerta.present();
        })
            .subscribe(function () { return (mensagem = "Agendamento reenviado"); }, function (err) { return (mensagem = err.message); });
    };
    return ListaAgendamentosPage;
}());
ListaAgendamentosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: "page-lista-agendamentos",template:/*ion-inline-start:"C:\Projetos\Ionic\aluracar\src\pages\lista-agendamentos\lista-agendamentos.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Agendamentos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let agendamento of _agendamentos" [class.falha]="!agendamento.enviado">\n      {{ agendamento.nomeCliente }} - {{ agendamento.modeloCarro }}\n\n      <button ion-button item-end icon-only clear *ngIf="!agendamento.enviado" (click)="reenvia(agendamento)">\n        <ion-icon name="refresh"></ion-icon>\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Projetos\Ionic\aluracar\src\pages\lista-agendamentos\lista-agendamentos.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_agendamento_dao_agendamento_dao__["a" /* AgendamentoDaoProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_agendamentos_service_agendamentos_service__["a" /* AgendamentosServiceProvider */]])
], ListaAgendamentosPage);

//# sourceMappingURL=lista-agendamentos.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_carros_service_carros_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_agendamentos_service_agendamentos_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_finally__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_finally__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_do__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_mergeMap__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_catch__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_observable_fromPromise__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_observable_of__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_storage__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_agendamento_dao_agendamento_dao__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/escolha/escolha.module#EscolhaPageModule', name: 'EscolhaPage', segment: 'escolha', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/lista-agendamentos/lista-agendamentos.module#ListaAgendamentosPageModule', name: 'ListaAgendamentosPage', segment: 'lista-agendamentos', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_16__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                name: 'aluracar',
                storeName: 'agendamentos',
                driverOrder: [
                    'indexeddb'
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_8__providers_carros_service_carros_service__["a" /* CarrosServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_agendamentos_service_agendamentos_service__["a" /* AgendamentosServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_17__providers_agendamento_dao_agendamento_dao__["a" /* AgendamentoDaoProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_lista_agendamentos_lista_agendamentos__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.pages = [
            {
                title: 'Agendamentos',
                component: __WEBPACK_IMPORTED_MODULE_5__pages_lista_agendamentos_lista_agendamentos__["a" /* ListaAgendamentosPage */].name,
                icon: 'calendar'
            }
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.goTo = function (page) {
        this.nav.push(page);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]) === "function" && _a || Object)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'myapp',template:/*ion-inline-start:"C:\Projetos\Ionic\aluracar\src\app\app.html"*/'<ion-split-pane>\n  <ion-menu [content]="content">\n    <ion-content>\n      <ion-item id="cabecalho-menu" class="cabecalho-menu">\n        <div>\n          <ion-avatar item-start>\n            <img src="assets/img/avatar-profile.jpg">\n          </ion-avatar>\n        </div>\n        <h2>Danilo Moreira</h2>\n        <p>xliudanilox@gmail.com</p>\n      </ion-item>\n      <ion-list>\n        <button ion-item menuClose *ngFor="let page of pages" (click)="goTo(page.component)">\n          <ion-icon [name]="page.icon" item-left></ion-icon>\n          {{ page.title}}\n        </button>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <ion-nav [root]="rootPage" main #content swipeBackEnabled="false"></ion-nav>\n</ion-split-pane>\n'/*ion-inline-end:"C:\Projetos\Ionic\aluracar\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object])
], MyApp);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendamentosServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AgendamentosServiceProvider = (function () {
    function AgendamentosServiceProvider(_http) {
        this._http = _http;
        this._url = "http://localhost:8080/api";
    }
    AgendamentosServiceProvider.prototype.agenda = function (agendamento) {
        return this._http
            .post(this._url + "/agendamento/agenda", agendamento)
            .do(function () { return (agendamento.enviado = true); })
            .catch(function (err) {
            return __WEBPACK_IMPORTED_MODULE_2__node_modules_rxjs_Observable__["Observable"].of(new Error("Falha no agendamento! Tente novamento mais tarde"));
        });
    };
    return AgendamentosServiceProvider;
}());
AgendamentosServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], AgendamentosServiceProvider);

//# sourceMappingURL=agendamentos-service.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_carros_service_carros_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__escolha_escolha__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, _loadingCtrl, _alertCtrl, _carrosService) {
        this.navCtrl = navCtrl;
        this._loadingCtrl = _loadingCtrl;
        this._alertCtrl = _alertCtrl;
        this._carrosService = _carrosService;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loading = this._loadingCtrl.create({
            content: "Carregando carros ..."
        });
        loading.present();
        this._carrosService.lista()
            .subscribe(function (carros) {
            _this.carros = carros;
            loading.dismiss();
        }, function (err) {
            loading.dismiss();
            _this._alertCtrl.create({
                title: 'Falha na conexão',
                subTitle: 'Não foi possível carregar a lista de carros. Tente outra veeeez!',
                buttons: [
                    {
                        text: 'OK'
                    }
                ]
            }).present();
        });
    };
    HomePage.prototype.selecionaCarro = function (carro) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__escolha_escolha__["a" /* EscolhaPage */].name, {
            carroSelecionado: carro
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: "page-home",template:/*ion-inline-start:"C:\Projetos\Ionic\aluracar\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Aluracar\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let carro of carros" (click)="selecionaCarro(carro)">\n      <h2>{{ carro.nome }}</h2>\n      <p>R${{ carro.preco }}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Projetos\Ionic\aluracar\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_carros_service_carros_service__["a" /* CarrosServiceProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgendamentoDaoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AgendamentoDaoProvider = (function () {
    function AgendamentoDaoProvider(_storage) {
        this._storage = _storage;
    }
    AgendamentoDaoProvider.prototype._geraChave = function (agendamento) {
        return agendamento.emailCliente + agendamento.data.substr(0, 10);
    };
    AgendamentoDaoProvider.prototype.salva = function (agendamento) {
        var chave = this._geraChave(agendamento);
        var promise = this._storage.set(chave, agendamento);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromPromise(promise);
    };
    AgendamentoDaoProvider.prototype.ehDuplicado = function (agendamento) {
        var chave = this._geraChave(agendamento);
        var promise = this._storage.get(chave).then(function (dado) {
            return dado ? true : false;
        });
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromPromise(promise);
    };
    AgendamentoDaoProvider.prototype.listaTodos = function () {
        var agendamentos = [];
        var promise = this._storage.forEach(function (agendamento) {
            agendamentos.push(agendamento);
        }).then(function () { return agendamentos; });
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromPromise(promise);
    };
    ;
    return AgendamentoDaoProvider;
}());
AgendamentoDaoProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
], AgendamentoDaoProvider);

//# sourceMappingURL=agendamento-dao.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map