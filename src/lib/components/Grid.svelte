<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const dipatch = createEventDispatcher()
    import type { Tile } from "../types";

    export let rows: number;
    export let columns: number;
    const grid: Tile[] = Array(rows * columns)
    let numMines: number
    let numTiles: number
    let canSelect = true;

    const setMines = () => {
        // TODO Add more mines with grid size
        numMines = 1
        numTiles = grid.length - numMines
        for (let i = 0; i < numMines; i++) {
            grid[i].hasMine = true
        }
    }

    for (let i=0; i < grid.length; i++) {
        grid[i] = {selected: false, hasMine: false}
    }
    setMines();
    // Shuffle Tiles
    for (let i = grid.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [grid[i], grid[j]] = [grid[j], grid[i]];
    }


    const isGridComplete = () => {
        if (numTiles === 0) {
            return true
        }
        return false
    }

    const handleClick = (i: number) => {
        if (!grid[i].selected && canSelect) {
            if (grid[i].hasMine) {
                canSelect = false
            } else {
                numTiles -= 1
                if (isGridComplete()) {
                    canSelect = false
                }
            }
            grid[i].selected = true 
        }
        dipatch('select', {mine: grid[i].hasMine, complete: isGridComplete()})
    }

</script>

<div class="game-grid" style="--rows: {rows}; --columns: {columns}">
    {#each grid as tile, i}
        <div class="grid-item">
            <button
            disabled={!canSelect} 
            class:selected={tile.selected} 
            class:mine={tile.selected && tile.hasMine} on:click={() => handleClick(i)}></button>
        </div>
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
    .selected {
        background: blue;
    }
    .mine {
        background-color: red !important;
    }
</style>
