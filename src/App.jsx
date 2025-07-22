import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { Counter } from './features/Counter/Counter';
import { TodoList } from './features/Todos/TodoList';
import { Register } from './features/Auth/Register';
import { Login } from './features/Auth/Login';
import { Nav } from './components/Nav/Nav';
import { AuthContextProvider } from './features/Auth/AuthContext';

import './App.css';
import './forms.css';

export function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate to="/todos" />} />
          <Route path="todos" element={<TodoList />} />
          <Route path="counter" element={<Counter initialCount={3} diff={5} />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        <ToastContainer />
      </AuthContextProvider>
    </BrowserRouter>
  );
}
