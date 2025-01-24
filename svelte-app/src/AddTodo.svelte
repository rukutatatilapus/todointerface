<script>
    export let newTodo;
    export let addTodo;
</script>

<div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
    <div style="display: flex; justify-content: center; margin-top: 1rem; width: 300px; height: 100px; padding: 10px;">
        <input type="text" bind:value={newTodo} placeholder="Add new todo..." />
        <button on:click={addTodo}>Add</button>
    </div>
</div>

<style>
    /* Add any specific styles for AddTodo here */
</style>
