import CreateShopPage from "./pages/CreateShop";
import LoginPage from "./pages/LoginPage";

const routes = [
  {
    path: "/login",
    exact: true,
    main: () => {
      return <LoginPage />;
    },
  },
  {
    path: "/shop/create",
    exact: true,
    main: () => {
      return <CreateShopPage />;
    },
  },
];

export default routes;
