import React from "react";
import { Button } from "@mantine/core";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <main>
        <div>
          <h1>Home Page</h1>
          <Button variant="outline">Button</Button>
        </div>
      </main>
    </MainLayout>
  );
}
