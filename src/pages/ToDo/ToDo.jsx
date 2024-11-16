import React from "react";
import MainLayout from "../../layouts/MainLayout";
import ToDoHeader from "./Components/ToDoHeader";
import ToDoForm from "./Components/ToDoForm";
import ToDosContainer from "./Components/ToDosContainer";
import { ToDosProvider } from "../../contexts/ToDosContext";

export default function ToDo() {
  return (
    <MainLayout>
      <ToDosProvider>
        <ToDoHeader />
        <ToDoForm />
        <ToDosContainer />
      </ToDosProvider>
    </MainLayout>
  );
}
