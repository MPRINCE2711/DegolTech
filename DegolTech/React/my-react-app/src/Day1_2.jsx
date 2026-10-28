function LearningTopic({ title, description }) {
  return (
    <article className="topic-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

function Day1_2() {
  return (
    <section className="exercise-card" aria-labelledby="day-1-2-title">
      <p className="eyebrow">Exercise 1.2 · Components and props</p>
      <h2 id="day-1-2-title">What I am learning next</h2>
      <div className="topic-grid">
        <LearningTopic title="JSX" description="Write familiar HTML-like markup inside JavaScript." />
        <LearningTopic title="Components" description="Break an interface into small, reusable pieces." />
        <LearningTopic title="Props" description="Pass data into a component to customize what it displays." />
      </div>
    </section>
  );
}

export default Day1_2;
