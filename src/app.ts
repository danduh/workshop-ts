import express, { Application } from 'express';
import { Routes } from './routes';
 
class App {
 public app: Application;
 public routesProvider: Routes = new Routes();
 constructor() {
   this.app = express();
   this.config();
   this.routesProvider.routes(this.app);
 }
 private config(): void {}
}

export default new App().app;