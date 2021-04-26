import React from "react";
import { userLogin } from "../../actions/userAction";
import { useDispatch } from "react-redux";
import userAPI from "../../api/userAPI";

function FormLogin(props) {
  const dispatch = useDispatch();
  // async function onSubmit(e) {
  //   e.preventDefault();
  //   const item = { username, password };
  //   try {
  //     const response = await userAPI.login(item);
  //     if (response.id) {
  //       //login success!
  //       dispatch(userLogin(response));
  //     } else {
  //       console.log("you forget password");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   setUsername("");
  //   setPassword("");
  // }

  async function handleSubmit(e) {
    e.preventDefault();
    let data = new FormData(e.target);
    try {
      const response = await userAPI.login(Object.fromEntries(data));
      console.log(response);
      localStorage.setItem("token", response.token);
      dispatch(userLogin({ username: "Nguyen Dang Sang" }));
    } catch (error) {
      console.log(error);
    }

    //console.log(Object.fromEntries(data));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group form-group--regris">
        <input
          type="text"
          //value={username}
          //onChange={(e) => setUsername(e.target.value)}
          name="username"
          placeholder="Nhập Tài khoản"
          defaultValue="mor_2314"
        />
      </div>
      <div className="form-group form-group--regris">
        <input
          type="password"
          //value={password}
          //onChange={(e) => setPassword(e.target.value)}
          name="password"
          defaultValue="83r5^_"
          placeholder="Nhập Mật khẩu"
        />
      </div>
      <div className="form-group">
        <button type="submit" class="btn btn-regris">
          Tiếp tục
        </button>
      </div>
    </form>
  );
}

export default FormLogin;
