import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App container m-7">
    
      <TodoInput />
      <TodoList />

    </div>
  );
}

export default App;
