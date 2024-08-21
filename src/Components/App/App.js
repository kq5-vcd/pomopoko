import React, { useState } from 'react';

import { DB } from '../../Utils/DB';

import { RandomButton } from '../RandomButton/RandomButton';
import { Timer } from '../Timer/Timer';
import { TaskTable } from '../TaskTable/TaskTable';

import './App.css';


function App() {
  const [selectedTask, setSelectedTask] = useState('No task selected')
  const [tasks, setTasks] = useState(DB.getTasks())

  // const tasks = ['IC - Face Embedding', 
  //   'VietOCR', 
  //   'ABINET', 
  //   'FastAI', 
  //   'Codecademy - Data Science', 
  //   'Codecademy - Fullstack', 
  //   'TNMT - Frontend',
  //   'TNMT - Backend',
  //   'Book review',
  //   'Short story'
  // ]

  const selectTask = () => {
    const idx = Math.floor(Math.random() * tasks.length)
    setSelectedTask(tasks[idx])
  }

  const addTask = (newTask) => {
    if(tasks.includes(newTask)) return

    setTasks(prev => [...prev, newTask])
    DB.saveTasks(tasks)
    console.log(tasks)
  }

  const removeTask = (task) => {
    setSelectedTask(prev => prev.filter(savedTask => savedTask !== task))
    DB.saveTasks(tasks)
    console.log(tasks)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Pomodoro Task Scheduler
        </h1>
      </header>

      <Timer/>

      <div className='task-choice'>
        <h2>{selectedTask}</h2>
        <RandomButton onClick={selectTask}/>
      </div>

      <div>
        <TaskTable/>
      </div>
    </div>
  );
}

export default App;
