
import { NextFunction, Response, Request } from 'express';
import postsService from './posts-service';
 
export class PostsController {
 public static getListOfPosts(
   req: Request,
   res: Response,
   next: NextFunction
 ) {
   const data = postsService.listPosts();
   res.send(data).status(200);
 }
 
 public static getListById(req: Request, res: Response, next: NextFunction) {
   const postId = parseInt(req.params['postId']);
   const data = postsService.getPost(postId);
   res.send(data).status(200);
 }
}