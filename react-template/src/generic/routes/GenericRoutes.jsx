import { Route, Routes, Navigate } from "react-router-dom";

import { GenericNavbar } from "../../ui";
import { HomePage, SecondPage, ThirdPage } from "../pages";

export const GenericRoutes = () => {
  return (
    <>
      <GenericNavbar />
      <div className="container-xl mt-1">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="second" element={<SecondPage />} />
          <Route path="third" element={<ThirdPage />} />

          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
};
