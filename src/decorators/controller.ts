import { NextFunction, Response, Request } from 'express';
import "reflect-metadata";

type Method = 'get' | 'post' | 'put' | 'delete';
export interface ParamType {
    paramName: string;
    index: number;
}

export interface Route {
    propertyKey: string;
    httpMethod: Method;
    path: string;
}

export function Controller(path: string){
    return (target: any) => {
        Reflect.defineMetadata('basePath', path, target);
    }
}


export function Get(path: string = ''){
    const httpMethod: Method = 'get';
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const route: Route = {
            propertyKey,
            httpMethod,
            path
        }
        
        if(!Reflect.hasMetadata('routes', target)){
            Reflect.defineMetadata('routes', [], target)
        }

        const routes = Reflect.getMetadata('routes', target);
        routes.push(route);

        const params: any = Reflect.getMetadata('routeParams', target);
        
        let paramsToInject: ParamType[];
        if(params){
            paramsToInject = params[propertyKey];
        }
        const original = descriptor.value;

        descriptor.value = function(...args: [Request, Response]) {
            let [request, response] = args;
            let argsToInject: any[] = [];
            if(paramsToInject){
            paramsToInject.forEach((param: ParamType) => {
                argsToInject[param.index] = request.params[param.paramName];
            })}
            const result = original.apply(this, argsToInject);
            response.send(result);
        }

    }
}



export function Param(paramName: string){
    return (target: any, methodName: string, index:number)=>{
        const param: ParamType = {
            paramName,
            index
        };

        if(!Reflect.hasMetadata('routeParams', target)){
            Reflect.defineMetadata('routeParams', {}, target)
        }

        const routeParams = Reflect.getMetadata('routeParams', target);
        if(!routeParams.hasOwnProperty(methodName)){
            routeParams[methodName] = [];
        }
        routeParams[methodName].push(param);
    }
}