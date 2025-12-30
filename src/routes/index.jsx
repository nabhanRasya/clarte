import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

// layouts
import MainLayout from "../layouts/MainLayout";

// pages
import WelcomePage from "../pages/app/welcome-page";
import NotFound from "../pages/NotFound";
import LandingPage from "@/pages/landing-page";
import HomePage from "@/pages/app/home-page";
import ScanPage from "@/pages/app/scan-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        ),
      },
      { path: "/designed-to-understand-your-skin", element: <LandingPage /> },
      { path: "/authentication", element: <WelcomePage /> },
      { path: "/scan", element: <ScanPage /> },
    ],
  },

  // global 404
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
