// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/SCSS/index.scss";
import MainRoutes from "./index.jsx"; // S'assurer que MainRoutes comprend <BrowserRouter>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <MainRoutes />
    </React.StrictMode>
);
