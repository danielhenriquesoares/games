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
  var gridSize = document.getElementById('select-grid-size');
  gridSize.addEventListener('change', function (ev) {
    console.debug(ev.target.value);

    try {
      document.getElementById('game-area').style.visibility = 'visible';
      var ticTacToe = new _tictactoe__WEBPACK_IMPORTED_MODULE_0__.TicTacToe(+ev.target.value);
      ticTacToe.onInit();
    } catch (e) {
      console.error(e);
    }
  });
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
      console.debug(this.winningConditions, this.boardSize);
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

      var _loop = function _loop(i) {
        winningCondition = _this3.winningConditions[i];
        var test = [];

        for (var j = 0; j < _this3.boardSize; j++) {
          test.push(_this3.boardStatus[winningCondition[j]]);
        }

        if (test.some(function (elem) {
          return elem === '';
        })) {
          return "continue";
        }

        if (test.every(function (elem) {
          return elem === test[0];
        })) {
          victory = true;
          return "break";
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

      };

      for (var i = 0; i < winningConditionsLength; i++) {
        var _ret = _loop(i);

        if (_ret === "continue") continue;
        if (_ret === "break") break;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zd29yZGdhbWVzLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3N3b3JkZ2FtZXMvLi9zcmMvc3dvcmRnYW1lcy5qcyIsIndlYnBhY2s6Ly9zd29yZGdhbWVzLy4vc3JjL3RpY3RhY3RvZS5qcyIsIndlYnBhY2s6Ly9zd29yZGdhbWVzLy4vc3JjL3Nhc3MvbWFpbi5zY3NzPzliMWUiLCJ3ZWJwYWNrOi8vc3dvcmRnYW1lcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zd29yZGdhbWVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zd29yZGdhbWVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3dvcmRnYW1lcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N3b3JkZ2FtZXMvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJkZWJ1ZyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJsaW1pdCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwib3BhY2l0eSIsImxvZ28iLCJnZXRFbGVtZW50QnlJZCIsImZhY2Vib29rIiwidHdpdHRlciIsImluc3RhZ3JhbSIsInNlbmQiLCJzcmMiLCJncmlkU2l6ZSIsImV2IiwidGFyZ2V0IiwidmFsdWUiLCJ2aXNpYmlsaXR5IiwidGljVGFjVG9lIiwiVGljVGFjVG9lIiwib25Jbml0IiwiZSIsImVycm9yIiwiY2FsbCIsIlN3b3JkR2FtZXMiLCJnYW1lIiwicGxheWVyIiwiYm9hcmRTdGF0dXMiLCJ3aW5uaW5nQ29uZGl0aW9ucyIsImJvYXJkQ2VsbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYm9hcmRDZWxsc0xlbmd0aCIsImxlbmd0aCIsImkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25DZWxsQ2xpY2tlZCIsImJvYXJkU2l6ZSIsInJvdW5kV2luc0J5UGxheWVyIiwicGxheWVyMSIsInBsYXllcjIiLCJBcnJheSIsImZyb20iLCJmaWxsIiwiYnVpbGRSb3dzIiwiYnVpbGRDb2xzIiwiYnVpbGRMdHJEaWFnIiwiYnVpbGRSdHJEaWFnIiwiYnVpbGRCb2FyZCIsInNldEV2ZW50TGlzdGVuZXJzIiwicm93QWNjdW11bGF0b3IiLCJyb3ciLCJjb2xBY2N1bXVsYXRvciIsIndpbm5pbmdDb25kaXRpb25zTGVuZ3RoIiwiY29sIiwiYSIsImJvYXJkQ29udGFpbmVyIiwiYm9hcmQiLCJjb3VudGVyIiwiaiIsImlubmVySFRNTCIsImJpbmQiLCJjbGlja2VkQ2VsbCIsImRhdGFzZXQiLCJjZWxsSWQiLCJjZWxsUGxheWVkSGFuZGxlciIsImNlbGwiLCJjZWxsSW5kZXgiLCJjbGFzc0xpc3QiLCJhZGQiLCJjaGVja1dpbiIsInZpY3RvcnkiLCJkcmF3Iiwid2lubmluZ0NvbmRpdGlvbiIsInRlc3QiLCJwdXNoIiwic29tZSIsImVsZW0iLCJldmVyeSIsImJvYXJkQ2VsbCIsInJlbW92ZSIsInNldFRpbWVvdXQiLCJyZXN0YXJ0R2FtZSIsImluY2x1ZGVzIiwibWFuYWdlUGxheWVyQ2hhbmdlIiwiYXBwbGllZENsYXNzZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxZQUFXO0FBQ1I7O0FBQ0FBLFNBQU8sQ0FBQ0MsS0FBUixDQUFjLGVBQWQ7QUFFQTtBQUNKO0FBQ0E7QUFDQTs7QUFFSUMsUUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFNO0FBQ3BDLFFBQUlDLEtBQUssR0FBRyxHQUFaOztBQUVBLFFBQUlDLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsU0FBekIsR0FBcUNILEtBQXpDLEVBQWdEO0FBQzVDQyxjQUFRLENBQUNHLGFBQVQsQ0FBdUIsUUFBdkIsRUFBaUNDLEtBQWpDLENB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UUFBUSxDQUFDOEIsZ0JBQVQsQ0FBMEIsWUFBMUIsQ0FBakI7QUFBQSxVQUNJQyxnQkFBZ0IsR0FBR0YsVUFBVSxDQUFDRyxNQURsQztBQUFBLFVBRUlvRCxjQUFjLEdBQUcsQ0FBQyxTQUFELEVBQVksU0FBWixFQUF1QixZQUF2QixFQUFxQyxZQUFyQyxFQUFtRCxjQUFuRCxDQUZyQjs7QUFJQSxXQUFLLElBQUluRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixnQkFBcEIsRUFBc0NFLENBQUMsRUFBdkMsRUFBMkM7QUFBQTs7QUFDdkMsaUNBQUFKLFVBQVUsQ0FBQ0ksQ0FBRCxDQUFWLENBQWNrQyxTQUFkLEVBQXdCWSxNQUF4Qiw4QkFBa0NLLGNBQWxDO0FBQ0g7QUFDSjtBQTFOTDs7QUFBQTtBQUFBLEVBQStCNUQsbURBQS9CLEU7Ozs7Ozs7Ozs7O0FDRkE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1VDTkE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RpY1RhY1RvZX0gZnJvbSAnLi90aWN0YWN0b2UnO1xyXG5pbXBvcnQgJy4vc2Fzcy9tYWluLnNjc3MnO1xyXG4vKiBpbXBvcnQgc3dvcmRMb2dvIGZyb20gJy4vaW1nL1NXT1JEX0hlYWx0aF9sb2dvLnN2Zyc7ICovXHJcblxyXG4oZnVuY3Rpb24oKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIGNvbnNvbGUuZGVidWcoXCJoZWxsbyB3ZWJwYWNrXCIpO1xyXG5cclxuICAgIC8qIHdpbmRvdy5vbnNjcm9sbChldiA9PiB7XHJcbiAgICAgICAgbGV0IGxpbWl0ID0gMTUwO1xyXG5cclxuICAgICAgICBjb25zb2xlLmRlYnVnKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApO1xyXG4gICAgfSk7ICovXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGxpbWl0ID0gMTUwO1xyXG5cclxuICAgICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA+IGxpbWl0KSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLnN0eWxlLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmRlYnVnKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IGxvZ28gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3dvcmQtbG9nbycpLFxyXG4gICAgICAgIGZhY2Vib29rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZhY2Vib29rJyksXHJcbiAgICAgICAgdHdpdHRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0d2l0dGVyJyksXHJcbiAgICAgICAgaW5zdGFncmFtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luc3RhZ3JhbScpLFxyXG4gICAgICAgIHNlbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VuZCcpO1xyXG5cclxuICAgIGxvZ28uc3JjID0gJy4vaW1nL1NXT1JEX0hlYWx0aF9sb2dvLnN2Zyc7XHJcbiAgICBmYWNlYm9vay5zcmMgPSAnLi9pbWcvZmFjZWJvb2suc3ZnJztcclxuICAgIHR3aXR0ZXIuc3JjID0gJy4vaW1nL3R3aXR0ZXIuc3ZnJztcclxuICAgIGluc3RhZ3JhbS5zcmMgPSAnLi9pbWcvaW5zdGFncmFtLnN2Zyc7XHJcbiAgICBzZW5kLnNyYyA9ICcuL2ltZy9zZW5kLnN2Zyc7XHJcblxyXG4gICAgbGV0IGdyaWRTaXplID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdC1ncmlkLXNpemUnKTtcclxuICAgIGdyaWRTaXplLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ID0+IHtcclxuICAgICAgICBjb25zb2xlLmRlYnVnKGV2LnRhcmdldC52YWx1ZSk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLWFyZWEnKS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgICAgICBsZXQgdGljVGFjVG9lID0gbmV3IFRpY1RhY1RvZSgrZXYudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgdGljVGFjVG9lLm9uSW5pdCgpO1xyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbn0pLmNhbGwoKTtcclxuIiwiZXhwb3J0IGNsYXNzIFN3b3JkR2FtZXMge1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5nYW1lID0gXCJ0aWN0YWN0b2VcIjtcclxuXHRcdHRoaXMucGxheWVyID0gJzEnO1xyXG5cdFx0dGhpcy5ib2FyZFN0YXR1cyA9IFtdO1xyXG5cdFx0dGhpcy53aW5uaW5nQ29uZGl0aW9ucyA9IFtdO1xyXG5cdFx0LyogdGhpcy5zdGF0aXN0aWNzID0ge1xyXG5cclxuXHRcdH0gKi9cclxuXHR9XHJcblxyXG5cdG9uSW5pdCgpIHtcclxuXHRcdHRocm93KCdOb3RJbXBsZW1lbnRlZEV4Y2VwdGlvbicpO1x0XHJcblx0fVxyXG5cclxuXHRidWlsZEJvYXJkKCkge1xyXG5cdFx0dGhyb3coJ05vdEltcGxlbWVudGVkRXhjZXB0aW9uJyk7XHRcclxuXHR9XHJcblxyXG5cdHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG5cdFx0dGhyb3coJ05vdEltcGxlbWVudGVkRXhjZXB0aW9uJyk7XHRcclxuXHR9XHJcblxyXG5cdG9uRGVzdHJveSgpIHtcclxuXHRcdGlmICh0aGlzLmdhbWUgPT09ICd0aWN0YWN0b2UnKSB7XHJcblx0XHRcdGxldCBib2FyZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZsZXgtaXRlbScpLFxyXG5cdFx0XHRcdGJvYXJkQ2VsbHNMZW5ndGggPSBib2FyZENlbGxzLmxlbmd0aDtcclxuXHJcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCBib2FyZENlbGxzTGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRib2FyZENlbGxzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5vbkNlbGxDbGlja2VkKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQge1N3b3JkR2FtZXN9IGZyb20gJy4vc3dvcmRnYW1lcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgVGljVGFjVG9lIGV4dGVuZHMgU3dvcmRHYW1lcyB7XHJcbiAgICBjb25zdHJ1Y3Rvcihib2FyZFNpemUgPSAzKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmJvYXJkU2l6ZSA9IGJvYXJkU2l6ZTtcclxuICAgICAgICB0aGlzLnJvdW5kV2luc0J5UGxheWVyID0ge1xyXG4gICAgICAgICAgICBwbGF5ZXIxOiAwLFxyXG4gICAgICAgICAgICBwbGF5ZXIyOiAwXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBvbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy53aW5uaW5nQ29uZGl0aW9ucyA9IEFycmF5LmZyb20oe1xyXG4gICAgICAgICAgICBsZW5ndGg6ICh0aGlzLmJvYXJkU2l6ZSAqIDIpICsgMlxyXG4gICAgICAgIH0sICgpID0+IChuZXcgQXJyYXkodGhpcy5ib2FyZFNpemUpKSk7XHJcblxyXG4gICAgICAgIHRoaXMuYm9hcmRTdGF0dXMgPSBuZXcgQXJyYXkodGhpcy5ib2FyZFNpemUgKiB0aGlzLmJvYXJkU2l6ZSkuZmlsbCgnJyk7XHJcblxyXG4gICAgICAgIHRoaXMuYnVpbGRSb3dzKCk7XHJcbiAgICAgICAgdGhpcy5idWlsZENvbHMoKTtcclxuICAgICAgICB0aGlzLmJ1aWxkTHRyRGlhZygpO1xyXG4gICAgICAgIHRoaXMuYnVpbGRSdHJEaWFnKCk7XHJcbmNvbnNvbGUuZGVidWcodGhpcy53aW5uaW5nQ29uZGl0aW9ucywgdGhpcy5ib2FyZFNpemUpO1xyXG4gICAgICAgIHRoaXMuYnVpbGRCb2FyZCgpO1xyXG5cclxuICAgICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBidWlsZFJvd3MoKSB7XHJcbiAgICAgICAgbGV0IHJvd0FjY3VtdWxhdG9yID0gLTE7XHJcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5ib2FyZFNpemU7IHJvdysrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZFNpemU7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgKytyb3dBY2N1bXVsYXRvcjtcclxuICAgICAgICAgICAgICAgIHRoaXMud2lubmluZ0NvbmRpdGlvbnNbcm93XVtpXSA9IHJvd0FjY3VtdWxhdG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkQ29scygpIHtcclxuICAgICAgICBsZXQgY29sQWNjdW11bGF0b3IgPSAtMSxcclxuICAgICAgICAgICAgd2lubmluZ0NvbmRpdGlvbnNMZW5ndGggPSB0aGlzLndpbm5pbmdDb25kaXRpb25zLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYm9hcmRTaXplOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gdGhpcy5ib2FyZFNpemU7IGNvbCA8PSB3aW5uaW5nQ29uZGl0aW9uc0xlbmd0aCAtIDM7IGNvbCsrKSB7XHJcbiAgICAgICAgICAgICAgICArK2NvbEFjY3VtdWxhdG9yO1xyXG4gICAgICAgICAgICAgICAgdGhpcy53aW5uaW5nQ29uZGl0aW9uc1tjb2xdW2ldID0gY29sQWNjdW11bGF0b3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRMdHJEaWFnKCkge1xyXG4gICAgICAgIGxldCB3aW5uaW5nQ29uZGl0aW9uc0xlbmd0aCA9IHRoaXMud2lubmluZ0NvbmRpdGlvbnMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZFNpemU7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLndpbm5pbmdDb25kaXRpb25zW3dpbm5pbmdDb25kaXRpb25zTGVuZ3RoIC0gMl1baV0gPSBpICogKHRoaXMuYm9hcmRTaXplICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkUnRyRGlhZygpIHtcclxuICAgICAgICBsZXQgYSA9IHRoaXMuYm9hcmRTaXplIC0gMSxcclxuICAgICAgICAgICAgd2lubmluZ0NvbmRpdGlvbnNMZW5ndGggPSB0aGlzLndpbm5pbmdDb25kaXRpb25zLmxlbmd0aDtcclxuXHQgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJvYXJkU2l6ZTsgaSsrKSB7XHJcbiAgXHQgICAgICAgIHRoaXMud2lubmluZ0NvbmRpdGlvbnNbd2lubmluZ0NvbmRpdGlvbnNMZW5ndGggLSAxXVtpXSA9IChpICogYSkgKyBhO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBidWlsZEJvYXJkKCkge1xyXG4gICAgICAgIGxldCBib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib2FyZCcpLFxyXG4gICAgICAgICAgICBib2FyZCA9ICcnLFxyXG4gICAgICAgICAgICBjb3VudGVyID0gLTE7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2FyZFNpemU7IGkrKykge1xyXG4gICAgICAgICAgICBib2FyZCArPSAnPGRpdiBjbGFzcz1cImZsZXgtY29udGFpbmVyXCI+JztcclxuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHRoaXMuYm9hcmRTaXplOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICsrY291bnRlcjtcclxuICAgICAgICAgICAgICAgIGJvYXJkICs9IGA8ZGl2IGNsYXNzPVwiZmxleC1pdGVtXCIgZGF0YS1jZWxsLWlkPVwiJHtjb3VudGVyfVwiPjwvZGl2PmA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYm9hcmQgKz0gJzwvZGl2Pic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJvYXJkQ29udGFpbmVyLmlubmVySFRNTCA9IGJvYXJkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgIGxldCBib2FyZENlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZsZXgtaXRlbScpLFxyXG4gICAgICAgICAgICBib2FyZENlbGxzTGVuZ3RoID0gYm9hcmRDZWxscy5sZW5ndGg7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmRDZWxsc0xlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGJvYXJkQ2VsbHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2VsbENsaWNrZWQuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFuYWdlIGJvYXJkIGNlbGwgY2xpY2tzLiBJZiBjZWxsIGFscmVhZHkgY2xpY2tlZCBkb250IGFsbG93IGEgbW92ZSBvbiB0aGF0IGNlbGxcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBldiBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICovXHJcbiAgICBvbkNlbGxDbGlja2VkKGV2KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IGNsaWNrZWRDZWxsID0gK2V2LnRhcmdldC5kYXRhc2V0LmNlbGxJZDtcclxuICAgICAgICAgICAgY29uc29sZS5kZWJ1Zygnb24gY2VsbCBjbGlja2VkJywgdGhpcy5kYXRhc2V0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNrZWNrIGlmIGNlbGwgaXMgYXZhaWxhYmxlXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkU3RhdHVzW2NsaWNrZWRDZWxsXSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5jZWxsUGxheWVkSGFuZGxlcihldi50YXJnZXQsIGNsaWNrZWRDZWxsKTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjZWxsIFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNlbGxJbmRleCBcclxuICAgICAqL1xyXG4gICAgY2VsbFBsYXllZEhhbmRsZXIoY2VsbCA9IG51bGwsIGNlbGxJbmRleCA9IC0xKSB7XHJcbiAgICAgICAgaWYgKCFjZWxsIHx8IGNlbGxJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGhyb3coJ0ludmFsaWRDZWxsRXhjZXB0aW9uJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQodGhpcy5wbGF5ZXIgPT09ICcxJyA/ICdwbGF5ZXIxJyA6ICdwbGF5ZXIyJyk7XHJcbiAgICAgICAgdGhpcy5ib2FyZFN0YXR1c1tjZWxsSW5kZXhdID0gdGhpcy5wbGF5ZXI7XHJcbiAgICAgICAgdGhpcy5jaGVja1dpbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrV2luKCkge1xyXG5cclxuICAgICAgICBsZXQgdmljdG9yeSA9IGZhbHNlLFxyXG4gICAgICAgICAgICBkcmF3ID0gZmFsc2UsXHJcbiAgICAgICAgICAgIHdpbm5pbmdDb25kaXRpb25zTGVuZ3RoID0gdGhpcy53aW5uaW5nQ29uZGl0aW9ucy5sZW5ndGgsXHJcbiAgICAgICAgICAgIHdpbm5pbmdDb25kaXRpb24gPSBudWxsO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdpbm5pbmdDb25kaXRpb25zTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgd2lubmluZ0NvbmRpdGlvbiA9IHRoaXMud2lubmluZ0NvbmRpdGlvbnNbaV07XHJcblxyXG4gICAgICAgICAgICBsZXQgdGVzdCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmJvYXJkU2l6ZTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICB0ZXN0LnB1c2godGhpcy5ib2FyZFN0YXR1c1t3aW5uaW5nQ29uZGl0aW9uW2pdXSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0ZXN0LnNvbWUoZWxlbSA9PiB7cmV0dXJuIGVsZW0gPT09ICcnO30pKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRlc3QuZXZlcnkoZWxlbSA9PiBlbGVtID09PSB0ZXN0WzBdKSkge1xyXG4gICAgICAgICAgICAgICAgdmljdG9yeSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLyogXHJcbiAgICAgICAgICAgIGxldCBjZWxsMSA9IHRoaXMuYm9hcmRTdGF0dXNbd2lubmluZ0NvbmRpdGlvblswXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwyID0gdGhpcy5ib2FyZFN0YXR1c1t3aW5uaW5nQ29uZGl0aW9uWzFdXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbDMgPSB0aGlzLmJvYXJkU3RhdHVzW3dpbm5pbmdDb25kaXRpb25bMl1dO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2VsbDEgPT09ICcnIHx8IGNlbGwyID09PSAnJyB8fCBjZWxsMyA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2VsbDEgPT09IGNlbGwyICYmIGNlbGwyID09PSBjZWxsMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWN0b3J5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHZpY3RvcnkpIHtcclxuICAgICAgICAgICAgLy8gaGlnaGxpZ2h0IGxpbmVcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJvYXJkU2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2VsbElkID0gd2lubmluZ0NvbmRpdGlvbltpXSxcclxuICAgICAgICAgICAgICAgICAgICBib2FyZENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jZWxsLWlkPVwiJHtjZWxsSWR9XCJdYCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QuYWRkKGBwbGF5ZXIke3RoaXMucGxheWVyfVdpbmAsICd3aW5uaW5nLWNlbGwnKTtcclxuICAgICAgICAgICAgICAgIGJvYXJkQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKGBwbGF5ZXIke3RoaXMucGxheWVyfWApO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzdGFydEdhbWUoKTtcclxuICAgICAgICAgICAgICAgIH0sIDQwMDApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5yb3VuZFdpbnNCeVBsYXllclsncGxheWVyJyt0aGlzLnBsYXllcl0gKz0gMTtcclxuICAgICAgICAgICAgLy8gZmlyc3QgcGxheWVyIHRvIGdldCA1IHJvdW5kcyBpcyB0aGUgd2lubmVyXHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5yb3VuZFdpbnNCeVBsYXllci5wbGF5ZXIxID09PSA1IHx8IHRoaXMucm91bmRXaW5zQnlQbGF5ZXIucGxheWVyMiA9PT0gNSkge1xyXG4gICAgICAgICAgICAgICAgLy8gZGlzcGxheSBjb25ncmF0cyBtZXNzYWdlIGFuZCBzY3JvbGwgdG8gbmV4dCBzZWN0aW9uXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGFycml2aW5nIGhlcmUgbm8gdmljdG9yeSBmb3VuZC4gaXQgaXMgYSBkcmF3IGlmIGFsbCBjZWxscyBhcmUgZmlsbGVkXHJcbiAgICAgICAgZHJhdyA9ICF0aGlzLmJvYXJkU3RhdHVzLmluY2x1ZGVzKCcnKTtcclxuICAgICAgICBpZiAoZHJhdykge1xyXG4gICAgICAgICAgICAvLyBjbGVhciBib2FyZCBhbmQgc3RhcnQgYWdhaW5cclxuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0R2FtZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm1hbmFnZVBsYXllckNoYW5nZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG1hbmFnZVBsYXllckNoYW5nZSgpIHtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHRoaXMucGxheWVyID09PSAnMScgPyAnMicgOiAnMSc7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdGFydEdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSAnMSc7XHJcbiAgICAgICAgdGhpcy5ib2FyZFN0YXR1cy5maWxsKCcnKTtcclxuXHJcbiAgICAgICAgbGV0IGJvYXJkQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmxleC1pdGVtJyksXHJcbiAgICAgICAgICAgIGJvYXJkQ2VsbHNMZW5ndGggPSBib2FyZENlbGxzLmxlbmd0aCxcclxuICAgICAgICAgICAgYXBwbGllZENsYXNzZXMgPSBbJ3BsYXllcjEnLCAncGxheWVyMicsICdwbGF5ZXIxV2luJywgJ3BsYXllcjJXaW4nLCAnd2lubmluZy1jZWxsJ107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmRDZWxsc0xlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGJvYXJkQ2VsbHNbaV0uY2xhc3NMaXN0LnJlbW92ZSguLi5hcHBsaWVkQ2xhc3Nlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2Fzcy9tYWluLnNjc3NcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9