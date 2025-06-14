import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import DesignThoughts from "./components/DesignThoughts";
import Experiences from "./components/Experiences";
import PremiumTools from "./components/PremiumTools";
import Projects from "./components/Projects";
import { ROUTES } from "./constants/routes";
import Layout from "./pages/Layout";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.PROJECTS,
        element: <Projects />,
      },
      {
        path: ROUTES.EXPERIENCES,
        element: <Experiences />,
      },
      {
        path: ROUTES.TOOLS,
        element: <PremiumTools />,
      },
      {
        path: ROUTES.THOUGHTS,
        element: <DesignThoughts />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
