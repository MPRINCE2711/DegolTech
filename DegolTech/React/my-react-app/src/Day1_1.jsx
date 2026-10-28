function Day1_1() {
  const technologies = ['React', 'JavaScript', 'CSS'];

  return (
    <section className="exercise-card" aria-labelledby="day-1-1-title">
      <p className="eyebrow">Exercise 1.1 · JSX</p>
      <h2 id="day-1-1-title">My learning profile</h2>
      <p>My name is Prince.</p>
      <p>I am a Full Stack Development Intern.</p>
      <p>My current learning goal is to build useful web apps with React.</p>
      <h3>Technologies I want to learn</h3>
      <ul>{technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
    </section>
  );
}

export default Day1_1;
