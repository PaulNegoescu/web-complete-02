import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { Counter } from './features/Counter/Counter';
import { TodoList } from './features/Todos/TodoList';

import './App.css';
import { Nav } from './components/Nav/Nav';

export function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/todos" />} />
        <Route path="todos" element={<TodoList />} />
        <Route path="counter" element={<Counter initialCount={3} diff={5} />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
