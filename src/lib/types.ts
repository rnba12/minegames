export enum GameState {
    Menu,
    GameStart,
    GameOver,
    GameWon
}

export type Tile = {
    selected: boolean,
    hasMine: boolean
}
