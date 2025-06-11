const tareaInput = document.getElementById("tarea_input");
const botonAgregar = document.getElementById("agregarTarea");
const listaTarea = document.getElementById("tareaLista");

document.addEventListener("DOMContentLoaded", loadTasksFromLocalStorage);

botonAgregar.addEventListener("click", ()=>{
    const tareaText= tareaInput.value.trim();
    if(tareaText){
        addTaskToList(tareaText);
        saveTaskToLocalStorage(tareaText);
        tareaInput.value="";
    }
}
)
// Función para agregar tarea a la lista
function addTaskToList(tareaText, isCompleted = false) {
    const li = document.createElement('li');
    li.className = 'task-item';
    if (isCompleted) li.classList.add('completed');
  
    const span = document.createElement('span');
    span.textContent = tareaText;
  
    const completeButton = document.createElement('button');
    completeButton.textContent = '✓';
    completeButton.style.backgroundColor = '#4CAF50';
    completeButton.addEventListener('click', () => {
      li.classList.toggle('completed');
      updateTaskStatusInLocalStorage(tareaText);
    });
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', () => {
      listaTarea.removeChild(li);
      deleteTaskFromLocalStorage(tareaText);
    });
  
    li.appendChild(span);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    listaTarea.appendChild(li);
  }
// Almacenamiento local: Guardar tarea
function saveTaskToLocalStorage(tareaText) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({ text: tareaText, completed: false });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  // Almacenamiento local: Cargar tareas
  function loadTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach((task) => {
      addTaskToList(task.text, task.completed);
    });
  }
  // Almacenamiento local: Actualizar estado de tarea
function updateTaskStatusInLocalStorage(tareaText) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskIndex = tasks.findIndex((task) => task.text === tareaText);
    if (taskIndex !== -1) {
      tasks[taskIndex].completed = !tasks[taskIndex].completed;
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }
  
  // Almacenamiento local: Eliminar tarea
  function deleteTaskFromLocalStorage(tareaText) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = tasks.filter((task) => task.text !== tareaText);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }
  
  