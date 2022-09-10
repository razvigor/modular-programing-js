"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateScore = calculateScore;
exports.getProblemCount = getProblemCount;
exports.printGame = printGame;
exports.setProblemCount = setProblemCount;

var player = _interopRequireWildcard(require("./player.js"));

var scoreboard = _interopRequireWildcard(require("./scoreboard.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var factorElement = document.getElementById('factor');
var problemsPergame = 3;

function printGame() {
  player.logPlayer();
  setProblemCount(document.getElementById('problems').value);
  var gameForm = '';

  for (var i = 1; i <= problemsPergame; i++) {
    gameForm += '<div class="row mb-3">';
    gameForm += '<label for="ansver' + i + '" class=col-sm-4 col-form-label fw-bolder text-end">';
    gameForm += factorElement.value + ' x ' + i + ' = </label>';
    gameForm += '<div class="col-sm-2"><input type="text" class="form-control" id="answer' + i + '" value="" ></div>';
    gameForm += '</div>';
  }

  var gameElement = document.getElementById('game');
  gameElement.innerHTML = gameForm;
  document.getElementById('calculate').removeAttribute('disabled');
}

function calculateScore() {
  var problemsInGame = getProblemCount();
  var score = 0;

  for (var i = 1; i <= problemsInGame; i++) {
    var answer = document.getElementById('answer' + i).value;

    if (i * factorElement.value == answer) {
      score++;
    }
  }

  var result = {
    name: player.getName(),
    score: score,
    problems: problemsInGame,
    factor: factorElement.value
  };
  scoreboard.addResult(result);
  scoreboard.updateScoreboard();
  document.getElementById('calculate').setAttribute('disabled', 'true');
}

function setProblemCount(newProblemCount) {
  problemsPergame = newProblemCount;
}

function getProblemCount() {
  return problemsPergame;
}