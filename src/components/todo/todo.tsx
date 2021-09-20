import { useQuery } from "react-query";
import { getTodos } from "../../fetcher/todo";
import { Todos } from "../../core/todo";

function Todo() {
  // Queries
  const {
    // status,
    data: todos,
    // error,
  } = useQuery<Todos, Error>("todos", getTodos);

  return (
    <div>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>
            id: {todo.id} , userId: {todo.userId} , title: {todo.title} ,
            completed: {String(todo.completed)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
