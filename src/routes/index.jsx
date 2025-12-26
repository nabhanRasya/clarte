import { createBrowserRouter } from "react-router-dom";

// layouts
import AppLayout from "../layouts/AppLayout";

// pages
import WelcomePage from "../pages/app/welcome-page";
import NotFound from "../pages/NotFound";

// auth - register
import PhoneRegister from "@/pages/app/auth/register/phone-register";
import EmailRegister from "@/pages/app/auth/register/email-register";
import GoogleRegister from "@/pages/app/auth/register/google-register";
import AppleRegister from "@/pages/app/auth/register/apple-register";

// auth - login
import PhoneLogin from "@/pages/app/auth/login/phone-login";
import EmailLogin from "@/pages/app/auth/login/email-login";
import GoogleLogin from "@/pages/app/auth/login/google-login";
import AppleLogin from "@/pages/app/auth/login/apple-login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      // landing
      { index: true, element: <WelcomePage /> },

      // auth - register
      { path: "register/phone", element: <PhoneRegister /> },
      { path: "register/email", element: <EmailRegister /> },
      { path: "register/google", element: <GoogleRegister /> },
      { path: "register/apple", element: <AppleRegister /> },

      // auth - login
      { path: "login/phone", element: <PhoneLogin /> },
      { path: "login/email", element: <EmailLogin /> },
      { path: "login/google", element: <GoogleLogin /> },
      { path: "login/apple", element: <AppleLogin /> },
    ],
  },

  // global 404
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
