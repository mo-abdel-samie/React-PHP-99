import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./main.css"
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "./pages/Error404";

export default function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
