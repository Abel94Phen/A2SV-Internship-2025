import React from 'react';
import { Task } from '../types/task';
import TaskItem from './TaskItem';

interface TaskListProps {
    tasks: Task[];
    editTask: (id: number, newTitle: string) => void;
    deleteTask: (id: number) => void;
    toggleTaskCompletion: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, editTask, deleteTask, toggleTaskCompletion }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    editTask={editTask}
                    deleteTask={deleteTask}
                    toggleTaskCompletion={toggleTaskCompletion}
                />
            ))}
        </ul>
    );
};

export default TaskList;