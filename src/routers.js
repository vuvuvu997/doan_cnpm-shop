import CreateShopPage from "./pages/create-shop";
import Home from "./pages/home";
import LoginPage from "./pages/login";
import ProfileShop from "./pages/profile-shop";
const routes = [
  {
    path: "/login",
    exact: true,
    main: () => {
      return <LoginPage />;
    },
  },
  {
    path: "/",
    exact: true,
    main: () => {
      return <Home />;
    },
  },
  {
    path: "/shop/create",
    exact: true,
    main: () => {
      return <CreateShopPage />;
    },
  },
  {
    path: "/portal/settings/shop/profile",
    exact: true,
    main: () => {
      return <ProfileShop />;
    },
  },
];

export default routes;
