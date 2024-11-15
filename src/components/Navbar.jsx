import React from "react";
import { Link, NavLink } from "react-router-dom";
import useRoute from "../routes/useRoute";

export default function Navbar() {

  const {Home, About} = useRoute()

  return (
    <nav style={{ textAlign: "center" }}>
      <ul>
        <li><NavLink to={Home.path}>Home</NavLink></li>
        <li><NavLink to={About.path}>About</NavLink></li>
      </ul>
    </nav>
  );
}
