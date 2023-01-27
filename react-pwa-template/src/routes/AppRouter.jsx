import { Route, Routes } from "react-router-dom";

import { GenericRoutes } from "../generic";
import { LoginPage, RegisterPage } from "../auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="login/*"
          element={
            <PublicRoute>
              <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
              
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <GenericRoutes /> 
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
