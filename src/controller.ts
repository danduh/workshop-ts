
import { NextFunction, Response, Request } from 'express';
import postsService from './posts-service';
import { Get, Param } from './decors';
import "reflect-metadata"


const Controller = (path:string) => {
  return (target: any) => {
    Reflect.defineMetadata('basePath', path, target)
  }
}


@Controller('/posts')
export class PostsController {

@Get()
public getListOfPosts(
   req: Request,
   res: Response,
   next: NextFunction
 ) {
   const data = postsService.listPosts();
   res.send(data).status(200);
 }
 
 @Get('/:postId')
 public getListById(@Param('postId') postId: number) {
    console.log('postId', postId);
    const data = postsService.getPost(postId);
    return data;
 }


}

