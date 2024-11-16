import React from "react";
import ToDoSingle from "./ToDoSingle";
import { Container } from "@mantine/core";
import { useToDos } from "../../../contexts/ToDosContext";

export default function ToDosContainer() {
  const { tasks } = useToDos();

  return (
    <Container size="lg">
      {tasks.map((task, i) => (
        <ToDoSingle key={i} {...task} />
      ))}
    </Container>
  );
}
