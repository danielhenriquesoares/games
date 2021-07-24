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
		this.currentTimeSpent = 0;
		this.clockId = null;
		this.statistics = {
			totalGamesPlayed: 0,
			history: [],
			aggregatedTime: '00:00:00',
			player1Wins: 0,
			player2Wins: 0
		};
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
				boardCells[i].removeEventListener('click', this.onCellClicked);
			}
		}
	}

	highlightSelectedPlayer(isInitialization = false) {

		if (!isInitialization) {

			document.querySelectorAll(`[data-player="1"]`).forEach(element => {
				element.classList.toggle('current-player');
			});
	
			document.querySelectorAll(`[data-player="2"]`).forEach(element => {
				element.classList.toggle('current-player');
			});
			return;	
		}

		document.querySelectorAll(`[data-player="1"]`).forEach(element => {
			element.classList.add('current-player');
		});

		document.querySelectorAll(`[data-player="2"]`).forEach(element => {
			element.classList.remove('current-player');
		});
	}

	updatePlayerCount() {
		document.querySelectorAll(`[data-player-count-id="${this.player}"]`).forEach(element => {
			element.innerText = this.roundWinsByPlayer[`player${this.player}`];
		});
	}

	timeCounter() {
		let hours = Math.floor(this.currentTimeSpent / 3600),
			minutes = Math.floor((this.currentTimeSpent - (hours * 3600)) / 60),
			seconds = this.currentTimeSpent - (hours * 3600) - (minutes * 60);

		if (hours < 10) {
			hours = "0" + hours;
		}

		if (minutes < 10) {
			minutes = "0" + minutes;
		}

		if (seconds < 10) {
			seconds = "0" + seconds;
		}

		return hours + ":" + minutes + ":" + seconds;
	}

	clock() {
		this.clockId = setInterval(() => {
			document.querySelectorAll('[data-time-counter]').forEach(element => {
				element.innerText = this.timeCounter();
			});
		
			this.currentTimeSpent++;
		}, 1000);
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

		clearInterval(this.clockId);
    }

	triggerPopup(message = '') {
		let close = () => {
			console.debug('close click');
			let modal = document.getElementById('message');
			console.debug(close);
			document.getElementById('modal-close').removeEventListener('click', close);
			document.body.removeChild(modal);
		};

		let dialog = document.createElement('div');
		dialog.id = 'message';
		dialog.classList.add('modal');
		dialog.innerHTML = `
		<div class="modal-content">
			<div id="modal-close" class="close">&times;</div>
			<h1>Winner!!!</h1>
			<div class="body">
				Congrats ${message}!!!
			</div>
		</div>
		`;

		document.body.appendChild(dialog);
		setTimeout(() => {
			document.getElementById("modal-close").addEventListener('click', close);
		});
	}
}
