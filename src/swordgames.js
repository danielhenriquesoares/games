export class SwordGames {
	constructor() {
		this.game = "tictactoe";
		this.player = '1';
		this.boardStatus = [];
		this.winningConditions = [];
		this.roundWinsByPlayer = {
            player1: 0,
            player2: 0
        };
		/* this.statistics = {

		} */
	}

	onInit() {
		throw('NotImplementedException');	
	}

	buildBoard() {
		throw('NotImplementedException');	
	}

	setEventListeners() {
		throw('NotImplementedException');	
	}

	onDestroy() {
		if (this.game === 'tictactoe') {
			let boardCells = document.querySelectorAll('.flex-item'),
				boardCellsLength = boardCells.length;

			for(let i = 0; i < boardCellsLength; i++) {
				boardCells[i].removeEventListener(this.onCellClicked);
			}
		}
	}

	highlightSelectedPlayer(isInitialization = false) {

		if (!isInitialization) {
			document.getElementById('player1').classList.toggle('current-player');
			document.getElementById('player2').classList.toggle('current-player');
			return;	
		}

		document.getElementById('player1').classList.add('current-player');
		document.getElementById('player2').classList.remove('current-player');
	}

	updatePlayerCount() {
		document.getElementById(`player${this.player}count`).innerText = this.roundWinsByPlayer[`player${this.player}`];
	}

	restartGame() {
        this.player = '1';
        this.boardStatus.fill('');

        let boardCells = document.querySelectorAll('.flex-item'),
            boardCellsLength = boardCells.length,
            appliedClasses = ['player1', 'player2', 'player1Win', 'player2Win', 'winning-cell'];

        for (let i = 0; i < boardCellsLength; i++) {
            boardCells[i].classList.remove(...appliedClasses);
        }
    }
}
