import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import InputForm from './components/InputForm/InputForm';
import getUniqID from './utils/getUniqID';

function App() {
  const test = [
    { task: 'Do something', status: false },
    { task: 'Drink something', status: false },
    { task: 'Go home', status: true },
  ];

  const [state, setState] = useState(test);

  const handleAddTask = (taskText) => {
    setState([...state, { task: taskText, status: false, id: getUniqID() }]);
  };

  const handleCleanTasks = () => {
    setState([]);
  };

  const handleChangeStatus = (id) => {
    const updState = [...state];
    const currTask = updState.find((t) => t.id === id);
    currTask.status = !currTask.status;
    setState(updState);
  };

  return (
    <div className="App">
      <Header />
      <InputForm addTask={handleAddTask} />
      <TodoList tasks={state} onChangeStatus={handleChangeStatus} />
      <Footer tasks={state} cleanTasks={handleCleanTasks} />
    </div>
  );
}

export default App;
