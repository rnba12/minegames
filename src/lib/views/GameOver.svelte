<script lang="ts">
    import { GameStore } from "../GameStore";
    import { GameState } from "../types";

    const handleClick = (state: GameState) => {
        GameStore.update(store => {return {...store, gameState: state}})
    }
</script>

<div>
    {#if $GameStore.gameState === GameState.GameOver}
        You hit a mine!
    {:else if $GameStore.gameState === GameState.GameWon}
        You win!
    {/if}
</div>
<button on:click={() => handleClick(GameState.GameStart)}>Play Again</button>
<button on:click={() => handleClick(GameState.Menu)}>Menu</button>
