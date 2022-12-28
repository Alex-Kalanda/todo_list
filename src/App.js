import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import InputForm from "./components/InputForm/InputForm";

function App() {
  const test = [
    { task: "Do something", status: true },
    { task: "Drink something", status: true },
    { task: "Go home", status: false },
    { task: "Learn JS", status: true },
  ];

  const [state, setState] = useState(test);

  return (
    <div className="App">
      <Header />
      <InputForm />
      <TodoList tasks={state} />
      <Footer />
    </div>
  );
}

export default App;
