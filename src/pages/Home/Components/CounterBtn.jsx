import { Button } from "@mantine/core";
import React from "react";

export default function CounterBtn({ value, onClickHandle }) {
  return (
    <Button onClick={onClickHandle} mx="5px" color="green" variant="outline">
      {value}
    </Button>
  );
}
