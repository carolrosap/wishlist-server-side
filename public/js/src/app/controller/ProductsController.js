"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsController = void 0;
var jsdom_1 = require("jsdom");
var ProductsController = /** @class */ (function () {
    function ProductsController() {
    }
    ProductsController.prototype.manipulateDOM = function () {
        var dom = new jsdom_1.JSDOM(window.document.documentElement.outerHTML);
        var document = dom.window.document;
        // Faça a manipulação do DOM usando as APIs do DOM
        var contentDiv = document.getElementById('content');
        var p = document.createElement('p');
        p.textContent = 'Conteúdo adicionado via jsdom';
        if (contentDiv !== null && contentDiv !== undefined) {
            contentDiv.appendChild(p);
        }
        // Atualize o HTML da página com o DOM manipulado
        window.document.documentElement.innerHTML = document.documentElement.innerHTML;
    };
    return ProductsController;
}());
exports.ProductsController = ProductsController;
