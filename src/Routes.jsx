import React from "react";
import { useRoutes } from "react-router-dom";
import HomeLandingpagePage from "./pages/HomeLandingpage";
import ActivateAccountSuccessfully from "./pages/Driver/ActivateAccountSuccessfully";
import ActivateDriverAccountVerifyBusiness from "./pages/Driver/ActivateDriverAccountVerifyBusiness";
import DriverVehicleInformation from "./pages/Driver/DriverVehicleInformation";
import DriverConnectWallet from "./pages/Driver/DriverConnectWallet";
import DriverDashboard from "./pages/Driver/DriverDashboard";
import ActivateSupplierAccountVerifyBusiness from "./pages/Supplier/ActivateSupplierAccountVerifyBusiness";
import ActivateSupplierAccountConnectWallet from "./pages/Supplier/ActivateSupplierAccountConnectWallet"
import CompanyOverview from "./pages/Supplier/CompanyOverview";
import SupplierAccountSuccessfully from "./pages/Supplier/SupplierAccountSuccessfully";

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
        },
        {
            path: "SupplierInformation",
            element: <ActivateSupplierAccountVerifyBusiness />
        },
        {
            path: "SupplierConnectWallet",
            element: <ActivateSupplierAccountConnectWallet />
        },
        {
            path: "CompanyOverview",
            element: <CompanyOverview />
        },
        {
            path: "SupplierAccountSuccessfully",
            element: <SupplierAccountSuccessfully />
        }

    ]); 
    return element;
}

export default ProjectRoutes;