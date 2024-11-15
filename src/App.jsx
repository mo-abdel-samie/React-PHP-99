import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "./main.css";
import { BrowserRouter, Routes } from "react-router-dom";
import rootRoute from "./routes/rootRoute";
import useRoute from "./routes/useRoute";

export default function App() {
  const RouterBuilder = useRoute();

  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>{rootRoute(RouterBuilder)}</Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
