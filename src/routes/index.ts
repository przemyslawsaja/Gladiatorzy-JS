import Post from '../pages/Post/Post'
import Blog from '../pages/Curses'
import About from '../pages/Authors'
import SignIn from './../pages/SignIn';
import SignUp from '../pages/SignUp';
import Landing from '../pages/Landing'
import NotFound from '../pages/NotFound'
import { RouteProps } from 'react-router-dom';


export enum RoutePaths {
  HOME = '/',
  CURSES= '/Curses',
  POST = '/Post',
  ABOUT = '/About',
  SIGNIN = '/Sign-in',
  SIGNUP = '/Sign-up',
}

const routes: RouteProps[] = [
  {
    path: RoutePaths.HOME,
    exact: true,
    component: Landing,
  },
  {
    path: RoutePaths.CURSES,
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
    path: RoutePaths.SIGNIN,
    exact: true,
    component: SignIn,
  },
  {
    path: RoutePaths.SIGNUP,
    exact: true,
    component: SignUp,
  },
  {
    exact: false,
    path:'*',
    component: NotFound,
  },
] 
export default routes;