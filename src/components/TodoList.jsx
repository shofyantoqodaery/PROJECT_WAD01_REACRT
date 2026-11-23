import { useState } from "react";

function TodoList() {
  const [taskText, setTaskText] = useState("");
  const [todos, setTodos] = useState([]);
  const completedCount = todos.filter((todo) => todo.completed).length;

  const handleAddTodo = (e) => {
    e.preventDefault();
    const trimmed = taskText.trim();
    if (!trimmed) return;

    const newTodo = {
      id: Date.now(),
      text: trimmed,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTaskText("");
  };

  const handleToggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <section className="card todo-card">
      <div className="card-heading">
        <div>
          <p className="card-kicker">State &amp; events</p>
          <h2>To-Do List</h2>
        </div>
        <span className="todo-count">{completedCount}/{todos.length}</span>
      </div>

      <form className="todo-form" onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="Tulis tugas baru..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          aria-label="Tugas baru"
        />
        <button type="submit" className="button button-primary" disabled={!taskText.trim()}>
          Tambah
        </button>
      </form>

      {todos.length === 0 ? (
        <div className="empty-state">
          <span aria-hidden="true">&#10003;</span>
          <p>Belum ada tugas.<br />Tambahkan tugas pertamamu.</p>
        </div>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className={todo.completed ? "todo-item completed" : "todo-item"}>
              <label className="todo-check">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleTodo(todo.id)}
                />
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </span>
              </label>
              <button
                type="button"
                className="delete-button"
                onClick={() => handleDeleteTodo(todo.id)}
                aria-label={`Hapus ${todo.text}`}
              >
                &#215;
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default TodoList;