import TechnologyCard from "./TechnologyCard";

export default function TechnologyList({
  technologies,
  stack,
  onAdd
}) {
  return (
    <div className="technology-grid">
      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
          isAdded={stack.some(
            (item) => item.id === technology.id
          )}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}