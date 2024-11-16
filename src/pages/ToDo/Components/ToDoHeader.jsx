import { Container, Flex } from "@mantine/core";
import React from "react";

export default function ToDoHeader() {
  return (
    <Flex
      bg="blue"
      h="30vh"
      gap="md"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
    >
      <Container size="xs" ta="center" c="white">
        xs Container
      </Container>
    </Flex>
  );
}
