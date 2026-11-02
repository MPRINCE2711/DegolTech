import Header from './components/Header.jsx';
import WelcomePanel from './components/WelcomePanel.jsx';
import StudentList from './components/StudentList.jsx';
import Footer from './components/Footer.jsx';

const students = [
  { id: 1, name: 'Aarav Sharma', role: 'Frontend Intern', completedTasks: 4 },
  { id: 2, name: 'Diya Patel', role: 'Backend Intern', completedTasks: 6 },
  { id: 3, name: 'Kabir Khan', role: 'Full Stack Intern', completedTasks: 3 },
  { id: 4, name: 'Meera Joshi', role: 'UI Developer Intern', completedTasks: 5 },
  { id: 5, name: 'Rohan Das', role: 'Intern', completedTasks: 2 },
];

function Day1_3() {
  return (
    <div className="day-1-3">
      <Header />
      <main className="dashboard-content">
        <WelcomePanel studentName="Prince" />
        <StudentList students={students} />
      </main>
      <Footer />
    </div>
  );
}

export default Day1_3;
