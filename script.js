var task_name = document.getElementById('text_input').value;

function CreateTask(input) {
    const newli = document.createElement("li");                                 //Create li element
    newli.textContent = input;                                                  //Add task name in li
    const list = document.getElementById("bullet_list");                        //Get list element
    list.appendChild(newli);                                                    //Add line in list
}

document.getElementById('button_input').addEventListener('click', () => {
    const task_name = document.getElementById('text_input').value;             // get the value from the input field
    if(task_name.trim() !== "") {                                              // check if the input is not empty
        CreateTask(task_name);                                                 // create a new task
        document.getElementById('text_input').value = "";                      // clear the input field after adding
    }
});
