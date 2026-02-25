const taskInput = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addBtn');
const taskList = document.querySelector('#taskList');
const addTask = () => {
    const taskText = taskInput.value;
    if (taskText === "") return; // Don't add empty tasks

    const listItem = `
        <li>
            <span>${taskText}</span>
            <button class="delete-btn">Delete</button>
        </li>
    `;
    
    taskList.insertAdjacentHTML('beforeend', listItem);
    taskInput.value = ""; // Clear input
};

addBtn.addEventListener('click', addTask);