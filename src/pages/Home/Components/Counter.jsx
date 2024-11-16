import React from "react";
import Display from "./Display";
import CounterBtn from "./CounterBtn";
import { useCounter } from "../../../contexts/CounterContext";

export default function Counter() {
  const { counter, incrementHandler, decrementHandler } = useCounter();

  return (
    <>
      <Display counter={counter} />
      <CounterBtn onClickHandle={() => incrementHandler(2)} value="+2" />
      <CounterBtn onClickHandle={() => incrementHandler(1)} value="Increment" />
      <CounterBtn onClickHandle={() => decrementHandler(1)} value="Decrement" />
      <CounterBtn onClickHandle={() => decrementHandler(2)} value="-2" />
    </>
  );
}
