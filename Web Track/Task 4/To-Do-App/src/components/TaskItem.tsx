import React, { useState } from 'react';
import { Task } from '../types/task';

interface TaskItemProps {
    task: Task;
    editTask: (id: number, newTitle: string) => void;
    deleteTask: (id: number) => void;
    toggleTaskCompletion: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, editTask, deleteTask, toggleTaskCompletion }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(task.title);

    const handleEdit = () => {
        if (isEditing && newTitle.trim()) {
            editTask(task.id, newTitle);
        }
        setIsEditing(!isEditing);
    };

    return (
        <li>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
            />
            {isEditing ? (
                <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                />
            ) : (
                <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                    {task.title}
                </span>
            )}
            <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
    );
};

export default TaskItem;