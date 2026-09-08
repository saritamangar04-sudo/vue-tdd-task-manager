## Vue.js Task Manager - TDD & Production Suite

A reactive single-page task management dashboard built with Vue 3 (Composition API), fully verified using Test-Driven Development (TDD) via Vitest, and configured for containerized deployment with Docker and GitHub Actions.

---

## 🛠️ Tech Stack & Environment Requirements
* **Framework:** Vue 3 (Composition API)
* **Testing Engine:** Vitest & Vue Test Utils
* **Runtime:** Node.js (v18.0+)
* **Containerization:** Docker (Nginx Alpine multi-stage)
* **CI/CD:** GitHub Actions Pipeline

---

## 🚀 Setup & Execution Instructions

### 1. Local Development Setup
```bash
# Install dependencies
npm install

# Run unit test suite
npm run test:unit

# Start local dev server
npm run dev
````
### 2.Docker Production Deployment
```bash
# Build Docker image
docker build -t vue-task-manager .

# Run container locally on port 8080
docker run -d -p 8080:80 vue-task-manager
````
