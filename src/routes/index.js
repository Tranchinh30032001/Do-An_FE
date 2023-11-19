import { lazy } from "react";

const NotFound404 = lazy(() => import("../pages/NotFound404"));
const Portal = lazy(() => import("../pages/Portal"));
const Event = lazy(() => import("../pages/Event"))
const Lop = lazy(() => import("../pages/Lop"))
const Khoa = lazy(() => import("../pages/Khoa"))
const GiaoVien = lazy(() => import("../pages/GiaoVien"))
const SinhVien = lazy(() => import("../pages/SinhVien"))

const routes = [
    {
        path: "/portal", // the url
        component: Portal // view rendered
    },
    {
        path: "/quanly-sinhvien", // the url
        component: SinhVien// view rendered
    },
    {
        path: "/quanly-khoa", // the url
        component: Khoa// view rendered
    },
    {
        path: "/quanly-lop", // the url
        component: Lop // view rendered
    },
    {
        path: "/quanly-giaovien", // the url
        component: GiaoVien // view rendered
    },
    {
        path: "/quanly-event", // the url
        component: Event // view rendered
    },
    {
        path: "/404",
        component: NotFound404
    }
];

export default routes;