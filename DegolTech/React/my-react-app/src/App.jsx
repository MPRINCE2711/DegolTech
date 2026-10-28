import Day1_1 from './Day1_1.jsx';
import Day1_2 from './Day1_2.jsx';
import './App.css';

function App() {
  return (
    <main className="learning-page">
      <header className="page-header">
        <p className="eyebrow">React · Day 1</p>
        <h1>My first React exercises</h1>
        <p>Practicing JSX, components, and props one step at a time.</p>
      </header>
      <Day1_1 />
      <Day1_2 />
    </main>
  );
}
export default App;
