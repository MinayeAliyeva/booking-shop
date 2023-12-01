import { RouteObject, useRoutes } from "react-router-dom";
import About from "../components/about/About";
import Home from "../components/home/Home";
import MainLayout from "../container/MainLayout";
import MyProfile from "../components/myprofile/MyProfile";
import PrivateLayout from "../container/PrivateLayout";

export type MyRouterObject = RouteObject & { auth?: boolean };
export const routes: MyRouterObject[] = [
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/profile",
        auth: true,
        element: <MyProfile />,
      },
    ],
  },
] as MyRouterObject[];

export const authMap = (routes:MyRouterObject[]) => {
  return routes.map((route) => {
    if (route.auth) {
      route.element = <PrivateLayout>{route.element}</PrivateLayout>;
    }
    return route;
  });
};

export const useAuthMapRoutes=()=>{
  return useRoutes(authMap(routes))
}