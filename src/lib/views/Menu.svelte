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
    <h4>How to Play:</h4>
    <p>Tap tiles to clear the grid while avoiding mines. The game ends when you hit a mine or clear the whole grid.</p>
        <form on:submit|preventDefault={handleStart}>
            <div class="options">
                <div class="field">
                    <label for="gridSize">Grid</label>
                    <input type="number" name="gridSize" min={2} max={7} bind:value={gridSize}>
                </div>
                <br>
                <div class="field">
                    <label for="mines">Mines</label>
                    <input type="number" name="mines" min={1} max={gridSize}  bind:value={numMines}>
                </div>
            </div>
            <button class="btn-dark">Start</button>
        </form>
</div>

<style>
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .options {
        display: flex;
        flex-direction: column;
        width: 90%;
        margin-bottom: 1rem;
    }
    .field {
        display: flex;
        align-items: center;
        gap: 5px;
        border: 1px solid black;
        border-radius: 8px;
        padding: 10px;
    }
    .field:focus-within {
        outline: 2px solid black;
    }
    button {
        text-align: center;
        font-size: 1.2rem;
        padding: 10px 1rem;
    }
    label {
        font-weight: 600;
    }
    input[type="number"] {
        border: 1px solid black;
        border-radius: 8px;
        padding: 10px;
        flex-grow: 2;
        border: none;
        outline: none;
    }
</style>
