import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userRegister } from "../../actions/userAction";
import userAPI from "../../api/userAPI";

function FormRegister(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  async function onSubmit(e) {
    e.preventDefault();
    let item = { username, password };
    try {
      let response = await userAPI.register(item);
      console.log(response);
      if (response.username) {
        // register successfull
        console.log("Success");
        dispatch(userRegister({ isRegister: true, data: response }));
      } else {
        dispatch(userRegister({ isRegister: false, data: {} }));
      }
    } catch (error) {
      console.log(error);
    }
    setUsername("");
    setPassword("");
  }

  return (
    <form>
      <div class="form-group form-group--regris">
        <input
          type="text"
          value={username}
          name={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Nhập Tài khoản"
        />
      </div>
      <div class="form-group form-group--regris">
        <input
          type="password"
          placeholder="Nhập Mật khẩu"
          value={password}
          name={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div class="form-group form-group--regris">
        <input type="password" placeholder="Nhập lại Mật khẩu" />
      </div>
      <div class="form-group">
        <button type="submit" onClick={onSubmit} class="btn btn-regris">
          Tiếp tục
        </button>
      </div>
    </form>
  );
}

export default FormRegister;
