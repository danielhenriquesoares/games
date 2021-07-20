export class SwordGames {
	constructor() {
		this.game = "tictactoe";
		this.player = '1';
		this.boardStatus = [];
		this.winningConditions = [];
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
}
