/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tictactoe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tictactoe */ "./src/tictactoe.js");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sass/main.scss */ "./src/sass/main.scss");


/* import swordLogo from './img/SWORD_Health_logo.svg'; */

(function () {
  "use strict";

  console.debug("hello webpack");
  /* window.onscroll(ev => {
      let limit = 150;
        console.debug(document.documentElement.scrollTop);
  }); */

  window.addEventListener("scroll", function () {
    var limit = 150;

    if (document.documentElement.scrollTop > limit) {
      document.querySelector('header').style.opacity = 0;
    } else {
      document.querySelector('header').style.opacity = 1;
    }

    console.debug(document.documentElement.scrollTop);
  });
  var logo = document.getElementById('sword-logo'),
      facebook = document.getElementById('facebook'),
      twitter = document.getElementById('twitter'),
      instagram = document.getElementById('instagram'),
      send = document.getElementById('send');
  logo.src = './img/SWORD_Health_logo.svg';
  facebook.src = './img/facebook.svg';
  twitter.src = './img/twitter.svg';
  instagram.src = './img/instagram.svg';
  send.src = './img/send.svg';

  try {
    var ticTacToe = new _tictactoe__WEBPACK_IMPORTED_MODULE_0__.TicTacToe();
    ticTacToe.onInit();
  } catch (e) {
    console.error(e);
  }
}).call();

/***/ }),

/***/ "./src/swordgames.js":
/*!***************************!*\
  !*** ./src/swordgames.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwordGames": () => (/* binding */ SwordGames)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SwordGames = /*#__PURE__*/function () {
  function SwordGames() {
    _classCallCheck(this, SwordGames);

    this.game = "tictactoe";
    this.player = '1';
    this.boardStatus = [];
    this.winningConditions = [];
    /* this.statistics = {
    		} */
  }

  _createClass(SwordGames, [{
    key: "onInit",
    value: function onInit() {
      throw 'NotImplementedException';
    }
  }, {
    key: "buildBoard",
    value: function buildBoard() {
      throw 'NotImplementedException';
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      throw 'NotImplementedException';
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      if (this.game === 'tictactoe') {
        var boardCells = document.querySelectorAll('.flex-item'),
            boardCellsLength = boardCells.length;

        for (var i = 0; i < boardCellsLength; i++) {
          boardCells[i].removeEventListener(this.onCellClicked);
        }
      }
    }
  }]);

  return SwordGames;
}();

/***/ }),

/***/ "./src/tictactoe.js":
/*!**************************!*\
  !*** ./src/tictactoe.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicTacToe": () => (/* binding */ TicTacToe)
