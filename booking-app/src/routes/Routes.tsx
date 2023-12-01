import { RouteObject } from "react-router-dom";
import App from "../App";
import About from "../components/about/About";
import Home from "../components/home/Home";

// interface Route{
//     path: string;
//     element: JSX.Element;
//     children: ({
//         index: boolean;
//         element: JSX.Element;
//         path?: undefined;
//     } | {
//         path: string;
//         element: JSX.Element;
//         index?: undefined;
//     })[];
// }
export const routes:Route = [
  {
    path: "",
    element: <App />,
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
];

