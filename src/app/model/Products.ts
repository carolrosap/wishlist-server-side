import axios from "axios";

export class Products {

    public async getProducts() {
        try {
            const response = await axios.get('https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e')
            const products = response.data.products
            return products
        } catch (error) {
            console.log('error reading data from API')
        }
    }

    public async showProducts() {
        var prod = await this.getProducts()
        var html = ''
        prod.forEach((item: any) => {
            var startHtml = '<div class="gridProducts__card">'
            startHtml += '<div class="gridProducts__card--favorite" data-id="' + item.id + '">'
            startHtml += '<img class="gridProducts__card--icon" src="icons/bookmark.svg" /></div>'
            startHtml += '<div class="gridProducts__card--infos">'
            html += startHtml + '<div class="gridProducts__card--image"><img class="product-img" src="' + item.image + '"/></div>'
            html += '<div class="gridProducts__card--description"><span>' + item.title + '</span></div>'
            html += '<div class="gridProducts__card--price"><span>R$' + item.price + '</span></div>'
            html += '</div></div>'
        });
        return html
    }

}

export const products = new Products()