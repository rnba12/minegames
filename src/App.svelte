<script lang="ts">
    import { GameState } from "./lib/types";
    import Menu from "./lib/views/Menu.svelte";
    import Game from "./lib/views/Game.svelte";
    import { GameStore } from "./lib/GameStore";
    import GameOver from "./lib/views/GameOver.svelte";
</script>

{#if $GameStore.gameState === GameState.Menu}
    <Menu/>
{:else if $GameStore.gameState === GameState.GameStart}
    <Game/>
{:else}
    <GameOver />
{/if}
