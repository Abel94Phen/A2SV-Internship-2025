import React, { useState } from 'react';
import { Task } from './types/Task';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

const App: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (title: string) => {
        const newTask: Task = {
            id: Date.now(),
            title,
            completed: false,
        };
        setTasks([...tasks, newTask]);
    };

    const editTask = (id: number, newTitle: string) => {
        setTasks(tasks.map(task => (task.id === id ? { ...task, title: newTitle } : task)));
    };

    const deleteTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toggleTaskCompletion = (id: number) => {
        setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <AddTask addTask={addTask} />
            <TaskList
                tasks={tasks}
                editTask={editTask}
                deleteTask={deleteTask}
                toggleTaskCompletion={toggleTaskCompletion}
            />
        </div>
    );
};

export default App;