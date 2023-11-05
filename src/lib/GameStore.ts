import { writable } from "svelte/store";
import { GameState } from "./types";

export const GameStore = writable({
    gameState: GameState.Menu,
    numMines: 1,
    gridSize: 3
})
