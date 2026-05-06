import { createBrowserRouter } from "react-router-dom";
// Layout
import MainLayout from "../components/layout/MainLayout";
// Pages
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Reservation from "../pages/Reservation";
import Dashboard from "../pages/Dashboard";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
// Auth Pages 
import Login from "../pages/Login";
import Register from "../pages/Register";

// Private Route
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/reservation",
        element: <Reservation />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      
      // Auth Routes 
      {
        path: "/signin",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register />,
      },

      // Protected Route 
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;