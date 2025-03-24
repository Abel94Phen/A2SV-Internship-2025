import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

type TaskStatus = 'Not Started' | 'In-progress' | 'Completed';

interface Task {
    id: number;
    name: string;
    status: TaskStatus;
}

let tasks: Task[] = [
    { id: 1, name: 'Task 1', status: 'Not Started' },
    { id: 2, name: 'Task 2', status: 'In-progress' },
    { id: 3, name: 'Task 3', status: 'Completed' }
];

function DisplayAction() {
    console.log("Main Menu");
    console.log("1. See All Tasks");
    console.log("2. Add a new Task");
    console.log("3. Update a task");
    console.log("4. Delete a Task");
    console.log("5. Exit");
}

function GetChoice(): Promise<number> {
    return new Promise((resolve) => {
        rl.question('Enter your choice: ', (answer) => {
            resolve(parseInt(answer));
        });
    });
}

// Define the Display Tasks function. Make sure it is aesthetically pleasing to look
function DisplayTasks(): void {
    console.log("\nTasks List:");
    console.log("--------------------------------------------------");
    tasks.forEach(task => {
        console.log(`ID: ${task.id}`);
        console.log(`Name: ${task.name}`);
        console.log(`Status: ${task.status}`);
        console.log("--------------------------------------------------");
    });
    console.log("\n");
}

// Define the Add New Task function
function AddNewTask(): Promise<void> {
    return new Promise((resolve) => {
        rl.question('Enter task name: ', (name) => {
            const newTask: Task = {
                id: tasks.length + 1,
                name: name,
                status: 'Not Started'
            };
            tasks.push(newTask);
            console.log('Task added successfully.');
            resolve();
        });
    });
}

// Define the Update Task Function
function UpdateTask(): Promise<void> {
    return new Promise((resolve) => {
        rl.question('Enter task ID to update: ', (id) => {
            const taskId = parseInt(id);
            const task = tasks.find(t => t.id === taskId);
            if (task) {
                rl.question('Enter new status (Not Started, In-progress, Completed): ', (status) => {
                    if (status === 'Not Started' || status === 'In-progress' || status === 'Completed') {
                        task.status = status as TaskStatus;
                        console.log('Task updated successfully.');
                    } else {
                        console.log('Invalid status.');
                    }
                    resolve();
                });
            } else {
                console.log('Task not found.');
                resolve();
            }
        });
    });
}

// Define the Delete Task Function
function DeleteTask(): Promise<void> {
    return new Promise((resolve) => {
        rl.question('Enter task ID to delete: ', (id) => {
            const taskId = parseInt(id);
            const taskIndex = tasks.findIndex(t => t.id === taskId);
            if (taskIndex !== -1) {
                tasks.splice(taskIndex, 1);
                console.log('Task deleted successfully.');
            } else {
                console.log('Task not found.');
            }
            resolve();
        });
    });
}

// Define the Exit Function
function Exit(): void {
    console.log('Exiting...');
    rl.close();
}

async function main() {
    while (true) {
        DisplayAction();
        const choice = await GetChoice();
        switch (choice) {
            case 1:
                console.log("Diplaying all Tasks ...");
                console.log("=======================");
                await DisplayTasks();
                break;
            case 2:
                await AddNewTask();
                break;
            case 3:
                await UpdateTask();
                break;
            case 4:
                await DeleteTask();
                break;
            case 5:
                Exit();
                return;
            default:
                console.log("Invalid choice, please try again.");
        }
    }
}

main();