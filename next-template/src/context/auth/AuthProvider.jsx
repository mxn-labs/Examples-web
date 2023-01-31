import { useReducer, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import axios from "axios";

import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

import { exampleApi } from "../../api";
import { types } from "../../types/types";

const init = () => {
  return {
    logged: false,
    user: undefined,
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);
  const { data, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      dispatch({ type: types.login, payload: data.user });
    }
  }, [status, data]);

  const registerUser = async (name, email, password) => {
    console.log("entre al provider");
    try {
      await exampleApi.post("/user/register", {
        name,
        email,
        password,
      });

      return {
        hasError: false,
      };
    } catch (error) {
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

  const logout = () => {
    signOut();
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,

        // Methods
        registerUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
