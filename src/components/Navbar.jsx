import React from "react";
import { Link, NavLink } from "react-router-dom";
import useRoute from "../routes/useRoute";

export default function Navbar() {
  const { Home, About, ToDo } = useRoute();

  return (
    <nav style={{ textAlign: "center" }}>
      <ul>
        <li>
          <NavLink to={Home.path}>Home</NavLink>
        </li>
        <li>
          <NavLink to={About.path}>About</NavLink>
        </li>
        <li>
          <NavLink to={ToDo.path}>ToDo</NavLink>
        </li>
      </ul>
    </nav>
  );
}
