import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TodoList from './components/TodoList/TodoList';
import InputForm from './components/InputForm/InputForm';
import { useSelector } from 'react-redux';
import useGetCallback from './hooks/useGetCallback';

function App() {
  const state = useSelector((state) => state);
  const { handleAddTask, handleCleanTasks, handleChangeStatus } = useGetCallback();

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
