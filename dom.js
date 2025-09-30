import { saveTasks } from "./storage.js";

    // Render a single task in the DOM
export function renderTask(task, tasks) {
    const list = document.getElementById('bullet_list');
    const newli = document.createElement('li');
    newli.setAttribute('data-id', task.id);

    const taskText = document.createElement('span');
    taskText.textContent = task.text;
    newli.appendChild(taskText);

    if (task.done) {
        newli.classList.add('done');
    }

    // Done button
    const doneButton = document.createElement('button');
    doneButton.className = 'TaskButton';
    doneButton.innerHTML = "<img src='assets/Check.png' alt='Done'>";
    doneButton.addEventListener('click', () => {
        newli.classList.toggle('done');
        const id = parseInt(newli.getAttribute('data-id'));
        const taskObj = tasks.find(t => t.id === id);
        taskObj.done = newli.classList.contains('done');
        saveTasks(tasks);
    });
    newli.appendChild(doneButton);

    // Delete button
    const deleteButton = document.createElement('button');
    deleteButton.className = 'TaskButton';
    deleteButton.innerHTML = "<img src='assets/Trash.png' alt='Delete'>";
    deleteButton.addEventListener("click", () => {
        const id = parseInt(newli.getAttribute('data-id'));
        const index = tasks.findIndex(t => t.id === id);
        tasks.splice(index, 1);
        saveTasks(tasks);
        newli.remove();
    });
    newli.appendChild(deleteButton);

    list.appendChild(newli);
}
