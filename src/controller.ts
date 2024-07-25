
import postsService from './posts-service';
import { Controller, Get, Param } from './decorators/controller';

@Controller('/posts')
export class PostsController {

  @Get('')
 public getListOfPosts() {
   return postsService.listPosts();
 }
 
 @Get('/:postId')
 public getListById(@Param('postId') postId: number) {
   return postsService.getPost(postId);
 }
}