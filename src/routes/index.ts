import Post from '../pages/Post'
import Blog from '../pages/Blog'
import Landing from '../pages/Landing'
import { RouteProps } from 'react-router-dom';

export enum RoutePaths {
  HOME = '/',
  BLOG = '/Blog',
  POST = '/Post',
}

const routes: RouteProps[] = [
  {
    path: RoutePaths.HOME,
    exact: true,
    component: Landing,
  },
  {
    path: RoutePaths.BLOG,
    exact: true,
    component: Blog,

  },
  {
    path: RoutePaths.POST,
    exact: true,
    component: Post,
  }
] 
export default routes;