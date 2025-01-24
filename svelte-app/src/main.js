// import the App component
import App from './App.svelte';


const app = new App({
    target: document.body,
    props: {
        name: ':D' // 
    }
});

// Import Header and Button components
import Header from "./Header.svelte";
import Button from "./Button.svelte";

// Initialize todos from localStorage
let todos = JSON.parse(localStorage.getItem('todos')) || [];
let newTodo = '';

// function for adding a new todo
function addTodo() {
    if (newTodo.trim() !== '') {
        todos = [...todos, {id: Date.now(), text: newTodo, completed: false}];
        newTodo = '';
    }
}

// function to toggle completion status of a todo
function toggleCompleted(id) {
    todos = todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo);
}

// function to delete a todo
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
}

// update localStorage whenever todos change
$: localStorage.setItem('todos', JSON.stringify(todos));

export default app;
