import React from "react";
import { Button } from "@mantine/core";
import MainLayout from "../layouts/MainLayout";

export default function About() {
  return (
    <MainLayout>
      <main>
        <div>
          <h1>About Page</h1>
          <Button variant="outline">Button</Button>
        </div>
      </main>
    </MainLayout>
  );
}
