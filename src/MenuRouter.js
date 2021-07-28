import AddProductPage from "./pages/add-product";
import Introduce from "./pages/introduce";
import ListProductPage from "./pages/list-product";
import Order from "./pages/order";
import ProfileShop from "./pages/profile-shop";
import Review from "./pages/reviews";
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
  {
    path: "/portal/settings/shop/rating",
    exact: false,
    main: () => {
      return <Review />;
    },
  },
];

export default routes;
