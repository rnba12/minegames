<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const dipatch = createEventDispatcher()
    import type { Tile } from "../types";

    export let dimensions: number;
    export let mines: number;
    const grid: Tile[] = Array(dimensions * dimensions)
    let numTiles: number
    let canSelect = true;

    const setMines = () => {
        // TODO Add more mines with grid size
        numTiles = grid.length - mines
        for (let i = 0; i < mines; i++) {
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


<div class="game-grid" style="--rows: {dimensions}; --columns: {dimensions}">
    {#each grid as tile, i}
        <div class="grid-item">
            <button
            disabled={!canSelect} 
            class:selected={tile.selected} 
            class:mine={tile.selected && tile.hasMine} on:click={() => handleClick(i)}></button>
        </div>
    {/each}
</div>
<div class="game-info">
    <div>Tiles Left: {numTiles}</div>
    <div>Mines: {mines}</div>
</div>

<style>
    .game-grid {
        display: grid;
        border: 1px solid black;
        width: 450px;
        height: 450px;
        grid-template-columns: repeat(var(--columns), auto);
        grid-template-rows: repeat(var(--rows), auto);
        margin-bottom: 1rem;
    }
    .grid-item button {
       width: 100%;
       height: 100%;
       border: 1px solid black;
       border-radius: 0;
       background: inherit;
       padding: 0;
    }
    .selected {
        background: blue !important;
    }
    .mine {
        background-color: red !important;
    }
    .game-info {
        width: 450px;
        font-size: 1.2rem;
        font-weight: 600;
    }

    @media only screen and (max-width: 600px) {
        .game-grid {
            width: calc(0.9 * 100vw);
            height: calc(0.9 * 100vw);
        }
        .game-info {
            width: calc(0.9 * 100vw);
        }
    }
</style>
