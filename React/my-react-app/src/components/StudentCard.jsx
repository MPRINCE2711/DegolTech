function StudentCard({ student }) {
  const { name, role = 'Intern', completedTasks } = student;

  return (
    <article className="student-card">
      <div className="student-avatar" aria-hidden="true">
        {name
          .split(' ')
          .map((part) => part[0])
          .join('')}
      </div>
      <div className="student-details">
        <h4>{name}</h4>
        <p>{role}</p>
      </div>
      <div className="task-count">
        <strong>{completedTasks}</strong>
        <span>tasks done</span>
      </div>
    </article>
  );
}

export default StudentCard;
