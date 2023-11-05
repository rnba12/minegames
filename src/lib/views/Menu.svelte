<script lang="ts">
    import { GameStore } from "../GameStore";
    import { GameState } from "../types";

    const handleStart = () => {
        GameStore.update((store) => {
            return {...store, gameState: GameState.GameStart}
        });
    }
</script>

<div class="menu-page">
    <h1>Minegames</h1>
    <menu>
        <form on:submit|preventDefault={handleStart}>
            <button>Start</button>
        </form>
    </menu>
</div>
