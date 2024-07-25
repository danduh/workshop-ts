import express, { Application } from 'express';
// import { Routes } from './routes';
import { Route } from './decorators/controller';
 
class App {
 public app: Application;
 port: number;

 constructor(port:number, controllers: any[]) {
   this.port = port
   this.app = express();
   this.controllerInit(controllers)
   
   this.config();
  }
 private config(): void {}

 controllerInit(controllers: any[]){
    controllers.forEach((ctrl) => {

      const basePath = Reflect.getMetadata('basePath', ctrl);
      const routes = Reflect.getMetadata('routes', ctrl.prototype);
      
      let curPath: string, curRouteHandle;

      routes.forEach((route: Route) =>{ 
        curPath = basePath + route.path;
        curRouteHandle = ctrl.prototype[route.propertyKey];
        console.log(curRouteHandle);
        this.app[route.httpMethod](curPath, curRouteHandle);  
        console.log(`route ${ctrl.name}.${route.propertyKey} -> ${route.httpMethod} ${curPath}`)
      })
    
    
      // console.log(basePath);
      // console.log(routes);
    })
 }


 public listen(){
  this.app.listen(this.port, () => {
    console.log('Ready on Port', this.port)
  })
 }
}

export default App;