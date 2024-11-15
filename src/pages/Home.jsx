import React, { useState } from "react";
import { Button } from "@mantine/core";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  const [counter, setCounter] = useState(0);

  const incrementHandler = () => {
    // setCounter(counter + 1);
    setCounter((pre) => ++pre);
  };

  const decrementHandler = () => {
    // setCounter(counter - 1);
    setCounter((pre) => --pre);
  };

  return (
    <MainLayout>
      <main style={{ textAlign: "center" }}>
        <div>
          <h1>Home Page</h1>
          <p>{counter}</p>
          <Button onClick={incrementHandler} variant="outline">
            Increment
          </Button>
          <Button onClick={decrementHandler} variant="outline">
            Decrement
          </Button>
        </div>
      </main>
    </MainLayout>
  );
}
