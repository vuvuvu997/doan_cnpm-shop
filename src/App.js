import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routers from "./routers";
import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { userLogin } from "./actions/userAction";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  if (token) {
    dispatch(userLogin({ username: "Nguyen Dang Sang" }));
  }

  return (
    <Router>
      <Header />
      <Switch>{showRouter(routers)}</Switch>
      <Footer />
      <LoginPage />
      <RegisterPage />
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
