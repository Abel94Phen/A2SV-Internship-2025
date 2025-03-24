interface Task {
    id: number;
    task: string;
    status: string;
}

let taskList: Task[] = [
    {
        id: 1,
        task: 'This is the first task',
        status: 'In Progress'
    },
    {
        id: 2,
        task: 'This is the second task',
        status: 'Completed'
    },
    {
        id: 3,
        task: 'This is the third task',
        status: 'Not Started'
    }
];

function loadTask(task: Task): string {
    return `<div class="task-tile">
                <h3><strong>Task ID: </strong>${task.id}</h3>
                <p><strong>Task: </strong>${task.task}</p>
                <p><strong>Status: </strong>${task.status}</p>
            </div>`;
}

function loadAllTasks(tasks: Task[]): string {
    if (tasks.length === 0) {
        return `<p>No tasks to track</p>`;
    }
    return tasks.map(loadTask).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    const taskListDiv = document.getElementById('task-list') as HTMLElement;
    taskListDiv.innerHTML = loadAllTasks(taskList);
});

const addTaskForm = document.getElementById('task-form') as HTMLFormElement;
addTaskForm.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    const taskName = (document.getElementById('task-name') as HTMLInputElement).value;
    const taskStatus = (document.getElementById('task-status') as HTMLInputElement).value;

    if (taskName && taskStatus) {
        const newTask: Task = {
            id: taskList.length + 1,
            task: taskName,
            status: taskStatus
        };
        taskList.push(newTask);
        document.getElementById('task-list')!.innerHTML = loadAllTasks(taskList);
    }
});

const updateTaskForm = document.getElementById('update-task-form') as HTMLFormElement;
updateTaskForm.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    const updateTaskId = (document.getElementById('update-task-id') as HTMLInputElement).value;
    const updateTaskName = (document.getElementById('update-task-name') as HTMLInputElement).value;
    const updateTaskStatus = (document.getElementById('update-task-status') as HTMLInputElement).value;

    if (updateTaskId && updateTaskName && updateTaskStatus) {
        const taskId = parseInt(updateTaskId);
        const task = taskList.find(t => t.id === taskId);
        if (task) {
            task.task = updateTaskName;
            task.status = updateTaskStatus;
            document.getElementById('task-list')!.innerHTML = loadAllTasks(taskList);
        }
    }
});

const deleteTaskForm = document.getElementById('delete-task-form') as HTMLFormElement;
deleteTaskForm.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    const deleteTaskId = (document.getElementById('delete-task-id') as HTMLInputElement).value;

    if (deleteTaskId) {
        const taskId = parseInt(deleteTaskId);
        taskList = taskList.filter(t => t.id !== taskId);
        document.getElementById('task-list')!.innerHTML = loadAllTasks(taskList);
    }
});
