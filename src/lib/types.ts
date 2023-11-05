export enum GameState {
    Menu,
    GameStart,
    GameOver
}

export type Tile = {
    selected: boolean,
    hasMine: boolean
}
