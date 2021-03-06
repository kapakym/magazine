import React, { useContext } from "react";
import { Routes } from "react-router-dom";
import { Route, Navigate } from "react-router-dom";
import { Context } from "../index";
import { authRoutes, publicRoutes } from "../routes";
import { SHOP_ROUTE } from "../utils/consts";

function AppRouter() {
  const { user } = useContext(Context);
  console.log(user);

  return (
    <Routes>
      {user.isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />}></Route>
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />}></Route>
      ))}
      <Route path="*" element={<Navigate to={SHOP_ROUTE} />} />
    </Routes>
  );
}

export default AppRouter;
