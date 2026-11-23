import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section className="card counter-card">
      <div className="card-heading">
        <div>
          <p className="card-kicker">useState</p>
          <h2>Counter</h2>
        </div>
        <span className="card-icon" aria-hidden="true">#</span>
      </div>

      <div className="counter-value" aria-live="polite">
        <span>{count}</span>
        <small>Nilai saat ini</small>
      </div>

      <div className="counter-actions">
        <button
          type="button"
          className="icon-button"
          onClick={() => setCount((current) => (current > 0 ? current - 1 : 0))}
          aria-label="Kurangi satu"
        >
          -
        </button>
        <button
          type="button"
          className="button button-primary"
          onClick={() => setCount((current) => current + 1)}
        >
          Tambah
        </button>
        <button
          type="button"
          className="icon-button"
          onClick={() => setCount(0)}
          aria-label="Reset counter"
          title="Reset"
        >
          &#8634;
        </button>
      </div>
    </section>
  );
}

export default Counter;