import { RouteObject } from "react-router-dom";
import About from "../components/about/About";
import Home from "../components/home/Home";
import MainLayout from "../container/MainLayout";
export const routes: RouteObject[] = [
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
    ],
  },
] as RouteObject[];
