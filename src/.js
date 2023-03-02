import { useRoutes } from "react-router-dom";
import DashboardLayout from "src/layouts/Header";
// import Accounting from "./consumer/Accounting";
import Home from './../Pages/Home';





const RouteLayout = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { path: "/", element: <Home /> },

        // { path: "/account", element: <Accounting /> },
        
       
        
      ],
    },
  ]);

  return routes;
};
export default RouteLayout;
