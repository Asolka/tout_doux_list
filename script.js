var task_name = document.getElementById('text_input').value;

    //Function to create a new list item
function CreateListItem(input) {
    const newli = document.createElement("li");                                 //Create li element
    newli.textContent = input;                                                  //Add task name in li
    const list = document.getElementById("bullet_list");                        //Get list element
    list.appendChild(newli);                                                    //Add line in list
}

    //Function to handle task creation
function CreateTask() {
    const task_name = document.getElementById('text_input').value;             // Get the value from the input field
    if(task_name.trim() !== "") {                                              // Check if the input is not empty
        CreateListItem(task_name);                                             // Create a new task
        document.getElementById('text_input').value = "";                      // Clear the input field after adding
    }
}

    //Button event listener
document.getElementById('button_input').addEventListener('click', () => {      // Listen for button click
    CreateTask();                                                              // Create a new task
});

    //Input field event listener for Enter key
document.getElementById('text_input').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {                                               // Check if the pressed key is Enter
        CreateTask();                                                          // Create a new task
    }
});