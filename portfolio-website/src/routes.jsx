import React from "react";
import { createBrowserRouter } from 'react-router-dom';

import App from "./App";
import Home from "./pages/home";
import ErrorPage from "./pages/error_page"
import PixelHarvester from "./pages/pixel_harvester";
import BattleMemes from "./pages/battlememes";
import ToyTanks from "./pages/toy_tanks";
import CssColorSelector from "./pages/css_color_selector";
import ExerciseGenerator from "./pages/excercise_generator";


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
            {
                path: "/pixel_harvester",
                element: <PixelHarvester />,
                errorElement: <ErrorPage />
            },
            {
                path: "/battlememes",
                element: <BattleMemes />,
                errorElement: <ErrorPage />
            },
            {
                path: "/toy_tanks",
                element: <ToyTanks />,
                errorElement: <ErrorPage />
            },
            {
                path: "/css_color_selector",
                element: <CssColorSelector />,
                errorElement: <ErrorPage />
            },
            {
                path: "/exercise_generator",
                element: <ExerciseGenerator />,
                errorElement: <ErrorPage />
            }
        ]
    }
]);

export default Routes;