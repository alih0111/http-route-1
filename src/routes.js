import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import FullComment from './pages/FullComment/FullComment'
import NewComment from  './pages/NewComment/NewComment'

const routes = [
  { path: "/new-comment", component: NewComment },
  { path: "/full-comment/:id", component: FullComment },
  { path: "/", component: HomePage, exact: true },
  { component: NotFound },
];

export default routes;
