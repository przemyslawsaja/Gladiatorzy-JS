import Post from '../pages/Post/Post'
import Blog from '../pages/Blog'
import Landing from '../pages/Landing'
import NotFound from '../pages/NotFound'
import About from '../pages/About'
import Contact from '../pages/Contact'
import { RouteProps } from 'react-router-dom';

export enum RoutePaths {
  HOME = '/',
  BLOG = '/Blog',
  POST = '/Post',
  ABOUT = '/About',
  CONTACT = '/Contact'
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
  },
  {
    path: RoutePaths.ABOUT,
    exact: true,
    component: About,

  },
  {
    path: RoutePaths.CONTACT,
    exact: true,
    component: Contact,
  },
  {
    exact: false,
    path:'*',
    component: NotFound,
  },
] 
export default routes;