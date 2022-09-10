export const SCREEN = {
   SETTINGS: 'settings',
   GAME: 'game',
   MODALRESTART: 'modal-restart',
};

export const AVAILABLE_TITLES = {
   TIE: 'ROUND TIED',
   TAKEROUND: 'TAKES THE ROUND',
   YOU: '(YOU)',
   CPU: '(CPU)',
   FIRSTPLAYER: '(P1)',
   SECONDPLAYER: '(P2)',
   WINNER: 'YOU WON!',
   LOSER: 'OH NO, YOU LOST...',
};

export const AVAILABLE_MARKS = {
   TIC: 'tic-big',
   TAC: 'tac-big',
};

export const OPPONENT_TYPE = {
   PLAYER: 'player',
   COMPUTER: 'computer',
};

export const AVAILABLE_WINNER_COMBINATIONS = [
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],

   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],

   [0, 4, 8],
   [2, 4, 6],
];
