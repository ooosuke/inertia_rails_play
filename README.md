# README

This is a Ruby on Rails application using [Inertia.js](https://inertiajs.com/) and [Vite](https://vitejs.dev/) for modern frontend development.

## ✨ Features

- Ruby on Rails (API backend)
- Inertia.js + React (or Vue) frontend
- Vite-based asset pipeline
- MySQL / PostgreSQL database
- Docker & Docker Compose support (optional)

---

## 🔧 Requirements

- Ruby 3.3.0
- Node.js (v18+ or v20+)
- Yarn (if using)
- MySQL / PostgreSQL
- Redis (if using Sidekiq or caching)
- Docker / Docker Compose (for development container)

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/ooosuke/inertia_rails_play.git
cd inertia_rails_play
```

### 2. Setup

```bash
docker componse build
```

### 3. Start app

```bash
docker compose up
```

## example

```bash
rails new . --skip-js --skip-asset-pipeline
bundle add inertia_rails
bin/rails generate inertia:install
```