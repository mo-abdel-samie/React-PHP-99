import { Box, Button, Checkbox, Flex, Title } from "@mantine/core";
import React from "react";

export default function ToDoSingle({ title, status }) {
  return (
    <Flex
      align="center"
      justify="space-between"
      bg={status ? "blue.2" : "gray.2"}
      my={10}
      p={8}
    >
      <Flex align="center" gap={12}>
        <Checkbox checked={status} />
        <Title size={24}>{title}</Title>
      </Flex>
      <Flex gap={10}>
        <Button>X</Button>
        <Button>E</Button>
      </Flex>
    </Flex>
  );
}
