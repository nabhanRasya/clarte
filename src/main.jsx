import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import router from "./routes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="sensum.us.auth0.com"
      clientId="dhhbbG1F3NMxznljbrDDDqVA1jzxP6Vb"
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
);
