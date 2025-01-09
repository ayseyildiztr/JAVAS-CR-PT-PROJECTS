// Görev ekleme fonksiyonu
function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const taskList = document.getElementById("task-list");

    const li = document.createElement("li");
    li.innerHTML = `
        <input type="checkbox" onclick="toggleCompletion(this)">
        <span>${taskText}</span>
        <button onclick="deleteTask(this)">Sil</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
}

// Görev tamamlandı olarak işaretleme fonksiyonu
function toggleCompletion(checkbox) {
    const taskText = checkbox.nextElementSibling;
    taskText.classList.toggle("completed");
}

// Görev silme fonksiyonu
function deleteTask(button) {
    const task = button.parentElement;
    task.remove();
}
