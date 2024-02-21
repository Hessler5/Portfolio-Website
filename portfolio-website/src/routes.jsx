import React from "react";
import { createBrowserRouter } from 'react-router-dom';

import App from "./App";
import Home from "./pages/home";
import ErrorPage from "./pages/error_page"


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                errorElement: <ErrorPage />
            },
        ]
    }
]);

export default Routes;