import { useRoutes } from "react-router-dom";
import "./App.css";
import { routes } from "./routes/Routes";

function App() {
  const myRoute=useRoutes(routes);
  return <>{myRoute}</>;
}

export default App;
