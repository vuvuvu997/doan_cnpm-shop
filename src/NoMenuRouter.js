import CreateShopPage from "./pages/create-shop";
import LoginPage from "./pages/login";
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
