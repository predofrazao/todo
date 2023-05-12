import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./Componentes/Header/Header";
import Input from "./Componentes/Forms/Input";
import Todo from "./Componentes/Todo/Todo";

const App = () => {
  return (
    <>
      <Header titulo="TODO" />
      <main>
        <Input />
        <Todo />
      </main>
    </>
  );
};

export default App;
