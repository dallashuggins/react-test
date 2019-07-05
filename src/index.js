import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const getTodoList = () => {
  const intialTodoString = sessionStorage.getItem('todoList');
  const intialTodo = typeof intialTodoString === 'string' ? JSON.parse(intialTodoString) : intialTodoString;
  return intialTodo || [];
}

ReactDOM.render(<App data={getTodoList()}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
