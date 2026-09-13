export default function StackSidebar({
  stack,
  onRemove,
  onRemoveAll
}) {
  return (
    <aside className="stack-sidebar">

      <div className="stack-title">
        <h3>Your Stack</h3>

        <p>
          {stack.length} Technology
          {stack.length !== 1 ? "ies" : "y"} Selected
        </p>
      </div>

      {stack.length === 0 ? (
        <div className="empty-stack">
          <div className="empty-icon">+</div>

          <p>Your stack is empty</p>

          <span>
            Add technologies to build your
            development stack.
          </span>
        </div>
      ) : (
        <>
          <div className="stack-list">
            {stack.map((technology) => (
              <div
                className="stack-item"
                key={technology.id}
              >
                <img
                  src={technology.icon}
                  alt={technology.name}
                />

                <div>
                  <strong>{technology.name}</strong>
                  <small>{technology.category}</small>
                </div>

                <button
                  onClick={() =>
                    onRemove(technology.id)
                  }
                  aria-label={`Remove ${technology.name}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <button
            className="remove-all"
            onClick={onRemoveAll}
          >
            Remove All
          </button>
        </>
      )}

    </aside>
  );
}