import React from "react";
import { useCounter } from "../../../contexts/CounterContext";

export default function AbouSection() {
  const { counter } = useCounter();

  return <div>AbouSection {counter}</div>;
}
