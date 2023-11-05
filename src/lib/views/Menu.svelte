<script lang="ts">
    import { GameStore } from "../GameStore";
    import { GameState } from "../types";

    const handleStart = (e: Event) => {
        GameStore.update((store) => {
            //@ts-expect-error
            return {...store, gameState: GameState.GameStart, players: e.target?.players.value }
        });
    }
</script>

<div class="menu-page">
    <h1>Minegames</h1>
    <menu>
        <form on:submit|preventDefault={handleStart}>
            <button on:click={handleStart}>Start</button>
            <label for="">1</label>
            <input type="radio" name="players" value={1}>
            <label for="">2</label>
            <input type="radio" name="players" value={2}>
            <label for="">3</label>
            <input type="radio" name="players" value={3}>
            <label for="">4</label>
            <input type="radio" name="players" value={4}>
        </form>
    </menu>
</div>
