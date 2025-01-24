<script>
    import TodoItem from './TodoItem.svelte';

    export let todos;
    export let toggleCompleted;
    export let deleteTodo;
</script>

<ul>
    {#each todos as todo (todo.id)}
        <TodoItem 
            {todo} 
            {toggleCompleted} 
            {deleteTodo} 
        />
    {/each}
</ul>

<style>
    /* Add any specific styles for TodoList here */
</style>
