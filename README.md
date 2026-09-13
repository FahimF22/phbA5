# 🧱 Dev Stack Builder

A responsive React website that allows developers to explore modern technologies and build their own development stack.

## Technologies Used

- React.js
- Vite
- JavaScript ES6+
- CSS3
- JSON
- React Toastify
- Lucide React

## Features

### 1. Technology Explorer
Browse modern frontend, backend, database, language, styling, and DevOps technologies loaded from a JSON file.

### 2. Stack Builder
Add technologies to your personal stack, remove individual technologies, and clear the complete stack.

### 3. Responsive Design
The website works across desktop, tablet, and mobile devices with a responsive navigation menu.

## How to Run

```bash
npm install
npm run dev




React Questions
1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript. It makes React components easier to read and write.

2. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is data managed inside a component that can change over time.

3. What does useState do, and where did you use it?

useState creates and manages changing data in a React component. I used it for the technology list, selected stack, loading state, and mobile menu.

4. What does useEffect do, and why did you need it?

useEffect is used for side effects such as fetching data. I used it to load the technology data from the JSON file when the application starts.

5. Why does every item in a map list need a unique key?

React uses the key to identify each item in a list. It helps React efficiently determine which items have changed.

6. What is conditional rendering?

Conditional rendering means showing different UI depending on a condition. I used it to display either the empty stack message or the selected technologies.

7. How do you pass data between parent and child components?

A parent passes data to a child using props. A child can communicate back by calling a function passed by the parent as a prop.