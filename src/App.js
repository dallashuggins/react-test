import React, { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Table from './components/Table';
import './App.css';

function App () {
  const [item, setItem] = useState(''); // initial value is an empty string
  const [dueDate, setDueDate] = useState('');
  const intialTodoString = sessionStorage.getItem('todoList');
  const intialTodo = JSON.parse(intialTodoString);
  const [todoList = [], setTodoList] = useState(intialTodo);

  // Updates the to-do list item
  const updateItem = event => {
    setItem(event.target.value)
  }

  // Updates the to-do list item's due date
  const updateDueDate = event => {
    setDueDate(event.target.value)
  }

  const updateTodoList = event => {
    const todo = {
      item: item,
      dueDate: dueDate
    };
    const newTodoList = todoList ? todoList.slice() : [];
    newTodoList.push(todo);
    setTodoList(newTodoList);
  }

  return (
    <div style={{maxWidth: '1024px', margin: 'auto'}}>
      <Input title="Item" inputValue={item} onChangeFunc={updateItem} />
      <Input title="Due Date" inputValue={dueDate} onChangeFunc={updateDueDate}/>
      <Button name="Submit" onClickFunc={updateTodoList} />
      {todoList && todoList.length > 0 ? <Table items={todoList} columns={[{key: 'item', label: 'To-Do Item'},{key: 'dueDate', label: 'Due Date'}]}/> : null}
    </div>
  );
}

export default App;
