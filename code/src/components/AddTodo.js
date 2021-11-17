import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "../reducers/todos";

import AddTag from "../components/AddTag";
import AddDate from "../components/AddDate";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  width: 90%;
  max-width: 300px;
`;

const InputField = styled.input`
  font-family: inherit;
  display: block;
`;

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newTags, setNewTags] = useState([]);

  const dispatch = useDispatch();

  const onAddTodo = () => {
    let todoObject = { newTodo, newDate, newTags };
    dispatch(todos.actions.addTodo(todoObject));
  };

  return (
    <Wrapper>
      <label>
        New todo
        <InputField
          type="text"
          name="newTodo"
          placeholder="Add new todo here..."
          onChange={(todo) => setNewTodo(todo.target.value)}
        />
      </label>
      <AddDate setNewDate={setNewDate} />
      <AddTag setNewTags={setNewTags} />
      <button onClick={onAddTodo}>Add Todo</button>
    </Wrapper>
  );
};

export default AddTodo;
