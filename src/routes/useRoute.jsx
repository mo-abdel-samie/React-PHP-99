import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Error404 from "../pages/Error404";

export default function useRoute() {
  return {
    Home: {
      path: "/",
      element: <Home />,
    },
    About: {
      path: "/about",
      element: <About />,
    },
    Error404: {
      path: "*",
      element: <Error404 />,
    },
  };
}
