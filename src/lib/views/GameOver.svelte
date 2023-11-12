<script lang="ts">
    import { GameStore } from "../GameStore";
    import { GameState } from "../types";

    const handleClick = (state: GameState) => {
        GameStore.update(store => {return {...store, gameState: state}})
    }
</script>

<div class="game-over-page">
    <div class="message">
        {#if $GameStore.gameState === GameState.GameOver}
            You Hit A Mine!
        {:else if $GameStore.gameState === GameState.GameWon}
            You Win!
        {/if}
    </div>
    
    <div class="buttons">
        <button class="btn-dark" on:click={() => handleClick(GameState.GameStart)}>Play Again</button>
        <button class="btn-light" on:click={() => handleClick(GameState.Menu)}>Menu</button>
    </div>
</div>

<style>
    .game-over-page {
        margin-top: 8rem;
        width: 100%;
        text-align: center;
    }
    .message {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }
    .buttons {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1rem;
    }
    button {
        font-size: 1.2rem;
    }
</style>
