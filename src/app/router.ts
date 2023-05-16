import { Router } from "express";
import { products } from "./model/Products";

const express = require("express")
const router: Router = Router()

router.use('/css',express.static('public/css'))
router.use('/icons',express.static('public/img/icons'))

router.get("/", async (req, res) => {
    try {
        const productsHtml = await products.showProducts()
        res.render('index', { productsHtml })
       
      } catch (error) {
       
        res.render('error', { error: 'Erro ao obter os produtos' });
      }
    
})


// router.get("/wishlist", homeController.home)

export { router };
