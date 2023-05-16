"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = exports.Products = void 0;
var axios_1 = __importDefault(require("axios"));
var Products = /** @class */ (function () {
    function Products() {
    }
    Products.prototype.getProducts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, products_1, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.get('https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e')];
                    case 1:
                        response = _a.sent();
                        products_1 = response.data.products;
                        return [2 /*return*/, products_1];
                    case 2:
                        error_1 = _a.sent();
                        console.log('erro ao ler os dados');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Products.prototype.showProducts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var prod, html;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getProducts()];
                    case 1:
                        prod = _a.sent();
                        html = '';
                        prod.forEach(function (item) {
                            var startHtml = '<div class="gridProducts__card">';
                            startHtml += '<div class="gridProducts__card--favorite" data-id="' + item.id + '">';
                            startHtml += '<img class="gridProducts__card--icon" src="icons/bookmark.svg" /></div>';
                            startHtml += '<div class="gridProducts__card--infos">';
                            html += startHtml + '<div class="gridProducts__card--image"><img class="product-img" src="' + item.image + '"/></div>';
                            html += '<div class="gridProducts__card--description"><span>' + item.title + '</span></div>';
                            html += '<div class="gridProducts__card--price"><span>R$' + item.price + '</span></div>';
                            html += '</div></div>';
                        });
                        return [2 /*return*/, html];
                }
            });
        });
    };
    return Products;
}());
exports.Products = Products;
exports.products = new Products();
