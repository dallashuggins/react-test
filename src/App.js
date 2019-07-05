import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from './components/Button';
import Input from './components/Input';
import Table from './components/Table';
import './App.css';

function App ({ data }) {
  const [item, setItem] = useState(''); // initial value is an empty string
  const [dueDate, setDueDate] = useState('');
  const [todoList = [], setTodoList] = useState(data);

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
    const newTodoListString = JSON.stringify(newTodoList);
    sessionStorage.setItem('todoList', newTodoListString);
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

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    item: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired
  }))
}

export default App;
