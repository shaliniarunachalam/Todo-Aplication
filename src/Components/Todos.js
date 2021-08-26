import React, { useContext } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaTrash } from "react-icons/fa";

import { TodoContext } from "../context/TodoContext";
import { REMOVE_TODO } from "../context/action.type";

const Todos = () => {
  const { todos, dispatch } = useContext(TodoContext);

  return (
    <ListGroup className="mb-2 mt-5 items">
      {todos.map(todo => (
        <ListGroupItem key={todo.id}>
          {todo.todoString}
          <span
           
            onClick={() => {
              dispatch({
                type: REMOVE_TODO,
                payload: todo.id
              });
            }}
          >
            
            <FaTrash  className="float-end"/>
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Todos;
