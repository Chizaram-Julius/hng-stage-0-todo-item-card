// ===== TIME REMAINING LOGIC =====
const dueDateElement = document.querySelector(
  '[data-testid="test-todo-due-date"]',
);
const timeRemainingElement = document.getElementById("timeRemaining");

const dueDate = new Date(dueDateElement.getAttribute("datetime"));

function updateTime() {
  const now = new Date();
  const diff = dueDate - now;

  const minutes = Math.floor(diff / 1000 / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  let message = "";

  if (diff > 0) {
    if (days > 0) {
      message = `Due in ${days} day(s)`;
    } else if (hours > 0) {
      message = `Due in ${hours} hour(s)`;
    } else {
      message = `Due in ${minutes} minute(s)`;
    }
  } else {
    message = `Overdue`;
  }

  timeRemainingElement.textContent = message;
}

updateTime();
setInterval(updateTime, 30000);

// ===== CHECKBOX INTERACTION (ADD HERE) =====
const checkbox = document.querySelector(
  '[data-testid="test-todo-complete-toggle"]',
);
const status = document.querySelector('[data-testid="test-todo-status"]');

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    status.textContent = "Completed";
  } else {
    status.textContent = "In Progress";
  }
});

const deleteBtn = document.querySelector(
  '[data-testid="test-todo-delete-button"]',
);
const card = document.querySelector('[data-testid="test-todo-card"]');

deleteBtn.addEventListener("click", () => {
  card.remove();
});

const editBtn = document.querySelector('[data-testid="test-todo-edit-button"]');
const title = document.querySelector('[data-testid="test-todo-title"]');

editBtn.addEventListener("click", () => {
  const newTitle = prompt("Edit task title:");

  if (newTitle) {
    title.textContent = newTitle;
  }
});
