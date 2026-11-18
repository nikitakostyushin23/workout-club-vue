# WORKOUT CLUB

A fitness web application built with Vue 3.

The project started as a frontend pet project and is now being developed into a full-stack application with a Laravel REST API.

## About

**WORKOUT CLUB** is a fitness platform concept with workout categories, trainers, cardio programs and subscription plans.

The main goal of the project is not only to build a working interface, but also to practice real-world application architecture and gradually move from a frontend-only application to a full-stack project.

## Features

- Responsive fitness website
- Home page with workout sections
- Workout categories
- Popular workouts
- Trainers section
- Cardio training page
- Animated workout statistics
- Workout timer
- Calorie counter
- Cardio distance animation
- Training plans and tariffs
- Subscription modal
- Client-side state management with Pinia
- Vue Router navigation

## Pages

### Home

The main page contains:

- Workout timer
- Workout promotion
- Popular workouts
- Trainers
- Workout categories

### Cardio

The cardio section contains:

- Animated distance counter
- Training statistics
- Training programs
- Subscription plans
- Subscription activation form

## Tech Stack

### Frontend

- Vue 3
- JavaScript
- Vue Router
- Pinia
- Vite
- CSS

### Backend

The backend is planned as the next stage of the project:

- Laravel
- PHP
- REST API
- MySQL / PostgreSQL
- Laravel Sanctum

The frontend and backend are planned as separate applications communicating through an HTTP API.

## Project Structure

```text
src/
├── assets/
│   └── css/
│       ├── variables.css
│       └── utilities.css
│
├── components/
│   ├── AppPromotion.vue
│   ├── CardioHero.vue
│   ├── CardioHome.vue
│   ├── CardioTariffs.vue
│   ├── MainHead.vue
│   ├── TheNav.vue
│   ├── OurTrainers.vue
│   ├── PopularWorkouts.vue
│   ├── TheFooter.vue
│   ├── TheHeader.vue
│   ├── TrainerCard.vue
│   └── WorkoutCategories.vue
│
├── router/
│   └── index.js
│
├── stores/
│   └── user.js
│
├── views/
│   ├── HomeView.vue
│   └── CardioView.vue
│
├── App.vue
└── main.js
```

## Architecture

The current frontend is structured around Vue components and views.

```text
Vue Application
│
├── Views
│   ├── HomeView
│   └── CardioView
│
├── Components
│   ├── Header / Navigation
│   ├── Workout sections
│   ├── Trainers
│   ├── Cardio sections
│   └── Footer
│
├── Router
│
├── Pinia Store
│
└── Global CSS
```

The planned full-stack architecture:

```text
Vue 3 Frontend
       │
       │ HTTP / JSON
       ▼
Laravel REST API
       │
       ├── Authentication
       ├── Users
       ├── Workouts
       ├── Trainers
       ├── Categories
       ├── Subscriptions
       └── Progress
       │
       ▼
Database
```

## State Management

Pinia is used for application state.

The current user store handles subscription-related state and user information.

As the backend is introduced, this client-side state will gradually be connected to the Laravel API.

## Styling

The project originally used SCSS.

The styling was later migrated to native CSS in order to simplify the project and focus on modern CSS capabilities.

Global CSS variables are stored in:

```text
src/assets/css/variables.css
```

Reusable utility classes are stored in:

```text
src/assets/css/utilities.css
```

## Development

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

### Format

```bash
npm run format
```

## Roadmap

The project is being developed step by step.

### Frontend

- [x] Vue 3 application
- [x] Vue Router
- [x] Pinia
- [x] Responsive layout
- [x] Workout pages
- [x] Trainer section
- [x] Cardio section
- [x] Subscription UI
- [x] Migration from TypeScript to JavaScript
- [x] Migration from SCSS to native CSS

### Backend

- [ ] Create Laravel backend
- [ ] Configure REST API
- [ ] Connect database
- [ ] Create users
- [ ] Authentication with Laravel Sanctum
- [ ] Workout API
- [ ] Trainer API
- [ ] Workout categories API
- [ ] Subscription system
- [ ] User profiles
- [ ] Favorites
- [ ] Workout history
- [ ] Progress tracking
- [ ] API validation
- [ ] API Resources
- [ ] Policies and authorization
- [ ] Tests

### Infrastructure

- [ ] Environment configuration
- [ ] Production deployment
- [ ] Docker
- [ ] CI/CD

## Learning Goals

This project is also a practical learning environment.

The main goals are:

- Improve JavaScript fundamentals
- Develop stronger Vue 3 skills
- Learn frontend architecture
- Learn Laravel and PHP
- Understand REST API architecture
- Work with relational databases
- Practice authentication and authorization
- Learn backend validation
- Work with ORM and SQL
- Write tests
- Understand frontend/backend communication
- Practice Git and GitHub workflows
- Gradually approach production-style application architecture

## Status

The frontend is currently functional and is being prepared for integration with a Laravel backend.

The project is actively evolving from a frontend pet project into a full-stack fitness application.

## License

This project is created for educational and portfolio purposes.
