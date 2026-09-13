export default function TechnologyCard({
  technology,
  isAdded,
  onAdd
}) {
  return (
    <article className="tech-card">

      <div className="card-top">
        <div className="icon-wrap">
          <img
            src={technology.icon}
            alt={technology.name}
          />
        </div>

        <span className="badge">
          {technology.badge}
        </span>
      </div>

      <h3>{technology.name}</h3>

      <p className="description">
        {technology.description}
      </p>

      <div className="meta-row">
        <span className="chip">
          {technology.category}
        </span>

        <span>
          {technology.difficulty}
        </span>

        <span className="rating">
          ★ {technology.rating}
        </span>
      </div>

      <button
        className={`stack-btn ${isAdded ? "added" : ""}`}
        disabled={isAdded}
        onClick={() => onAdd(technology)}
      >
        {isAdded
          ? "✓ Added to Stack"
          : "Add to Stack"}
      </button>

    </article>
  );
}