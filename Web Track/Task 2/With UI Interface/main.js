var taskList = [
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
function loadTask(task) {
    return "<div class=\"task-tile\">\n                <h3><strong>Task ID: </strong>".concat(task.id, "</h3>\n                <p><strong>Task: </strong>").concat(task.task, "</p>\n                <p><strong>Status: </strong>").concat(task.status, "</p>\n            </div>");
}
function loadAllTasks(tasks) {
    if (tasks.length === 0) {
        return "<p>No tasks to track</p>";
    }
    return tasks.map(loadTask).join('');
}
document.addEventListener('DOMContentLoaded', function () {
    var taskListDiv = document.getElementById('task-list');
    taskListDiv.innerHTML = loadAllTasks(taskList);
});
var addTaskForm = document.getElementById('task-form');
addTaskForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var taskName = document.getElementById('task-name').value;
    var taskStatus = document.getElementById('task-status').value;
    if (taskName && taskStatus) {
        var newTask = {
            id: taskList.length + 1,
            task: taskName,
            status: taskStatus
        };
        taskList.push(newTask);
        document.getElementById('task-list').innerHTML = loadAllTasks(taskList);
    }
});
var updateTaskForm = document.getElementById('update-task-form');
updateTaskForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var updateTaskId = document.getElementById('update-task-id').value;
    var updateTaskName = document.getElementById('update-task-name').value;
    var updateTaskStatus = document.getElementById('update-task-status').value;
    if (updateTaskId && updateTaskName && updateTaskStatus) {
        var taskId_1 = parseInt(updateTaskId);
        var task = taskList.find(function (t) { return t.id === taskId_1; });
        if (task) {
            task.task = updateTaskName;
            task.status = updateTaskStatus;
            document.getElementById('task-list').innerHTML = loadAllTasks(taskList);
        }
    }
});
var deleteTaskForm = document.getElementById('delete-task-form');
deleteTaskForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var deleteTaskId = document.getElementById('delete-task-id').value;
    if (deleteTaskId) {
        var taskId_2 = parseInt(deleteTaskId);
        taskList = taskList.filter(function (t) { return t.id !== taskId_2; });
        document.getElementById('task-list').innerHTML = loadAllTasks(taskList);
    }
});
