# HNG Stage 1A - Advanced Todo Item Card

## Description

This project is an advanced, interactive Todo Item Card built using HTML, CSS, and JavaScript. It extends the Stage 0 implementation by adding stateful behavior, editing functionality, and richer user interactions.

---

## Features

### Stage 0 Features

* Semantic HTML structure
* data-testid attributes for testing
* Dynamic time remaining calculation
* Interactive checkbox (status toggle)
* Basic edit and delete functionality

### Stage 1A Features

* Edit mode with form (prefill, save, cancel)
* Status control (Pending, In Progress, Done)
* Checkbox and status synchronization
* Priority editing with visual indicator
* Expand/collapse description
* Improved time handling (days, hours, minutes)
* Overdue indicator with visual styling
* Visual states (Done, In Progress, Overdue)

---

## How to Run

Open `index.html` in your browser

---

## Decisions

* Used `<article>` for accessibility
* Used `setInterval` for live time updates
* Introduced a JavaScript state object (`todo`) to manage UI updates
* Used a `render()` function to keep UI and state synchronized
* Preserved all required `data-testid` attributes from Stage 0

---

## Trade-offs

* No backend (data is not persisted)
* Only supports a single todo card
* Limited form validation

---

## Accessibility Notes

* Semantic HTML elements used (article, time, buttons)
* Interactive elements are keyboard accessible
* Expand/collapse and buttons are usable via keyboard

---
## Live Demo

https://chizaram-julius.github.io/hng-stage-0-todo-item-card/

---

## GitHub Repository

https://github.com/chizaram-julius/hng-stage-0-todo-item-card

