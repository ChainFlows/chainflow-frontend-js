import React from "react";
import { useRoutes } from "react-router-dom";
import HomeLandingpagePage from "./pages/HomeLandingpage";

const ProjectRoutes = () => {
    let element = useRoutes([
        {
            path: "/",
            element: <HomeLandingpagePage />
        },
        {
            path: "*",
            element: <h1>Not Found</h1>
        }
    ]); 
    return element;
}

export default ProjectRoutes;