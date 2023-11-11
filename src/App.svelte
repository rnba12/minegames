<script lang="ts">
    import { GameState } from "./lib/types";
    import Menu from "./lib/views/Menu.svelte";
    import Game from "./lib/views/Game.svelte";
    import { GameStore } from "./lib/GameStore";
    import GameOver from "./lib/views/GameOver.svelte";
    import Header from "./lib/components/Header.svelte";
</script>

<header>
    <Header />
</header>
<main>
    {#if $GameStore.gameState === GameState.Menu}
    <Menu/>
    {:else if $GameStore.gameState === GameState.GameStart}
    <Game/>
    {:else}
    <GameOver />
    {/if}
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
    }
</style>
