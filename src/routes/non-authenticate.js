import { lazy } from "react"
const Login = lazy(() => import("../pages/Login"))
const Signup = lazy(() => import("../pages/Signup"))
const Home = lazy(() => import("../pages/Home"))

export const nonAuthenticate = {
    login: {
        path: "/login",
        component: Login
    },
    signup: {
        path: "/signup",
        component: Signup
    },
    home: {
        path: "/",
        component: Home
    }
}