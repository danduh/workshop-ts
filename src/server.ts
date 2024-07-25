import App from './app';
import { PostsController } from './controller';

const app = new App(3000, [PostsController]);
app.listen();