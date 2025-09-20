var task_name = document.getElementById('text_input').value;

    //Function to create a new list item
function CreateListItem(input) {
    const newli = document.createElement('li');                                 //Create li element
    const taskText = document.createElement('span');                            //Create span for task text
    taskText.textContent = input;                                               //Add task name in span
    newli.appendChild(taskText);                                                //Add span to li
    
    const list = document.getElementById('bullet_list');                        //Get list element
    list.appendChild(newli);                                                    //Add line in list
}

    //Function to create a delete button for each task
function DeleteTaskButton(li) {
    const deleteButton = document.createElement('button');                      // Create a delete button
    deleteButton.className = 'TaskButton';                                      // Add a class for styling
    deleteButton.innerHTML = "<img src='assets/Trash.png' alt='Delete'>";       // Set button image
    deleteButton.addEventListener("click", () => {                              // Add click event listener
        li.remove();                                                            // Remove the list item
    });
    li.appendChild(deleteButton);                                               // Append button to list item
}

    //Function to create a done button for each task
function DoneTaskButton(li) {
    const doneButton = document.createElement('button');                        // Create a done button
    doneButton.className = 'TaskButton';                                        // Add a class for styling
    doneButton.innerHTML = "<img src='assets/check.png' alt='Done'>";           // Set button image
    doneButton.addEventListener('click', () => {                                // Add click event listener
        li.classList.toggle('done');                                            // Toggle the 'done' class
    });
    li.appendChild(doneButton);                                                 // Append button to list item
}

    //Function to handle task creation
function CreateTask() {
    const task_name = document.getElementById('text_input').value;             // Get the value from the input field
    if(task_name.trim() !== '') {                                              // Check if the input is not empty
        CreateListItem(task_name);                                             // Create a new task
        document.getElementById('text_input').value = '';                      // Clear the input field after adding
    }
}

function NewTask() {
    CreateTask();                                                              // Create a new task
    DoneTaskButton(document.querySelector('#bullet_list li:last-child'));      // Add done button to the last task
    DeleteTaskButton(document.querySelector('#bullet_list li:last-child'));    // Add delete button to the last task
    
}

    //Button event listener
document.getElementById('button_input').addEventListener('click', NewTask)     // Listen for button click

    //Enter key event listener
document.getElementById('text_input').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {                                               // Check if the pressed key is Enter
        NewTask();                                                             // Create a new task
    }
});