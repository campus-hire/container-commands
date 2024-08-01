document.addEventListener("DOMContentLoaded", function () {
  loadTodos();
});

function loadTodos() {
  const todoList = document.getElementById("todoList");
  todoList.innerHTML = "";

  // Retrieve todos from local storage
  const todos = JSON.parse(localStorage.getItem("todos")) || [];

  todos.forEach(function (todo) {
    addTodoToDOM(todo);
  });
}

function addTodo() {
  const todoInput = document.getElementById("todoInput");
  const todoText = todoInput.value.trim();

  if (todoText === "") {
    alert("Please enter a valid todo!");
    return;
  }

  // Retrieve existing todos from local storage
  const todos = JSON.parse(localStorage.getItem("todos")) || [];

  // Add the new todo
  todos.push(todoText);

  // Save the updated todos to local storage
  localStorage.setItem("todos", JSON.stringify(todos));

  // Clear the input field
  todoInput.value = "";

  // Reload todos
  loadTodos();
}

function addTodoToDOM(todo) {
  const todoList = document.getElementById("todoList");
  const todoItem = document.createElement("li");
  todoItem.textContent = todo;
  todoList.appendChild(todoItem);
}
