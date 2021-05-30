import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Cart from "../../components/cart";

function CartPage(props) {
  const [cart, setCart] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("authentication_token");
    if (token) {
      const myConfig = {
        headers: { Authorization: token },
      };
      const fetchListCart = async () => {
        try {
          const response = await axios.get(
            "https://your-ecommerce.herokuapp.com/carts",
            myConfig
          );
          const data = response.data.products;
          //dispatch(actionsCart.fetchCart(data));
          setCart(data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchListCart();
    }
  }, [dispatch]);

  if (!cart) {
    return (
      <h1 style={{ marginTop: "200px", textAlign: "center" }}>Loading...</h1>
    );
  }

  return (
    <div>
      <Cart />
    </div>
  );
}

export default CartPage;
