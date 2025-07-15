import { Counter } from "./features/Counter/Counter";
import { TodoList } from "./features/Todos/TodoList";

import './App.css';

export function App() {
  return (
    <>
      <TodoList />
      <Counter initialCount={3} diff={5} />
    </>
  );
}