/* harmony export */ });
/* harmony import */ var _swordgames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./swordgames */ "./src/swordgames.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var TicTacToe = /*#__PURE__*/function (_SwordGames) {
  _inherits(TicTacToe, _SwordGames);

  var _super = _createSuper(TicTacToe);

  function TicTacToe() {
    var _this;

    var boardSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;

    _classCallCheck(this, TicTacToe);

    _this = _super.call(this);
    _this.boardSize = boardSize;
    _this.roundWinsByPlayer = {
      player1: 0,
      player2: 0
    };
    return _this;
  }

  _createClass(TicTacToe, [{
    key: "onInit",
    value: function onInit() {
      var _this2 = this;

      this.winningConditions = Array.from({
        length: this.boardSize * 2 + 2
      }, function () {
        return new Array(_this2.boardSize);
      });
      this.boardStatus = new Array(this.boardSize * this.boardSize).fill('');
      this.buildRows();
      this.buildCols();
      this.buildLtrDiag();
      this.buildRtrDiag();
      this.buildBoard();
      this.setEventListeners();
    }
  }, {
    key: "buildRows",
    value: function buildRows() {
      var rowAccumulator = -1;

      for (var row = 0; row < this.boardSize; row++) {
        for (var i = 0; i < this.boardSize; i++) {
          ++rowAccumulator;
          this.winningConditions[row][i] = rowAccumulator;
        }
      }
    }
  }, {
    key: "buildCols",
    value: function buildCols() {
      var colAccumulator = -1,
          winningConditionsLength = this.winningConditions.length;

      for (var i = 0; i < this.boardSize; i++) {
        for (var col = this.boardSize; col <= winningConditionsLength - 3; col++) {
          ++colAccumulator;
          this.winningConditions[col][i] = colAccumulator;
        }
      }
    }
  }, {
    key: "buildLtrDiag",
    value: function buildLtrDiag() {
      var winningConditionsLength = this.winningConditions.length;

      for (var i = 0; i < this.boardSize; i++) {
        this.winningConditions[winningConditionsLength - 2][i] = i * (this.boardSize + 1);
      }
    }
  }, {
    key: "buildRtrDiag",
    value: function buildRtrDiag() {
      var a = this.boardSize - 1,
          winningConditionsLength = this.winningConditions.length;

      for (var i = 0; i < this.boardSize; i++) {
        this.winningConditions[winningConditionsLength - 1][i] = i * a + a;
      }
    }
  }, {
    key: "buildBoard",
    value: function buildBoard() {
      var boardContainer = document.querySelector('#board'),
          board = '',
          counter = -1;

      for (var i = 0; i < this.boardSize; i++) {
        board += '<div class="flex-container">';

        for (var j = 0; j < this.boardSize; j++) {
          ++counter;
          board += "<div class=\"flex-item\" data-cell-id=\"".concat(counter, "\"></div>");
        }

        board += '</div>';
      }

      boardContainer.innerHTML = board;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var boardCells = document.querySelectorAll('.flex-item'),
          boardCellsLength = boardCells.length;

      for (var i = 0; i < boardCellsLength; i++) {
        boardCells[i].addEventListener('click', this.onCellClicked.bind(this));
      }
    }
    /**
     * Manage board cell clicks. If cell already clicked dont allow a move on that cell
     * @param {object} ev 
     * @returns 
     */

  }, {
    key: "onCellClicked",
    value: function onCellClicked(ev) {
      try {
        var clickedCell = +ev.target.dataset.cellId;
        console.debug('on cell clicked', this.dataset); // ckeck if cell is available

        if (this.boardStatus[clickedCell] !== '') {
          return;
        }

        this.cellPlayedHandler(ev.target, clickedCell);
      } catch (e) {
        console.error(e);
      }
    }
    /**
     * 
     * @param {object} cell 
     * @param {number} cellIndex 
     */

  }, {
    key: "cellPlayedHandler",
    value: function cellPlayedHandler() {
      var cell = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var cellIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

      if (!cell || cellIndex === -1) {
        throw 'InvalidCellException';
      }

      cell.classList.add(this.player === '1' ? 'player1' : 'player2');
      this.boardStatus[cellIndex] = this.player;
      this.checkWin();
    }
  }, {
    key: "checkWin",
    value: function checkWin() {
      var _this3 = this;

      var victory = false,
          draw = false,
          winningConditionsLength = this.winningConditions.length,
          winningCondition = null;

      for (var i = 0; i < winningConditionsLength; i++) {
        winningCondition = this.winningConditions[i];
        var cell1 = this.boardStatus[winningCondition[0]],
            cell2 = this.boardStatus[winningCondition[1]],
            cell3 = this.boardStatus[winningCondition[2]];

        if (cell1 === '' || cell2 === '' || cell3 === '') {
          continue;
        }

        if (cell1 === cell2 && cell2 === cell3) {
          victory = true;
          break;
        }
      }

      if (victory) {
        // highlight line
        for (var _i = 0; _i < this.boardSize; _i++) {
          var cellId = winningCondition[_i],
              boardCell = document.querySelector("[data-cell-id=\"".concat(cellId, "\"]"));
          boardCell.classList.add("player".concat(this.player, "Win"), 'winning-cell');
          boardCell.classList.remove("player".concat(this.player));
          setTimeout(function () {
            _this3.restartGame();
          }, 4000);
        }

        this.roundWinsByPlayer['player' + this.player] += 1; // first player to get 5 rounds is the winner

        if (this.roundWinsByPlayer.player1 === 5 || this.roundWinsByPlayer.player2 === 5) {// display congrats message and scroll to next section
        }

        return;
      } // arriving here no victory found. it is a draw if all cells are filled


      draw = !this.boardStatus.includes('');

      if (draw) {
        // clear board and start again
        this.restartGame();
        return;
      }

      this.managePlayerChange();
    }
  }, {
    key: "managePlayerChange",
    value: function managePlayerChange() {
      this.player = this.player === '1' ? '2' : '1';
    }
  }, {
    key: "restartGame",
    value: function restartGame() {
      this.player = '1';
      this.boardStatus.fill('');
      var boardCells = document.querySelectorAll('.flex-item'),
          boardCellsLength = boardCells.length,
          appliedClasses = ['player1', 'player2', 'player1Win', 'player2Win', 'winning-cell'];

      for (var i = 0; i < boardCellsLength; i++) {
        var _boardCells$i$classLi;

        (_boardCells$i$classLi = boardCells[i].classList).remove.apply(_boardCells$i$classLi, appliedClasses);
      }
    }
  }]);

  return TicTacToe;
}(_swordgames__WEBPACK_IMPORTED_MODULE_0__.SwordGames);

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/sass/main.scss");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zd29yZGdhbWVzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3N3b3JkZ2FtZXMvLi9zcmMvc3dvcmRnYW1lcy5qcyIsIndlYnBhY2s6Ly9zd29yZGdhbWVzLy4vc3JjL3RpY3RhY3RvZS5qcyIsIndlYnBhY2s6Ly9zd29yZGdhbWVzLy4vc3JjL3Nhc3MvbWFpbi5zY3NzPzliMWUiLCJ3ZWJwYWNrOi8vc3dvcmRnYW1lcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zd29yZGdhbWVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zd29yZGdhbWVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3dvcmRnYW1lcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N3b3JkZ2FtZXMvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJkZWJ1ZyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJsaW1pdCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwib3BhY2l0eSIsImxvZ28iLCJnZXRFbGVtZW50QnlJZCIsImZhY2Vib29rIiwidHdpdHRlciIsImluc3RhZ3JhbSIsInNlbmQiLCJzcmMiLCJ0aWNUYWNUb2UiLCJUaWNUYWNUb2UiLCJvbkluaXQiLCJlIiwiZXJyb3IiLCJjYWxsIiwiU3dvcmRHYW1lcyIsImdhbWUiLCJwbGF5ZXIiLCJib2FyZFN0YXR1cyIsIndpbm5pbmdDb25kaXRpb25zIiwiYm9hcmRDZWxscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJib2FyZENlbGxzTGVuZ3RoIiwibGVuZ3RoIiwiaSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvbkNlbGxDbGlja2VkIiwiYm9hcmRTaXplIiwicm91bmRXaW5zQnlQbGF5ZXIiLCJwbGF5ZXIxIiwicGxheWVyMiIsIkFycmF5IiwiZnJvbSIsImZpbGwiLCJidWlsZFJvd3MiLCJidWlsZENvbHMiLCJidWlsZEx0ckRpYWciLCJidWlsZFJ0ckRpYWciLCJidWlsZEJvYXJkIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJyb3dBY2N1bXVsYXRvciIsInJvdyIsImNvbEFjY3VtdWxhdG9yIiwid2lubmluZ0NvbmRpdGlvbnNMZW5ndGgiLCJjb2wiLCJhIiwiYm9hcmRDb250YWluZXIiLCJib2FyZCIsImNvdW50ZXIiLCJqIiwiaW5uZXJIVE1MIiwiYmluZCIsImV2IiwiY2xpY2tlZENlbGwiLCJ0YXJnZXQiLCJkYXRhc2V0IiwiY2VsbElkIiwiY2VsbFBsYXllZEhhbmRsZXIiLCJjZWxsIiwiY2VsbEluZGV4IiwiY2xhc3NMaXN0IiwiYWRkIiwiY2hlY2tXaW4iLCJ2aWN0b3J5IiwiZHJhdyIsIndpbm5pbmdDb25kaXRpb24iLCJjZWxsMSIsImNlbGwyIiwiY2VsbDMiLCJib2FyZENlbGwiLCJyZW1vdmUiLCJzZXRUaW1lb3V0IiwicmVzdGFydEdhbWUiLCJpbmNsdWRlcyIsIm1hbmFnZVBsYXllckNoYW5nZSIsImFwcGxpZWRDbGFzc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLENBQUMsWUFBVztBQUNSOztBQUNBQSxTQUFPLENBQUNDLEtBQVIsQ0FBYyxlQUFkO0FBRUE7QUFDSjtBQUNBO0FBQ0E7O0FBRUlDLFFBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBTTtBQUNwQyxRQUFJQyxLQUFLLEdBQUcsR0FBWjs7QUFFQSxRQUFJQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFNBQXpCLEdBQXFDSCxLQUF6QyxFQUFnRDtBQUM1Q0MsY0FBUSxDQUFDRyxhQUFULENBQXVCLFFBQXZCLEVBQWlDQyxLQUFqQyxDQUF1Q0MsT0FBdkMsR0FBaUQsQ0FBakQ7QUFDSCxLQUZELE1BRU87QUFDSEws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LCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1VDTkE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RpY1RhY1RvZX0gZnJvbSAnLi90aWN0YWN0b2UnO1xyXG5pbXBvcnQgJy4vc2Fzcy9tYWluLnNjc3MnO1xyXG4vKiBpbXBvcnQgc3dvcmRMb2dvIGZyb20gJy4vaW1nL1NXT1JEX0hlYWx0aF9sb2dvLnN2Zyc7ICovXHJcblxyXG4oZnVuY3Rpb24oKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIGNvbnNvbGUuZGVidWcoXCJoZWxsbyB3ZWJwYWNrXCIpO1xyXG5cclxuICAgIC8qIHdpbmRvdy5vbnNjcm9sbChldiA9PiB7XHJcbiAgICAgICAgbGV0IGxpbWl0ID0gMTUwO1xyXG5cclxuICAgICAgICBjb25zb2xlLmRlYnVnKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApO1xyXG4gICAgfSk7ICovXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGxpbWl0ID0gMTUwO1xyXG5cclxuICAgICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA+IGxpbWl0KSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmRlYnVnKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IGxvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3dvcmQtbG9nbycpLFxyXG4gICAgICAgIGZhY2Vib29rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZhY2Vib29rJyksXHJcbiAgICAgICAgdHdpdHRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0d2l0dGVyJyksXHJcbiAgICAgICAgaW5zdGFncmFtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luc3RhZ3JhbScpLFxyXG4gICAgICAgIHNlbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VuZCcpO1xyXG5cclxuICAgIGxvZ28uc3JjID0gJy4vaW1nL1NXT1JEX0hlYWx0aF9sb2dvLnN2Zyc7XHJcbiAgICBmYWNlYm9vay5zcmMgPSAnLi9pbWcvZmFjZWJvb2suc3ZnJztcclxuICAgIHR3aXR0ZXIuc3JjID0gJy4vaW1nL3R3aXR0ZXIuc3ZnJztcclxuICAgIGluc3RhZ3JhbS5zcmMgPSAnLi9pbWcvaW5zdGFncmFtLnN2Zyc7XHJcbiAgICBzZW5kLnNyYyA9ICcuL2ltZy9zZW5kLnN2Zyc7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBsZXQgdGljVGFjVG9lID0gbmV3IFRpY1RhY1RvZSgpO1xyXG4gICAgICAgIHRpY1RhY1RvZS5vbkluaXQoKTtcclxuICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgICBcclxufSkuY2FsbCgpO1xyXG4iLCJleHBvcnQgY2xhc3MgU3dvcmRHYW1lcyB7XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmdhbWUgPSBcInRpY3RhY3RvZVwiO1xyXG5cdFx0dGhpcy5wbGF5ZXIgPSAnMSc7XHJcblx0XHR0aGlzLmJvYXJkU3RhdHVzID0gW107XHJcblx0XHR0aGlzLndpbm5pbmdDb25kaXRpb25zID0gW107XHJcblx0XHQvKiB0aGlzLnN0YXRpc3RpY3MgPSB7XHJcblxyXG5cdFx0fSAqL1xyXG5cdH1cclxuXHJcblx0b25Jbml0KCkge1xyXG5cdFx0dGhyb3coJ05vdEltcGxlbWVudGVkRXhjZXB0aW9uJyk7XHRcclxuXHR9XHJcblxyXG5cdGJ1aWxkQm9hcmQoKSB7XHJcblx0XHR0aHJvdygnTm90SW1wbGVtZW50ZWRFeGNlcHRpb24nKTtcdFxyXG5cdH1cclxuXHJcblx0c2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcblx0XHR0aHJvdygnTm90SW1wbGVtZW50ZWRFeGNlcHRpb24nKTtcdFxyXG5cdH1cclxuXHJcblx0b25EZXN0cm95KCkge1xyXG5cdFx0aWYgKHRoaXMuZ2FtZSA9PT0gJ3RpY3RhY3RvZScpIHtcclxuXHRcdFx0bGV0IGJvYXJkQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmxleC1pdGVtJyksXHJcblx0XHRcdFx0Ym9hcmRDZWxsc0xlbmd0aCA9IGJvYXJkQ2VsbHMubGVuZ3RoO1xyXG5cclxuXHRcdFx0Zm9yKGxldCBpID0gMDsgaSA8IGJvYXJkQ2VsbHNMZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGJvYXJkQ2VsbHNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm9uQ2VsbENsaWNrZWQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbiIsImltcG9ydCB7U3dvcmRHYW1lc30gZnJvbSAnLi9zd29yZGdhbWVzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWNUYWNUb2UgZXh0ZW5kcyBTd29yZEdhbWVzIHtcclxuICAgIGNvbnN0cnVjdG9yKGJvYXJkU2l6ZSA9IDMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuYm9hcmRTaXplID0gYm9hcmRTaXplO1xyXG4gICAgICAgIHRoaXMucm91bmRXaW5zQnlQbGF5ZXIgPSB7XHJcbiAgICAgICAgICAgIHBsYXllcjE6IDAsXHJcbiAgICAgICAgICAgIHBsYXllcjI6IDBcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLndpbm5pbmdDb25kaXRpb25zID0gQXJyYXkuZnJvbSh7XHJcbiAgICAgICAgICAgIGxlbmd0aDogKHRoaXMuYm9hcmRTaXplICogMikgKyAyXHJcbiAgICAgICAgfSwgKCkgPT4gKG5ldyBBcnJheSh0aGlzLmJvYXJkU2l6ZSkpKTtcclxuXHJcbiAgICAgICAgdGhpcy5ib2FyZFN0YXR1cyA9IG5ldyBBcnJheSh0aGlzLmJvYXJkU2l6ZSAqIHRoaXMuYm9hcmRTaXplKS5maWxsKCcnKTtcclxuXHJcbiAgICAgICAgdGhpcy5idWlsZFJvd3MoKTtcclxuICAgICAgICB0aGlzLmJ1aWxkQ29scygpO1xyXG4gICAgICAgIHRoaXMuYnVpbGRMdHJEaWFnKCk7XHJcbiAgICAgICAgdGhpcy5idWlsZFJ0ckRpYWcoKTtcclxuXHJcbiAgICAgICAgdGhpcy5idWlsZEJvYXJkKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkUm93cygpIHtcclxuICAgICAgICBsZXQgcm93QWNjdW11bGF0b3IgPSAtMTtcclxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLmJvYXJkU2l6ZTsgcm93KyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJvYXJkU2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICArK3Jvd0FjY3VtdWxhdG9yO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53aW5uaW5nQ29uZGl0aW9uc1tyb3ddW2ldID0gcm93QWNjdW11bGF0b3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRDb2xzKCkge1xyXG4gICAgICAgIGxldCBjb2xBY2N1bXVsYXRvciA9IC0xLFxyXG4gICAgICAgICAgICB3aW5uaW5nQ29uZGl0aW9uc0xlbmd0aCA9IHRoaXMud2lubmluZ0NvbmRpdGlvbnMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZFNpemU7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSB0aGlzLmJvYXJkU2l6ZTsgY29sIDw9IHdpbm5pbmdDb25kaXRpb25zTGVuZ3RoIC0gMzsgY29sKyspIHtcclxuICAgICAgICAgICAgICAgICsrY29sQWNjdW11bGF0b3I7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndpbm5pbmdDb25kaXRpb25zW2NvbF1baV0gPSBjb2xBY2N1bXVsYXRvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBidWlsZEx0ckRpYWcoKSB7XHJcbiAgICAgICAgbGV0IHdpbm5pbmdDb25kaXRpb25zTGVuZ3RoID0gdGhpcy53aW5uaW5nQ29uZGl0aW9ucy5sZW5ndGg7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJvYXJkU2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2lubmluZ0NvbmRpdGlvbnNbd2lubmluZ0NvbmRpdGlvbnNMZW5ndGggLSAyXVtpXSA9IGkgKiAodGhpcy5ib2FyZFNpemUgKyAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRSdHJEaWFnKCkge1xyXG4gICAgICAgIGxldCBhID0gdGhpcy5ib2FyZFNpemUgLSAxLFxyXG4gICAgICAgICAgICB3aW5uaW5nQ29uZGl0aW9uc0xlbmd0aCA9IHRoaXMud2lubmluZ0NvbmRpdGlvbnMubGVuZ3RoO1xyXG5cdCAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYm9hcmRTaXplOyBpKyspIHtcclxuICBcdCAgICAgICAgdGhpcy53aW5uaW5nQ29uZGl0aW9uc1t3aW5uaW5nQ29uZGl0aW9uc0xlbmd0aCAtIDFdW2ldID0gKGkgKiBhKSArIGE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkQm9hcmQoKSB7XHJcbiAgICAgICAgbGV0IGJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvYXJkJyksXHJcbiAgICAgICAgICAgIGJvYXJkID0gJycsXHJcbiAgICAgICAgICAgIGNvdW50ZXIgPSAtMTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJvYXJkU2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGJvYXJkICs9ICc8ZGl2IGNsYXNzPVwiZmxleC1jb250YWluZXJcIj4nO1xyXG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgdGhpcy5ib2FyZFNpemU7IGorKykge1xyXG4gICAgICAgICAgICAgICAgKytjb3VudGVyO1xyXG4gICAgICAgICAgICAgICAgYm9hcmQgKz0gYDxkaXYgY2xhc3M9XCJmbGV4LWl0ZW1cIiBkYXRhLWNlbGwtaWQ9XCIke2NvdW50ZXJ9XCI+PC9kaXY+YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBib2FyZCArPSAnPC9kaXY+JztcclxuICAgICAgICB9XHJcbiAgICAgICAgYm9hcmRDb250YWluZXIuaW5uZXJIVE1MID0gYm9hcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgbGV0IGJvYXJkQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmxleC1pdGVtJyksXHJcbiAgICAgICAgICAgIGJvYXJkQ2VsbHNMZW5ndGggPSBib2FyZENlbGxzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZENlbGxzTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgYm9hcmRDZWxsc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DZWxsQ2xpY2tlZC5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBNYW5hZ2UgYm9hcmQgY2VsbCBjbGlja3MuIElmIGNlbGwgYWxyZWFkeSBjbGlja2VkIGRvbnQgYWxsb3cgYSBtb3ZlIG9uIHRoYXQgY2VsbFxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGV2IFxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKi9cclxuICAgIG9uQ2VsbENsaWNrZWQoZXYpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgY2xpY2tlZENlbGwgPSArZXYudGFyZ2V0LmRhdGFzZXQuY2VsbElkO1xyXG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdvbiBjZWxsIGNsaWNrZWQnLCB0aGlzLmRhdGFzZXQpO1xyXG5cclxuICAgICAgICAgICAgLy8gY2tlY2sgaWYgY2VsbCBpcyBhdmFpbGFibGVcclxuICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRTdGF0dXNbY2xpY2tlZENlbGxdICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNlbGxQbGF5ZWRIYW5kbGVyKGV2LnRhcmdldCwgY2xpY2tlZENlbGwpO1xyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGNlbGwgXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY2VsbEluZGV4IFxyXG4gICAgICovXHJcbiAgICBjZWxsUGxheWVkSGFuZGxlcihjZWxsID0gbnVsbCwgY2VsbEluZGV4ID0gLTEpIHtcclxuICAgICAgICBpZiAoIWNlbGwgfHwgY2VsbEluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICB0aHJvdygnSW52YWxpZENlbGxFeGNlcHRpb24nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCh0aGlzLnBsYXllciA9PT0gJzEnID8gJ3BsYXllcjEnIDogJ3BsYXllcjInKTtcclxuICAgICAgICB0aGlzLmJvYXJkU3RhdHVzW2NlbGxJbmRleF0gPSB0aGlzLnBsYXllcjtcclxuICAgICAgICB0aGlzLmNoZWNrV2luKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tXaW4oKSB7XHJcblxyXG4gICAgICAgIGxldCB2aWN0b3J5ID0gZmFsc2UsXHJcbiAgICAgICAgICAgIGRyYXcgPSBmYWxzZSxcclxuICAgICAgICAgICAgd2lubmluZ0NvbmRpdGlvbnNMZW5ndGggPSB0aGlzLndpbm5pbmdDb25kaXRpb25zLmxlbmd0aCxcclxuICAgICAgICAgICAgd2lubmluZ0NvbmRpdGlvbiA9IG51bGw7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2lubmluZ0NvbmRpdGlvbnNMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB3aW5uaW5nQ29uZGl0aW9uID0gdGhpcy53aW5uaW5nQ29uZGl0aW9uc1tpXTtcclxuICAgICAgICAgICAgbGV0IGNlbGwxID0gdGhpcy5ib2FyZFN0YXR1c1t3aW5uaW5nQ29uZGl0aW9uWzBdXSxcclxuICAgICAgICAgICAgICAgIGNlbGwyID0gdGhpcy5ib2FyZFN0YXR1c1t3aW5uaW5nQ29uZGl0aW9uWzFdXSxcclxuICAgICAgICAgICAgICAgIGNlbGwzID0gdGhpcy5ib2FyZFN0YXR1c1t3aW5uaW5nQ29uZGl0aW9uWzJdXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjZWxsMSA9PT0gJycgfHwgY2VsbDIgPT09ICcnIHx8IGNlbGwzID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjZWxsMSA9PT0gY2VsbDIgJiYgY2VsbDIgPT09IGNlbGwzKSB7XHJcbiAgICAgICAgICAgICAgICB2aWN0b3J5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh2aWN0b3J5KSB7XHJcbiAgICAgICAgICAgIC8vIGhpZ2hsaWdodCBsaW5lXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZFNpemU7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNlbGxJZCA9IHdpbm5pbmdDb25kaXRpb25baV0sXHJcbiAgICAgICAgICAgICAgICAgICAgYm9hcmRDZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY2VsbC1pZD1cIiR7Y2VsbElkfVwiXWApO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LmFkZChgcGxheWVyJHt0aGlzLnBsYXllcn1XaW5gLCAnd2lubmluZy1jZWxsJyk7XHJcbiAgICAgICAgICAgICAgICBib2FyZENlbGwuY2xhc3NMaXN0LnJlbW92ZShgcGxheWVyJHt0aGlzLnBsYXllcn1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3RhcnRHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICB9LCA0MDAwKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMucm91bmRXaW5zQnlQbGF5ZXJbJ3BsYXllcicrdGhpcy5wbGF5ZXJdICs9IDE7XHJcbiAgICAgICAgICAgIC8vIGZpcnN0IHBsYXllciB0byBnZXQgNSByb3VuZHMgaXMgdGhlIHdpbm5lclxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucm91bmRXaW5zQnlQbGF5ZXIucGxheWVyMSA9PT0gNSB8fCB0aGlzLnJvdW5kV2luc0J5UGxheWVyLnBsYXllcjIgPT09IDUpIHtcclxuICAgICAgICAgICAgICAgIC8vIGRpc3BsYXkgY29uZ3JhdHMgbWVzc2FnZSBhbmQgc2Nyb2xsIHRvIG5leHQgc2VjdGlvblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBhcnJpdmluZyBoZXJlIG5vIHZpY3RvcnkgZm91bmQuIGl0IGlzIGEgZHJhdyBpZiBhbGwgY2VsbHMgYXJlIGZpbGxlZFxyXG4gICAgICAgIGRyYXcgPSAhdGhpcy5ib2FyZFN0YXR1cy5pbmNsdWRlcygnJyk7XHJcbiAgICAgICAgaWYgKGRyYXcpIHtcclxuICAgICAgICAgICAgLy8gY2xlYXIgYm9hcmQgYW5kIHN0YXJ0IGFnYWluXHJcbiAgICAgICAgICAgIHRoaXMucmVzdGFydEdhbWUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5tYW5hZ2VQbGF5ZXJDaGFuZ2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBtYW5hZ2VQbGF5ZXJDaGFuZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSB0aGlzLnBsYXllciA9PT0gJzEnID8gJzInIDogJzEnO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gJzEnO1xyXG4gICAgICAgIHRoaXMuYm9hcmRTdGF0dXMuZmlsbCgnJyk7XHJcblxyXG4gICAgICAgIGxldCBib2FyZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZsZXgtaXRlbScpLFxyXG4gICAgICAgICAgICBib2FyZENlbGxzTGVuZ3RoID0gYm9hcmRDZWxscy5sZW5ndGgsXHJcbiAgICAgICAgICAgIGFwcGxpZWRDbGFzc2VzID0gWydwbGF5ZXIxJywgJ3BsYXllcjInLCAncGxheWVyMVdpbicsICdwbGF5ZXIyV2luJywgJ3dpbm5pbmctY2VsbCddO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkQ2VsbHNMZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBib2FyZENlbGxzW2ldLmNsYXNzTGlzdC5yZW1vdmUoLi4uYXBwbGllZENsYXNzZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3Nhc3MvbWFpbi5zY3NzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==