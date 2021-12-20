import React, { useContext } from "react";
import Todo from "../types/Todo";
import { ctx } from "./App";

type TodosProps = {};
/**
 * Displays all todos
 * @param param0
 * @returns
 */
export const Todos = ({}: TodosProps) => {
  const [val, setVal] = useContext(ctx);

  React.useEffect(() => {
    setVal("hallo");
  }, [setVal]);

  React.useEffect(() => {
    console.log(val);
  }, [val]);

  const [todos, setTodos] = React.useState<Todo[]>([]);
  const [newTodo, setNewTodo] = React.useState("");

  const handleClick = () => {
    setTodos([...todos, { name: newTodo, finished: false }]);
  };

  const handleCheckEvent = (
    e: React.ChangeEvent<HTMLInputElement>,
    todo: Todo
  ) => {
    setTodos(
      todos.map((value) =>
        value.name === todo.name
          ? { ...value, finished: e.target.checked }
          : value
      )
    );
  };

  React.useEffect(() => {
    console.log(newTodo);
  }, [newTodo]);

  return (
    <div style={{ margin: 10 }}>
      <input
        style={{ marginRight: 10 }}
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      ></input>
      <button onClick={handleClick}>Add Todo</button>

      <div>
        {todos.map((todo) => {
          return (
            <div style={{ margin: "5px 0" }}>
              {todo.name}{" "}
              <input
                type="checkbox"
                checked={todo.finished}
                onChange={(e) => handleCheckEvent(e, todo)}
              ></input>
            </div>
          );
        })}
      </div>
    </div>
  );
};
