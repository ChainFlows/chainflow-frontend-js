import React from "react";
import { useRoutes } from "react-router-dom";
import HomeLandingpagePage from "./pages/HomeLandingpage";
import ActivateAccountSuccessfully from "./pages/Driver/ActivateAccountSuccessfully";
import ActivateDriverAccountVerifyBusiness from "./pages/Driver/ActivateDriverAccountVerifyBusiness";
import DriverVehicleInformation from "./pages/Driver/DriverVehicleInformation";
import DriverConnectWallet from "./pages/Driver/DriverConnectWallet";
import DriverDashboard from "./pages/Driver/DriverDashboard";
import ActivateSupplierAccountVerifyBusiness from "./pages/Supplier/ActivateSupplierAccountVerifyBusiness";
import ActivateSupplierAccountConnectWallet from "./pages/Supplier/ActivateSupplierAccountConnectWallet";
import CompanyOverview from "./pages/Supplier/CompanyOverview";
import SupplierAccountSuccessfully from "./pages/Supplier/SupplierAccountSuccessfully";
import Driversfindjob from "./pages/Driver/Driversfindjob";
import ActiveClientAccount from "./pages/Client/ActivateClientAccount";
import ClientConnectWallet from "./pages/Client/ActivateClientAccountConnectWallet";
import ClientAccountSuccessfully from "./pages/Client/ClientAccountSuccessfully";
import ChainFlowProducts from "./pages/Client/ChainFlowProducts";
import ProductCategories from "./pages/Client/ProductCategories";
import ProductsUnderCategory from "./pages/Client/ProductsUnderCategory";
import OrderingPage from "./pages/Client/Orderingpage";
import ProductDetails from "./pages/Client/ProductDetails";
import MakeOrder from "./pages/Client/MakeOrder";
import OrderComplete from "./pages/Client/OrderComplete";
import QUotations from "./pages/Client/QUotations";

const ProjectRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <HomeLandingpagePage />,
    },
    {
      path: "DriverInformation",
      element: <ActivateDriverAccountVerifyBusiness />,
    },
    {
      path: "DriverVehicleInformation",
      element: <DriverVehicleInformation />,
    },
    {
      path: "DriverConnectWallet",
      element: <DriverConnectWallet />,
    },
    {
      path: "ActivateAccountSuccessfully",
      element: <ActivateAccountSuccessfully />,
    },
    {
      path: "DriverDashboard",
      element: <DriverDashboard />,
    },
    {
      path: "SupplierInformation",
      element: <ActivateSupplierAccountVerifyBusiness />,
    },
    {
      path: "SupplierConnectWallet",
      element: <ActivateSupplierAccountConnectWallet />,
    },
    {
      path: "CompanyOverview",
      element: <CompanyOverview />,
    },
    {
      path: "SupplierAccountSuccessfully",
      element: <SupplierAccountSuccessfully />,
    },
    {
      path: "Driverfindjob",
      element: <Driversfindjob />,
    },
    {
      path: "ActiveClientAccount",
      element: <ActiveClientAccount />,
    },
    {
      path: "ClientConnectWallet",
      element: <ClientConnectWallet />,
    },
    {
      path: "ClientAccountSuccessfully",
      element: <ClientAccountSuccessfully />,
    },
    {
      path: "ChainFlowProducts",
      element: <ChainFlowProducts />,
    },
    {
      path: "ProductCategories",
      element: <ProductCategories />,
    },
    {
      path: "ProductsUnderCategory",
      element: <ProductsUnderCategory />,
    },
    {
      path: "OrderingPage",
      element: <OrderingPage />,
    },
    {
      path: "ProductDetails",
      element: <ProductDetails />,
    },
    {
      path: "MakeOrderRequest",
      element: <MakeOrder />,
    },
    {
      path: "OrderComplete",
      element: <OrderComplete />,
    },
    {
      path: "Quotations",
      element: <QUotations />,
    },
  ]);
  return element;
};

export default ProjectRoutes;
