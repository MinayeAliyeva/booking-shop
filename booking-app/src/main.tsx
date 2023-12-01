import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { routes } from "./routes/Routes.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter(routes);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </>
);
