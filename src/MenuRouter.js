import AddProductPage from "./pages/AddProduct";
import Introduce from "./pages/Introduce";
import ListProductPage from "./pages/ListProduct";
import Order from "./pages/Order";
import ProfileShop from "./pages/ProfileShop";
const routes = [
  {
    path: "/",
    exact: true,
    main: () => {
      return <Introduce />;
    },
  },

  {
    path: "/portal/sale/order",
    exact: false,
    main: () => {
      return <Order />;
    },
  },
  {
    path: "/portal/product/list/all",
    exact: false,
    main: () => {
      return <ListProductPage />;
    },
  },
  {
    path: "/portal/product/add",
    exact: false,
    main: () => {
      return <AddProductPage />;
    },
  },
  {
    path: "/portal/settings/shop/profile",
    exact: false,
    main: () => {
      return <ProfileShop />;
    },
  },
];

export default routes;
