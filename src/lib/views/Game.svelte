<script lang="ts">
    import { GameStore } from "../GameStore";
    import Grid from "../components/Grid.svelte";
    import { GameState } from "../types";

    const handleSelect = (e: CustomEvent) => {
        let result: GameState
        if (e.detail.mine) {
            setTimeout(() => {
                result = GameState.GameOver
                GameStore.update(store => {
                    return {...store, gameState: result}
                })
            }, 2000)
        } else if (e.detail.complete) {
            setTimeout(() => {
                result = GameState.GameWon
                GameStore.update(store => {
                    return {...store, gameState: result}
                })
            }, 2000)
        }
    }
</script>

<Grid rows={3} columns={3} on:select={handleSelect}/>
