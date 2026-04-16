// STATE
let todo = {
  title: "Finish Frontend Task",
  description:
    "Build a testable todo item card component with semantic HTML, CSS, and Javascript.",
  status: "In Progress",
  priority: "High",
  dueDate: new Date("2026-04-17T23:59:00"),
};

// SELECT
const titleEl = document.querySelector('[data-testid="test-todo-title"]');
const descEl = document.querySelector('[data-testid="test-todo-description"]');
const statusEl = document.querySelector('[data-testid="test-todo-status"]');
const statusControl = document.querySelector(
  '[data-testid="test-todo-status-control"]',
);
const checkbox = document.querySelector(
  '[data-testid="test-todo-complete-toggle"]',
);
const indicator = document.querySelector(
  '[data-testid="test-todo-priority-indicator"]',
);
const priorityText = document.querySelector(
  '[data-testid="test-todo-priority"]',
);
const timeEl = document.getElementById("timeRemaining");
const overdueEl = document.querySelector(
  '[data-testid="test-todo-overdue-indicator"]',
);

// RENDER
function render() {
  titleEl.textContent = todo.title;
  descEl.textContent = todo.description;
  statusEl.textContent = todo.status;

  priorityText.textContent = todo.priority;
  priorityText.className = `priority ${todo.priority.toLowerCase()}`;

  indicator.className = `indicator ${todo.priority.toLowerCase()}`;

  checkbox.checked = todo.status === "Done";
  statusControl.value = todo.status;

  titleEl.classList.remove("done", "in-progress");

  if (todo.status === "Done") {
    titleEl.classList.add("done");
  } else if (todo.status === "In Progress") {
    titleEl.classList.add("in-progress");
  }
}

// TIME
function updateTime() {
  timeEl.classList.remove("overdue");

  if (todo.status === "Done") {
    timeEl.textContent = "Completed";
    return;
  }

  const now = new Date();
  const diff = todo.dueDate - now;

  let msg = "";

  if (diff > 0) {
    const mins = Math.floor(diff / 1000 / 60);
    const hrs = Math.floor(mins / 60);
    const days = Math.floor(hrs / 24);

    if (days > 0) msg = `Due in ${days} days`;
    else if (hrs > 0) msg = `Due in ${hrs} hours`;
    else msg = `Due in ${mins} minutes`;

    overdueEl.classList.add("hidden");
  } else {
    msg = `Overdue by ${Math.abs(Math.floor(diff / 1000 / 60 / 60))} hours`;
    overdueEl.classList.remove("hidden");
    timeEl.classList.add("overdue");
  }

  timeEl.textContent = msg;
}

setInterval(updateTime, 30000);

// CHECKBOX
checkbox.addEventListener("change", () => {
  todo.status = checkbox.checked ? "Done" : "Pending";
  render();
});

// STATUS CONTROL
statusControl.addEventListener("change", () => {
  todo.status = statusControl.value;
  render();
});

// EXPAND
const toggleBtn = document.querySelector(
  '[data-testid="test-todo-expand-toggle"]',
);
const section = document.querySelector(
  '[data-testid="test-todo-collapsible-section"]',
);

toggleBtn.addEventListener("click", () => {
  section.classList.toggle("collapsed");

  toggleBtn.textContent = section.classList.contains("collapsed")
    ? "Expand"
    : "Collapse";
});

// EDIT MODE
const form = document.querySelector('[data-testid="test-todo-edit-form"]');
const editBtn = document.querySelector('[data-testid="test-todo-edit-button"]');
const saveBtn = document.querySelector('[data-testid="test-todo-save-button"]');
const cancelBtn = document.querySelector(
  '[data-testid="test-todo-cancel-button"]',
);

editBtn.addEventListener("click", () => {
  form.classList.remove("hidden");

  document.querySelector('[data-testid="test-todo-edit-title-input"]').value =
    todo.title;
  document.querySelector(
    '[data-testid="test-todo-edit-description-input"]',
  ).value = todo.description;
  document.querySelector(
    '[data-testid="test-todo-edit-priority-select"]',
  ).value = todo.priority;
  document.querySelector(
    '[data-testid="test-todo-edit-due-date-input"]',
  ).value = todo.dueDate.toISOString().slice(0, 16);
});

saveBtn.addEventListener("click", () => {
  todo.title = document.querySelector(
    '[data-testid="test-todo-edit-title-input"]',
  ).value;
  todo.description = document.querySelector(
    '[data-testid="test-todo-edit-description-input"]',
  ).value;
  todo.priority = document.querySelector(
    '[data-testid="test-todo-edit-priority-select"]',
  ).value;
  todo.dueDate = new Date(
    document.querySelector('[data-testid="test-todo-edit-due-date-input"]')
      .value,
  );

  form.classList.add("hidden");
  render();
});

cancelBtn.addEventListener("click", () => {
  form.classList.add("hidden");
});

// DELETE
const deleteBtn = document.querySelector(
  '[data-testid="test-todo-delete-button"]',
);
const card = document.querySelector('[data-testid="test-todo-card"]');

deleteBtn.addEventListener("click", () => {
  card.remove();
});

// INIT
render();
updateTime();
