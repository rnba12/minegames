<script lang="ts">
    import { GameStore } from "../GameStore";
    import { GameState } from "../types";

    let numMines = $GameStore.numMines;
    let gridSize = $GameStore.gridSize;

    const handleStart = () => {
        GameStore.update((store) => {
            return {...store, gameState: GameState.GameStart, gridSize, numMines}
        });
    }
</script>

<div class="menu-page">
    <h1>Minegames</h1>
    <menu>
        <form on:submit|preventDefault={handleStart}>
            <button>Start</button>
            <input type="number" name="gridSize" min={2} bind:value={gridSize}>
            <input type="number" name="mines" min={1} max={gridSize}  bind:value={numMines}>
        </form>
    </menu>
</div>
