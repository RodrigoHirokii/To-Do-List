const newTaskInput = document.querySelector(".new-task-input");
const newTaskBtn = document.querySelector(".new-task-button");

const tasksContainer = document.querySelector(".tasks-container");
const validateInput = () => {
  return newTaskInput.value.trim().length > 0;
};

const handleAddTask = () => {
  const inputIsValid = validateInput();

  if (!inputIsValid) {
    return newTaskInput.classList.add("error");
  }

  const taskItemContainer = document.createElement("div");
  taskItemContainer.classList.add("task-item");

  const textContent = document.createElement("p");
  textContent.innerText = newTaskInput.value;

  textContent.addEventListener("click", () => handleClick(textContent));

  const deleteItem = document.createElement("i");
  deleteItem.classList.add("fa-solid");
  deleteItem.classList.add("fa-trash");

  deleteItem.addEventListener("click", () =>
    handleDeleteItem(taskItemContainer, textContent)
  );

  taskItemContainer.appendChild(textContent);
  taskItemContainer.appendChild(deleteItem);

  tasksContainer.appendChild(taskItemContainer);
};

const handleClick = (textContent) => {
  const tasks = tasksContainer.childNodes;

  for (const task of tasks) {
    const currentTaskIsBeingClicked = task.firstChild.isSameNode(textContent);

    if (currentTaskIsBeingClicked) {
      task.firstChild.classList.toggle("completed");
    }
  }
};

const handleDeleteItem = (taskItemContainer, textContent) => {
  const tasks = tasksContainer.childNodes;

  // Verifica qual paragráfo está sendo clickado
  for (const task of tasks) {
    const currentTaskIsBeingClicked = task.firstChild.isSameNode(textContent);

    if (currentTaskIsBeingClicked) {
      taskItemContainer.remove();
    }
  }
};

const handleChangeInput = () => {
  const inputIsValid = validateInput();

  if (inputIsValid) {
    return newTaskInput.classList.remove("error");
  }
};

newTaskBtn.addEventListener("click", () => handleAddTask());
newTaskInput.addEventListener("change", () => handleChangeInput());
