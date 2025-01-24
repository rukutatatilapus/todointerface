<script>
	import Header from "./Header.svelte";
	import Button from "./Button.svelte";

	let todos = JSON.parse(localStorage.getItem('todos')) || [];
	let newTodo = '';

	function addTodo() {
	if (newTodo.trim() !== '') {
		todos = [...todos, {id: Date.now(), text: newTodo, completed: false}];
		newTodo = '';
	}
}

	function toggleCompleted(id) {
	todos = todos.map(todo => 
	todo.id === id ? { ...todo, completed: !todo.completed } : todo);
}

	function deleteTodo(id) {
		todos = todos.filter(todo => todo.id !== id);
	}

	$: localStorage.setItem('todos', JSON.stringify(todos));
</script>

<Header title="Welkom to todo app" />

<main>
	<h1>Greetings! {name}</h1>
</main>

<div>
	<input type="text" bind:value={newTodo} placeholder="Add new todo..."/>
	<button on:click={addTodo}>+</button>
</div>

<ul>
	{#each todos as todo (todo.id)}
		<li> {todo.text}</li>
			<input type="checkbox" checked={todo.completed} on:change={() => toggleCompleted(todo.id)}/>
			<button on:click={() => deleteTodo(todo.id)}>Delete</button>
	{/each}
</ul>

<style>
	main {
		text-align: center;
		padding: 2rem;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>