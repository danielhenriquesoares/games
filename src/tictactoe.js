import {SwordGames} from './swordgames';

export class TicTacToe extends SwordGames {
    constructor(boardSize = 3) {
        super();
        this.boardSize = boardSize;
    }

    onInit() {
        this.winningConditions = Array.from({
            length: (this.boardSize * 2) + 2
        }, () => (new Array(this.boardSize)));

        this.boardStatus = new Array(this.boardSize * this.boardSize).fill('');

        this.buildRows();
        this.buildCols();
        this.buildLtrDiag();
        this.buildRtrDiag();

        this.buildBoard();

        this.setEventListeners();

        super.highlightSelectedPlayer(true);
    }

    buildRows() {
        let rowAccumulator = -1;
        for (let row = 0; row < this.boardSize; row++) {
            for (let i = 0; i < this.boardSize; i++) {
                ++rowAccumulator;
                this.winningConditions[row][i] = rowAccumulator;
            }
        }
    }

    buildCols() {
        let colAccumulator = -1,
            winningConditionsLength = this.winningConditions.length;
        for (let i = 0; i < this.boardSize; i++) {
            for (let col = this.boardSize; col <= winningConditionsLength - 3; col++) {
                ++colAccumulator;
                this.winningConditions[col][i] = colAccumulator;
            }
        }
    }

    buildLtrDiag() {
        let winningConditionsLength = this.winningConditions.length;
        for (let i = 0; i < this.boardSize; i++) {
            this.winningConditions[winningConditionsLength - 2][i] = i * (this.boardSize + 1);
        }
    }

    buildRtrDiag() {
        let a = this.boardSize - 1,
            winningConditionsLength = this.winningConditions.length;
	    for (let i = 0; i < this.boardSize; i++) {
  	        this.winningConditions[winningConditionsLength - 1][i] = (i * a) + a;
        }
    }

    buildBoard() {
        let boardContainer = document.querySelector('#board'),
            board = '',
            counter = -1;

        for (let i = 0; i < this.boardSize; i++) {
            board += '<div class="flex-container">';
            for(let j = 0; j < this.boardSize; j++) {
                ++counter;
                board += `<div class="flex-item" data-cell-id="${counter}"></div>`;
            }
            board += '</div>';
        }
        boardContainer.innerHTML = board;
    }

    setEventListeners() {
        let boardCells = document.querySelectorAll('.flex-item'),
            boardCellsLength = boardCells.length;

        for (let i = 0; i < boardCellsLength; i++) {
            boardCells[i].addEventListener('click', this.onCellClicked.bind(this));
        }
    }

    /**
     * Manage board cell clicks. If cell already clicked dont allow a move on that cell
     * @param {object} ev 
     * @returns 
     */
    onCellClicked(ev) {
        try {
            let clickedCell = +ev.target.dataset.cellId;
            console.debug('on cell clicked', this.dataset);

            // ckeck if cell is available
            if (this.boardStatus[clickedCell] !== '') {
                return;
            }

            this.cellPlayedHandler(ev.target, clickedCell);
        } catch(e) {
            console.error(e);
        }
    }

    /**
     * 
     * @param {object} cell 
     * @param {number} cellIndex 
     */
    cellPlayedHandler(cell = null, cellIndex = -1) {
        if (!cell || cellIndex === -1) {
            throw('InvalidCellException');
        }

        cell.classList.add(this.player === '1' ? 'player1' : 'player2');
        this.boardStatus[cellIndex] = this.player;
        this.checkWin();
    }

    checkWin() {

        let victory = false,
            draw = false,
            winningConditionsLength = this.winningConditions.length,
            winningCondition = null;

        for (let i = 0; i < winningConditionsLength; i++) {
            winningCondition = this.winningConditions[i];

            let test = [];

            for (let j = 0; j < this.boardSize; j++) {
                test.push(this.boardStatus[winningCondition[j]]);
            }

            if (test.some(elem => {return elem === '';})) {
                continue;
            }

            if (test.every(elem => elem === test[0])) {
                victory = true;
                break;
            }

            /* 
            let cell1 = this.boardStatus[winningCondition[0]],
                        cell2 = this.boardStatus[winningCondition[1]],
                        cell3 = this.boardStatus[winningCondition[2]];

                    if (cell1 === '' || cell2 === '' || cell3 === '') {
                        continue;
                    }

                    if (cell1 === cell2 && cell2 === cell3) {
                        victory = true;
                        break;
                    }
             */
        }
        
        if (victory) {
            // highlight line
            for (let i = 0; i < this.boardSize; i++) {
                let cellId = winningCondition[i],
                    boardCell = document.querySelector(`[data-cell-id="${cellId}"]`);
                
                boardCell.classList.add(`player${this.player}Win`, 'winning-cell');
                boardCell.classList.remove(`player${this.player}`);

                setTimeout(() => {
                    this.restartGame();
                }, 4000);
            }


            this.roundWinsByPlayer['player'+this.player] += 1;
            // update player count
            this.updatePlayerCount();


            // first player to get 5 rounds is the winner
            this.restartGame();

            if (this.roundWinsByPlayer.player1 === 5 || this.roundWinsByPlayer.player2 === 5) {
                // reset everything
                // display congrats message and scroll to next section
            }

            return;
        }

        // arriving here no victory found. it is a draw if all cells are filled
        draw = !this.boardStatus.includes('');
        if (draw) {
            // clear board and start again
            this.restartGame();
            return;
        }

        this.managePlayerChange();
    }

    managePlayerChange() {
        this.player = this.player === '1' ? '2' : '1';
        super.highlightSelectedPlayer();
    }
}
