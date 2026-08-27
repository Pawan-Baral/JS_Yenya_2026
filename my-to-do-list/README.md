# My To‑Do List

A small, focused to‑do list application built with React and Vite.

This folder contains the UI for a lightweight productivity app that lets you add, edit, mark complete, and remove tasks. The app is intended as a simple example project and as a starter for adding features such as persistence, syncing, or integrations.

## Key features

- Add new tasks quickly
- Edit task text inline
- Mark tasks complete / incomplete
- Delete tasks
- Filter tasks (All / Active / Completed)
- Persist tasks using localStorage (no backend required)
- Responsive layout for mobile and desktop
- Keyboard‑friendly interactions (Enter to add, Esc to cancel edit)

## Tech stack

- React (functional components + hooks)
- Vite (fast dev server and build)
- JavaScript (ESNext)
- Optional ESLint / Prettier configuration (if included in the repo)

## Quick start

Prerequisites: Node.js 16+ and npm or Yarn installed.

1. Install dependencies

   ```bash
   npm install
   # or
   yarn
   ```

2. Start the development server

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open http://localhost:5173 (or the URL printed by Vite) to view the app.

3. Build for production

   ```bash
   npm run build
   # or
   yarn build
   ```

4. Preview the production build

   ```bash
   npm run preview
   # or
   yarn preview
   ```

## Usage

- Type a task in the input and press Enter (or click Add) to create a task.
- Click a task's checkbox (or the item) to toggle completion.
- Click the edit icon (or double‑click the task text) to modify a task; press Enter to save or Esc to cancel.
- Use the filter buttons to switch between All, Active, and Completed tasks.
- Click the trash icon to delete a task.

## Project structure (my-to-do-list)

- index.html — Vite entry
- src/
  - main.jsx — app bootstrap
  - App.jsx — top level component, routing (if any), and layout
  - components/ — TaskList, TaskItem, TaskForm, Filters, etc.
  - styles/ — app CSS
- public/ — static assets (optional)

(Adjust the structure above if your files are organized differently.)

## Persistence

The app stores tasks in the browser's localStorage by default. To clear tasks, use the app's UI or clear the site data in your browser.

## Accessibility

The app uses native form controls where possible and aims to be keyboard friendly. If you add more features, please keep accessibility considerations in mind (aria attributes, focus management, color contrast).

## Customization ideas

- Add due dates and sorting
- Add categories or tags
- Sync tasks to a backend or cloud storage
- Add drag & drop ordering
- Add mobile‑only UI improvements and PWA support

## Contributing

Contributions are welcome — open an issue or submit a PR with a clear description of the change. Keep changes small and focused, and include tests where applicable.

## License

Add your project's license here (e.g., MIT). If you don't have one yet, consider adding a LICENSE file at the repository root.

---

If you'd like, I can tailor this README further with exact commands and file paths based on your project's package.json and src layout — I can read those files and update the README with exact scripts and structure. 