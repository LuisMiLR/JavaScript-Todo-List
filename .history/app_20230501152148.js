//SELECTEURS 
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//ECOUTEURS
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//FUNCTIONS
function addTodo(event) {
    event.preventDefault();
    //TODO DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //CREER LE LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //BOUTON CHECK  
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //BOUTON SUPPRIMER  
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //AJOUTER NOTRE TODO A TODO-LIST
    todoList.appendChild(todoDiv);
    todoInput.value = "";
}

function deleteCheck (e) {
    const item = e.target;
    //SUPRIME TODO
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        todo.classList.add("fall");
       // todo.remove();
    }
    //CHECKMARK
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}