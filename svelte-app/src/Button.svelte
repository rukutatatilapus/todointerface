<script>
    export let label = "click here"

    function handleClick() {
        alert("Button clicked :D");
    }
</script>

<style>
    button {
        background-color: #ff6600;
        border: none;
        color: white;
        padding: 0,5rem 1 rem;
        cursor: pointer;
    }
</style>

<button on:click={handleClick}>{label}</button>