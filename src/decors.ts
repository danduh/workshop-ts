import {Request, Response} from 'express';

export type Method = 'get' | 'post' | 'delete';

export interface Route {
    propertyKey: string;
    httMethod: Method;
    path: string;
}

export function Get (this: any, path: string = "") {
    const httMethod: Method = 'get';
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const route: Route  = {
            propertyKey,
            httMethod,
            path
        }
        
        if(!Reflect.hasMetadata('routes', target)){
            Reflect.defineMetadata('routes', [], target)
        }

        const routes = Reflect.getMetadata('routes', target)
        routes.push(route);
        
        const routeParams = Reflect.getMetadata('routeParams', target);
        if(routeParams && routeParams.hasOwnProperty(propertyKey)){
            const methodParams = routeParams[propertyKey];
            console.log(methodParams)
            const originalMethod = descriptor.value;

            descriptor.value = (...args: [Request, Response])=>{
                let [request, response] = args;
                const argsToInject: any[] = [];
                methodParams.forEach((param: ParamType) => {
                    argsToInject[param.index] = request.params[param.paramName]
                })
                const results = originalMethod.apply(this, argsToInject)
                response.send(results);
            }
        }
    }
}

export interface ParamType{
    paramName: string;
    index: number;
}

export const Param =(paramName:string) =>{
    return (target: any, methodName:string, index: number)=>{
        const param: ParamType = {
            paramName,
            index
        }

        if(!Reflect.hasMetadata('routeParams', target)){
            Reflect.defineMetadata('routeParams', {}, target)
        }



        const routeParams: any = Reflect.getMetadata('routeParams', target);
        if(!routeParams.hasOwnProperty(methodName)){
            routeParams[methodName] = []
        }
        routeParams[methodName].push(param);
    }
}