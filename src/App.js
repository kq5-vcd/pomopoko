import './App.css';
import { RandomButton } from './RandomButton';
import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('No task selected')

  const tasks = ['ATGT', 'Domain Adaptation', 'Codecademy - Data Science', 'Codecademy - Fullstack', 'TNMT']

  const selectTask = () => {
    const idx = Math.floor(Math.random() * tasks.length)
    setTask(tasks[idx])
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Pomodoro Task Scheduler
        </h1>
      </header>

      <RandomButton onClick={selectTask}/>
      <h2>{task}</h2>
    </div>
  );
}

export default App;
