<script lang="ts">
    export let rows: number;
    export let columns: number;


</script>

<div class="game-grid" style="--rows: {rows}; --columns: {columns}">
    {#each Array(rows * columns) as _}
        <div class="grid-item"><button>⬜</button></div>
    {/each}
</div>

<style>
    .game-grid {
        display: grid;
        width: fit-content;
        grid-template-columns: repeat(var(--columns), auto);
        grid-template-rows: repeat(var(--rows), auto);
    }
    .grid-item button {
        width: 100px;
        height: 100px;
    }
</style>
