//SELECTEURS 
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//ECOUTEURS
todoButton.addEventListener("click", addTodo);

//FUNCTIONS
function addTodo(event) {
    event.preventDefault();
    //TODO DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //CREER LE LI
    const newTodo = document.createElement("li");
    newTodo.innerText = "hey";
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //BOUTON CHECK  
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("completed-btn");
    todoDiv.appendChild(completedButton);
    //BOUTON CHECK  
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("completed-btn");
    todoDiv.appendChild(completedButton);
}