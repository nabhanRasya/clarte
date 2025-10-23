import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/AppLayouts/AppLayout";
import WelcomePage from "../pages/app/welcome-page";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <WelcomePage /> },
      { path: "*", element: <NotFound /> }, // 404
      //   { path: "about", element: <AboutPage /> },
    ],
  },
]);

export default router;
