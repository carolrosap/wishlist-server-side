"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homeController = void 0;
var HomeController = /** @class */ (function () {
    function HomeController() {
    }
    // public async home(req: Request, res: Response) {
    //   try {
    //     // Faz a requisição GET à API utilizando o Axios
    //     const response = await axios.get('https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e');
    //     const dados = response.data; // Dados da resposta da API
    //     // Envia a resposta da API para o cliente
    //     return res.status(200).json(dados);
    //   } catch (error) {
    //     // Trata erros da requisição
    //     return res.status(500).json({ error: 'Erro ao acessar API' });
    //   }
    // }
    // public loadProducts() {
    //   let pro = new Products()
    //   pro.getProducts
    //   const div = document.getElementsByClassName('gridProducts')
    //   console.log(div)
    // }
    // public async home( req: Request, res: Response) {
    //   res.render("index",{
    //     formatUpperCase,
    //     formatLowerCase,
    //     showProducts
    //   })
    // }
    HomeController.prototype.home = function (req, res) {
        res.render("index");
    };
    return HomeController;
}());
exports.homeController = new HomeController();
