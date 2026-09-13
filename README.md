# 🧱 Dev Stack Builder

A responsive React website for exploring development technologies and building a personal technology stack. The interface follows the supplied Dev Stack design while adding functional stack management, responsive navigation, loading feedback, and toast notifications.

## ✨ Technologies Used
- React.js
- Vite
- JavaScript (ES6+)
- CSS3
- JSON
- React-Toastify
- Lucide React

## 🚀 Features
1. **Technology Explorer** — loads 12 technologies from a JSON data file and presents them in responsive cards.
2. **Your Stack Builder** — add/remove technologies, prevent duplicate additions, and clear the complete stack.
3. **Responsive UI** — desktop, tablet, and mobile layouts with a mobile hamburger navigation.

## 📁 Project Structure
```text
src/
├── components/
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── StackSidebar.jsx
│   └── TechnologyCard.jsx
├── data/
│   └── technologies.json
├── main.jsx
└── styles.css
```

## ▶️ Run Locally
```bash
npm install
npm run dev
```

For a production build:
```bash
npm run build
```

## 🧠 React Questions

### 1. What is JSX, and why is it used in React?
JSX is a syntax that lets us write HTML-like UI inside JavaScript. React uses it to make component structure easier to read and maintain.

### 2. What is the difference between props and state?
Props are values passed from a parent component to a child and should be treated as read-only. State is data owned by a component that can change and cause the UI to update.

### 3. What does the `useState` hook do, and where did you use it in this project?
`useState` creates state variables and a function to update them. This project uses it for the loaded technology list, loading state, selected stack, and mobile menu state.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` runs side effects after rendering. It is used here to request the JSON data when the application first loads and then update the technology list.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
React uses the key to identify which list item changed, was added, or was removed. A stable unique key helps React update the DOM efficiently and correctly.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different UI depending on a condition. In the stack sidebar, an empty-stack message is shown when `stack.length === 0`; otherwise the selected technologies are displayed.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent passes data through props. A child can send information back by calling a callback function that the parent passed as a prop. For example, `TechnologyCard` receives `onAdd` and calls it when the user clicks **Add to Stack**.

## 📌 Submission
- GitHub Repository Link: _Add after publishing your repository_
- Live Site Link: _Add after deploying your site_
