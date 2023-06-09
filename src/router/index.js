import About from "../pages/About";
import Posts from "../pages/Posts";
import postIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";

export const privateRoutes = [
    {path: '/about', element: About},
    {path: '/posts', element: Posts},
    {path: '/posts/:id', element: postIdPage},
]

export const publicRoutes = [
    {path: '/login', element: Login}
]