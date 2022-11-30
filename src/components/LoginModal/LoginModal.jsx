import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getFromServer } from "../../fetches/getFromServer.fetch";

export const LoginModal = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, setLogin] = useState();
  return (
    <div className="login_wrap">
      <div className="login_window">
        <div className="login_content">
          <h3>Логин</h3>
          <input
            type="text"
            value={login}
            onChange={(e) => {
              setLogin(e.target.value);
            }}
          />
          <button
            className="login_btn"
            onClick={async (e) => {
              const response = await getFromServer("reader");

              let loginly = false;
              await response.forEach((element) => {
                console.log(
                  element.reader_id,
                  Number(login),
                  element.reader_id === Number(login)
                );
                if (element.reader_id === Number(login)) {
                  console.log(response);
                  dispatch({ type: "login", payload: Number(login) });
                  props.setIsLogin(true);
                  loginly = true;
                  navigate("/library");
                }
              });
              console.log(loginly);
              if (!loginly) {
                console.log("unknown");
              }
            }}
          >
            Войти
          </button>
        </div>
      </div>
    </div>
  );
};
