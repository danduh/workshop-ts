class PostsService {
    public listPosts() {
      return [{id: 1,title: 'Post One',},
              { id: 2, title: 'Post Two' }];
    }
    public getPost(id: number) {
      return { id, title: 'Post One'};
    }
   }
   export default new PostsService();