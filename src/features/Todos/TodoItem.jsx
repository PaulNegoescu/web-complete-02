import { useId } from 'react';
import { HiMiniTrash } from 'react-icons/hi2';

import styles from './Todos.module.css';

const apiUrl = import.meta.env.VITE_API_URL;

export function TodoItem({ todo, onDelete }) {
  const id = useId();

  function handleCompleteTodo(e) {
    fetch(`${apiUrl}/todos/${todo.id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        completed: e.target.checked,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async function handleDeleteTodo() {
    await fetch(`${apiUrl}/todos/${todo.id}`, {
      method: 'DELETE',
    });

    onDelete(todo);
  }

  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        id={`todoItem_${id}`}
        defaultChecked={todo.completed}
        onChange={handleCompleteTodo}
      />
      <label htmlFor={`todoItem_${id}`}>{todo.title}</label>{' '}
      <button type="button" onClick={handleDeleteTodo}>
        <HiMiniTrash />
      </button>
    </li>
  );
}
