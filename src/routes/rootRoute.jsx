import React from "react";
import { Route } from "react-router-dom";

export default function rootRoute(RouterBuilder) {
  const { Home, About, Error404 } = RouterBuilder;

  return (
    <>
      <Route {...Home} />
      <Route {...About} />
      <Route {...Error404} />
    </>
  );
}
