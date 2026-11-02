import StudentCard from './StudentCard.jsx';

function StudentList({ students = [] }) {
  return (
    <section className="student-section" aria-labelledby="students-heading">
      <div className="section-heading">
        <div>
          <p className="dashboard-kicker">Meet the team</p>
          <h3 id="students-heading">Intern directory</h3>
        </div>
        <span className="student-total">{students.length} students</span>
      </div>
      {students.length > 0 ? (
        <div className="student-grid">
          {students.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      ) : (
        <p className="empty-state">No students to show yet.</p>
      )}
    </section>
  );
}

export default StudentList;
