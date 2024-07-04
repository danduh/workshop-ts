import express, { Application } from 'express';
import { Route } from './decors';
 
class App {
 public app: Application;
 port!: number;

 constructor(port: number, controllers: any[]) {
   this.app = express();
   this.port = port;
   this.controllersInit(controllers)
   this.init();
  //  this.routesProvider.routes(this.app);
 }
 private init(): void {
  this.app.listen(this.port, () => {
    console.log('Server Works', this.port)
  })
 }

 controllersInit(controllers: any[]){
  controllers.forEach((controller) => {
    const basePath = Reflect.getMetadata('basePath', controller)
    const routes = Reflect.getMetadata('routes', controller.prototype)
    console.log(basePath)
    console.log(routes)

    let curPath: string, handler;
    routes.forEach((route: Route) => {
      curPath = basePath + route.path;
      console.log(curPath);
      handler = controller.prototype[route.propertyKey];
      this.app[route.httMethod](curPath, handler);
    })

  })
 }
}

export default App;