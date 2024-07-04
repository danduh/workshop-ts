import { Application } from 'express';
import { PostsController } from './controller';
 
export class Routes {
 public routes(app: Application): void {
   app.route('/posts').get(PostsController.getListOfPosts);
   app.route('/posts/:postId').get(PostsController.getListById);
 }
}