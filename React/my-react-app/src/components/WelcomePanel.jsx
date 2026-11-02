function WelcomePanel({ studentName = 'Learner' }) {
  return (
    <section className="welcome-panel" aria-labelledby="welcome-heading">
      <p className="dashboard-kicker">Your learning space</p>
      <h3 id="welcome-heading">Welcome, {studentName}!</h3>
      <p>Keep learning, building, and celebrating every step forward.</p>
    </section>
  );
}

export default WelcomePanel;
