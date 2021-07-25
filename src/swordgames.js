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

		let savedStats = localStorage.getItem('stats');
		if (!savedStats) {
			localStorage.setItem('stats',JSON.stringify(this.statistics));
			return;
		}

		this.statistics = JSON.parse(savedStats);
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

	timeAccumulator(toAdd = '00:00:00') {

		if (/\d{2}:\d{2}:\d{2}/.test(toAdd)) {
			let time = ['00', '00', '00'],
  				addition = toAdd.split(':'),
				acc = this.statistics.aggregatedTime.split(':'),
				seconds = +addition[2] + (+acc[2]),
				minutes = +addition[1] + (+acc[1]),
				hours = +addition[0] + (+acc[0]);
      
      
			if (seconds >= 60) {
				let m = (seconds / 60) << 0;
				minutes += m;
				seconds -= 60 * m;
			}
      
			if (minutes >=60) {
				let h = (minutes / 60) << 0;
				hours += h;
				minutes -= 60 * h;
			}
      
			time[0] = hours < 10 ? '0' + hours : hours.toString();
			time[1] = minutes < 10 ? '0' + minutes : minutes.toString();
			time[2] = seconds < 10 ? '0' + seconds : seconds.toString();

			return time.join(':');
		}


		return this.statistics.aggregatedTime;
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

		this.highlightSelectedPlayer(true);
    }

	triggerPopup(message = '') {
		let close = () => {
			let modal = document.getElementById('message');
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

	updateStatistics(isInitialization = true) {
		if (this.statistics.totalGamesPlayed) {
			let player1Wins = Math.round(this.statistics.player1Wins/this.statistics.totalGamesPlayed * 100),
				player2Wins = Math.round(this.statistics.player2Wins/this.statistics.totalGamesPlayed * 100);


			document.getElementById('p1W').innerText = player1Wins + '%';
			document.getElementById('p1L').innerText = (100 - player1Wins) + '%';
			document.getElementById('p2W').innerText = player2Wins + '%';
			document.getElementById('p2L').innerText = (100 - player2Wins) + '%';

			for (let i = 0; i < this.statistics.totalGamesPlayed && i < 9; i++) {
				document.querySelector(`[data-played-matches="${i}"]`).classList.add('played');
				document.querySelector(`[data-game-history="${i}"]`).innerText = this.statistics.history[i];
			}

			if (this.statistics.totalGamesPlayed > 9) {
				document.getElementById('extra').innerText = '+ ' + (this.statistics.totalGamesPlayed - 9);
			}

			let aggregatedTime = document.getElementById('agreggated-time');
			isInitialization ? aggregatedTime.innerText = this.statistics.aggregatedTime : aggregatedTime.innerText = this.timeAccumulator(this.timeCounter());

		}
	}
}
