import express from "express";
import { router } from "./router";
import { Products } from "./model/Products";

export class App{
  public server: express.Application = express();

  constructor(){
    this.server;
    this.server.set('view engine', 'ejs');
    this.server.set('views', __dirname + '/views');
    
    this.middleware();
    this.router();

  }
  
  private middleware(){
    this.server.use(express.json());
  }

  private router(){
    this.server.use(router);
  }

}