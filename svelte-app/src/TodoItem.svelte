<script>
    export let todo;
    export let toggleCompleted;
    export let deleteTodo;
</script>

<li>
    <input type="checkbox" checked={todo.completed} on:change={() => toggleCompleted(todo.id)} />
    <span>{todo.text}</span>
    <button on:click={() => deleteTodo(todo.id)}>Delete</button>
</li>

<style>
    /* add any specific styles for TodoItem here */
</style>
