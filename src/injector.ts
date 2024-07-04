/**
* CRUD Service for CRUD operations against BE / DB
*/
class CrudService {
    getData(entity: string) {
      return `Some Data from -> ${entity}`;
    }
   }
    
   /**
   * Service to retrieve/crate/update comments
   */
   class CommentsService {
    constructor(public crudService: CrudService) {}
    
    getComments() {
      return this.crudService.getData('/comments');
    }
   }
    
   /**
   * Service to retrieve/crate/update comments
   */
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

   const movies = new MoviesService(
    new CommentsService(new CrudService()),
    new CrudService()
   );

