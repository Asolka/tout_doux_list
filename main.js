import { saveTasks, loadTasks } from "./storage.js";
import { renderTask } from "./dom.js";

let tasks = [];

// Load tasks from localStorage on page load
window.addEventListener("DOMContentLoaded", () => {
    tasks = loadTasks();
    tasks.forEach(task => renderTask(task, tasks));
});

// Create a new task
function createTask() {
    const input = document.getElementById('text_input');
    const text = input.value.trim();
    if (text === "") return;

    const newTask = {
        id: Date.now(),
        text: text,
        done: false
    };

    tasks.push(newTask);
    saveTasks(tasks);
    renderTask(newTask, tasks);

    input.value = "";
}

// Event listeners
document.getElementById('button_input').addEventListener('click', createTask);
document.getElementById('text_input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        createTask();
    }
});
