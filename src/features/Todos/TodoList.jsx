import { useEffect, useState } from 'react';

export function TodoList() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3080/todos')
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  function handleAddTodo(e) {
    e.preventDefault();

    const data = new FormData(e.target);
    const newTodo = {
      title: data.get('title'),
      userId: 1,
      completed: false,
    };

    fetch('http://localhost:3080/todos', {
      method: 'POST',
      body: JSON.stringify(newTodo),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  // if(!todos) {
  //   return <strong>Loading ...</strong>;
  // }

  return (
    <>
      <h1>Todos</h1>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="title">What do you want to do?</label>
        <div>
          <input type="text" name="title" id="title" />
          <button type="submit">Add Todo Item</button>
        </div>
      </form>
      {!todos && <strong>Loading ...</strong>}
      <ul>
        {todos && todos.map((todo) => <li key={todo.id}>{todo.title}</li>)}
      </ul>
    </>
  );
}

/**
 * RESTful Web Services / APIs
 *
 * Endpoint/Resource: /users, /todos, /movies, /parts, /restaurants, /recipes
 * Request (Method HTTP)
 *
 * Create - POST
 *    /todos     -> created a new entity of the resource type (we need to send it the entity (object) as the body of the request)
 * Read/Retrieve - GET
 *    /todos     -> full list of todos (array of objects)
 *    /todos/:id -> one entity of the resource type (object) that has the id ":id"
 * Update - PUT / PATCH
 *    /todos/:id -> will update the entity with the id ":id" (PUT is idempotent === need to send through the complete entity so that it will be replaced in the DB, PATCH is not, we can send through only part of the entity which needs to be updated)
 * Delete
 *    /todos/:id -> will delete the entity
 *
 * Response (response codes)
 * 1XX - Informational
 * 2XX - Success (200 OK, 201 CREATED)
 * 3XX - Redirect (301 Temporary, 302 Permanent, 304 Not Modified)
 * 4XX - Client Errors (404 Not Found, 401 Unauthorized, 403 Not Allowed, 400 Bad Request, 405 Method not Allowed, 418 I'm a teapot)
 * 5XX - Server Errors (500 Internal Server Error, 502 Bad Gateway)
 */
