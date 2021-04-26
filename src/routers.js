import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetailPage from "./pages/ProductDetail";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => {
      return <Home />;
    },
  },
  {
    path: "/:categoryId/productList",
    exact: false,
    main: () => {
      return <ProductList />;
    },
  },
  {
    path: "/login",
    exact: false,
    main: () => {
      return <Login />;
    },
  },
  {
    path: "/register",
    exact: false,
    main: () => {
      return <Register />;
    },
  },
  {
    path: "/checkout",
    exact: true,
    main: () => {
      return <Checkout />;
    },
  },
  {
    path: "/cart",
    exact: true,
    main: () => {
      return <Cart />;
    },
  },
  {
    path: "/:productId",
    exact: false,
    main: () => {
      return <ProductDetailPage />;
    },
  },
];

export default routes;
