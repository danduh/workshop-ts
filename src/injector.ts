import { Injectable } from "./decorators/injectable";
import "reflect-metadata";


const Injector = new (class{
  instMap: Record<string, any>={};
  resolve<T>(target: any) {
    let tokens = Reflect.getMetadata('design:paramtypes', target);
    let injections = tokens?.map((token: any) => {
        return Injector.resolve(token)
    }) || [];
    if(this.instMap.hasOwnProperty(target.name)){
      return this.instMap[target.name];
    } else {
      this.instMap[target.name] = new target(...injections)
      return this.instMap[target.name];
    }
  }
})()


const resolve = (target:any) => {
  let tokens = Reflect.getMetadata('design:paramtypes', target);
  let injections = tokens?.map((token: any) => resolve(token)) || [];
  if(!injections)
    return new target();
  return new target(...injections)
}

/**
* CRUD Service for CRUD operations against BE / DB
*/
@Injectable()
class CrudService {
    // constructor(){}
    getData(entity: string) {
      return `Some Data from -> ${entity}`;
    }
}
    
   /**
   * Service to retrieve/crate/update comments
   */
@Injectable()
class CommentsService {
    constructor(public crudService: CrudService) {}
    
    getComments() {
      return this.crudService.getData('/comments');
    }
}
    
   /**
   * Service to retrieve/crate/update comments
   */
@Injectable()
class MoviesService {
    constructor(
      private commentsService: CommentsService,
      private crudService: CrudService
    ) {}
    getMovies() {
      return this.crudService.getData('/movies');
    }
    getComments() {
      return this.commentsService.getComments();
    }
}




// const movies = new MoviesService(
//   new CommentsService(new CrudService()),
//   new CrudService()
// );

const movies = Injector.resolve(MoviesService)


console.log(movies.getMovies())
console.log(movies.getComments())