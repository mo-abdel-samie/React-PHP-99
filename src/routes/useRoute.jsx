import React from "react";
import Home from "../pages/Home/Home";
import About from "../pages/About";
import Error404 from "../pages/Error404";
import ToDo from "../pages/ToDo/ToDo";

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
    ToDo: {
      path: "/todos",
      element: <ToDo />,
    },
    Error404: {
      path: "*",
      element: <Error404 />,
    },
  };
}
