import { TicTacToe } from "../tictactoe";

describe('Tictactoe testing', () => {
    let tictactoe = new TicTacToe(3);

    beforeEach(() => {
        document.body.innerHTML = '';
        document.body.innerHTML = '<div id="board"></div>';
        tictactoe.onInit();
    });

    test('winning conditions should (boardSize * 2) + 2', () => {
        expect(tictactoe.winningConditions.length).toBe(8);
    });

    test('board status should be boardSize * boardSize', () => {
        expect(tictactoe.boardStatus.length).toBe(9);
    });

    test('board status should be filled with empty strings after initialization', () => {
        let allEmpty = tictactoe.boardStatus.every(elem => {
            return elem === '';
        });

        expect(allEmpty).toBeTruthy();
    });

    test('dummy test', () => {
        expect(true).toBe(true);
    });
});
