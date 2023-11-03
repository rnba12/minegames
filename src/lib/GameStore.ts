import { writable } from "svelte/store";
import { GameState } from "./types";

export const GameStore = writable({
    gameState: GameState.Menu,
    players: 0
})
