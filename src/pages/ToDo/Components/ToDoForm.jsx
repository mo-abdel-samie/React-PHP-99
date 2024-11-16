import { Button, Flex, Input } from "@mantine/core";
import React from "react";
import { useToDos } from "../../../contexts/ToDosContext";

export default function ToDoForm() {
  const { addTask, setNewTaskTitle, newTaskTitle } = useToDos();

  return (
    <Flex
      mih={50}
      gap="md"
      my={10}
      justify="center"
      align="flex-start"
      direction="row"
      wrap="wrap"
    >
      <Input
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        placeholder="Input component"
      />
      <Button onClick={() => addTask("Task01")}>Add</Button>
      <Button>Clear</Button>
    </Flex>
  );
}
