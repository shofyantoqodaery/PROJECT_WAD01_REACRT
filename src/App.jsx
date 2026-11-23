import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import DummyPosts from "./components/DummyPosts";

function App() {
  return (
    <main className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">React Lab</p>
          <h1>Workspace latihan</h1>
          <p className="header-description">
            Belajar state, daftar tugas, dan loading data dalam satu tempat.
          </p>
        </div>
        <div className="header-badge" aria-label="Aplikasi React">
          <span className="status-dot" />
          React 19
        </div>
      </header>

      <div className="dashboard-grid">
        <Counter />
        <TodoList />
        <DummyPosts />
      </div>
    </main>
  );
}

export default App;