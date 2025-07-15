const apiUrl = import.meta.env.VITE_API_URL;

export function AddTodoForm({updateTodoList}) {
  async function handleAddTodo(e) {
    e.preventDefault();

    const data = new FormData(e.target);
    const newTodo = {
      title: data.get('title'),
      userId: 1,
      completed: false,
    };

    const newlyAddedTodo = await fetch(`${apiUrl}/todos`, {
      method: 'POST',
      body: JSON.stringify(newTodo),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());

    updateTodoList(newlyAddedTodo);
  }
  
  return (
    <form onSubmit={handleAddTodo}>
        <label htmlFor="title">What do you want to do?</label>
        <div>
          <input type="text" name="title" id="title" />
          <button type="submit">Add Todo Item</button>
        </div>
      </form>
  )
}
