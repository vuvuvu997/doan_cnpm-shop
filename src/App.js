import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { userLogin, getProfileUser } from "./actions/userAction";
import Footer from "./components/footer";
import Header from "./components/header";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import routers from "./routers";

function App() {
  const popupForm = useSelector((state) => state.popupForm);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("authentication_token");
    if (token) {
      const inforUserFetch = async () => {
        const myConfig = {
          headers: { Authorization: token },
        };
        try {
          const response = await axios.get(
            "https://your-ecommerce.herokuapp.com/profile",
            myConfig
          );
          dispatch(getProfileUser(response.data));
          dispatch(userLogin({ username: response.data.email }));
        } catch (error) {
          console.log(error);
        }
      };
      inforUserFetch();
    }
  }, [dispatch]);

  return (
    <Router>
      <Header />
      <Switch>{showRouter(routers)}</Switch>
      <Footer />
      {popupForm.isPopupLogin && <LoginPage />}
      {popupForm.isPopupRes && <RegisterPage />}
      <ToastContainer />
    </Router>
  );
}

function showRouter(routers) {
  let result = null;
  if (routers.length > 0) {
    result = routers.map((route, index) => {
      return (
        <Route key={index} path={route.path} exact={route.exact}>
          {route.main}
        </Route>
      );
    });
  }
  return result;
}

export default App;
