import { useReducer, useEffect } from "react";

import Cookies from "js-cookie";
import axios from "axios";

import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { exampleApi } from "../../api";
import { types } from "../types/types";

const init = () => {
  return {
    logged: false,
    user: undefined,
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    try {
      const { data } = await exampleApi.get("users/validate-token", {
        headers: { Authorization: `${Cookies.get("token")}` },
      });
      const { token, user } = data;
      Cookies.set("token", token, {expires: 30});
      dispatch({ type: types.login, payload: user });
    } catch (error) {
      Cookies.remove("token");
    }
  };

  const loginUser = async (email, password) => {
    try {
      const { data } = await exampleApi.post("users/login", {
        email,
        password,
      });
      const { token, user } = data;
      Cookies.set("token", token, {expires: 30});
      dispatch({ type: types.login, payload: user });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const registerUser = async (new_user) => {
    try {
      const { data } = await exampleApi.post("users/register", new_user);
      const { token, user } = data;
      Cookies.set("token", token, {expires: 30});
      dispatch({ type: types.login, payload: user });
      return {
        hasError: false,
      };
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        return {
          hasError: true,
          message: error.response.data.message,
        };
      }

      return {
        hasError: true,
        message: "No se pudo crear el usuario - intente de nuevo",
      };
    }
  };

  const logoutUser = () => {
    Cookies.remove("token");
    const action = { type: types.logout };
    dispatch(action);
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,

        // Methods
        loginUser,
        logoutUser,
        registerUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
