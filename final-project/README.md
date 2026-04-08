# Portfolio React Application

A modern portfolio website built with React, Vite, and Docker.

## Project Structure

```
final-project/
├─ Dockerfile
├─ docker-compose.yml
├─ .dockerignore
├─ package.json
├─ vite.config.js
├─ index.html
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ App.css
│  ├─ index.css
│  └─ components/
│     ├─ Header.jsx
│     ├─ Header.css
│     ├─ Hero.jsx
│     ├─ Hero.css
│     ├─ MainContent.jsx
│     ├─ MainContent.css
│     ├─ Footer.jsx
│     └─ Footer.css
└─ originalPage/
   └─ index.html
```

## Running the Application

### With Docker Compose (Development)

```bash
docker compose up --build
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
docker build -t portfolio-react .
docker run -p 5173:5173 portfolio-react
```

## Technology Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Docker** - Containerization
- **CSS3** - Styling with responsive design

## Features

- Responsive design
- Component-based architecture
- Gradient backgrounds
- Interactive elements
- Semantic HTML structure
- Modern development workflow

## Original Page

The original static HTML version is available in the `originalPage/` folder for comparison.
