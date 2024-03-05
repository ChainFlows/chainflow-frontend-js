import React from "react";
import { useRoutes } from "react-router-dom";
import HomeLandingpagePage from "./pages/HomeLandingpage";
import ActivateAccountSuccessfully from "./pages/Driver/ActivateAccountSuccessfully";
import ActivateDriverAccountVerifyBusiness from "./pages/Driver/ActivateDriverAccountVerifyBusiness";
import DriverVehicleInformation from "./pages/Driver/DriverVehicleInformation";
import DriverConnectWallet from "./pages/Driver/DriverConnectWallet";
import DriverDashboard from "./pages/Driver/DriverDashboard";

const ProjectRoutes = () => {
    let element = useRoutes([
        {
            path: "/",
            element: <HomeLandingpagePage />
        },
        {
            path: "DriverInformation",
            element: <ActivateDriverAccountVerifyBusiness />
        },
        {
            path: "DriverVehicleInformation",
            element: <DriverVehicleInformation />
        },
        {
            path: "DriverConnectWallet",
            element: <DriverConnectWallet />
        },
        {
            path: "ActivateAccountSuccessfully",
            element: <ActivateAccountSuccessfully />
        },
        {
            path: "DriverDashboard",
            element: <DriverDashboard/>
        }
    ]); 
    return element;
}

export default ProjectRoutes;