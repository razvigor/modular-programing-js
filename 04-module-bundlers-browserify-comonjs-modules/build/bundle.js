(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var player = require('./player.js');
var game = require('./game.js');

document.getElementById('startGame').addEventListener('click', function () {
	player.setName(document.getElementById('name').value);
	game.printGame();
});
document.getElementById('calculate').addEventListener('click', function () {
	game.calculateScore();
});
document.getElementById('problems').value = game.getProblemCount();

},{"./game.js":2,"./player.js":3}],2:[function(require,module,exports){
var player = require('./player.js');
var scoreboard = require('./scoreboard.js');

var factorElement = document.getElementById('factor');
var problemsPergame = 3;

function printGame() {
	player.logPlayer();

	setProblemCount(document.getElementById('problems').value);
	var gameForm = '';
	for (var i = 1; i <= problemsPergame; i++) {
		gameForm += '<div class="row mb-3">';
		gameForm +=
			'<label for="ansver' +
			i +
			'" class=col-sm-4 col-form-label fw-bolder text-end">';
		gameForm += factorElement.value + ' x ' + i + ' = </label>';
		gameForm +=
			'<div class="col-sm-2"><input type="text" class="form-control" id="answer' +
			i +
			'" value="" ></div>';
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
		let answer = document.getElementById('answer' + i).value;
		if (i * factorElement.value == answer) {
			score++;
		}
	}
	var result = {
		name: player.getName(),
		score: score,
		problems: problemsInGame,
		factor: factorElement.value,
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

exports.printGame = printGame;
exports.calculateScore = calculateScore;
exports.setProblemCount = setProblemCount;
exports.getProblemCount = getProblemCount;

},{"./player.js":3,"./scoreboard.js":4}],3:[function(require,module,exports){
var playerName = '';

function logPlayer() {
	console.log('The current player is ' + playerName + '.');
}

function setName(newName) {
	playerName = newName;
}

function getName() {
	return playerName;
}

exports.logPlayer = logPlayer;
exports.setName = setName;
exports.getName = getName;

},{}],4:[function(require,module,exports){
var results = [];
function addResult(newResult) {
	results.push(newResult);
}
function updateScoreboard() {
	var output = '<h2>Scoreboard</h2>';

	for (var ind = 0; ind < results.length; ind++) {
		var result = results[ind];
		output += '<h4>';
		output +=
			result.name +
			': ' +
			result.score +
			' / ' +
			result.problems +
			' result -- factor ' +
			result.factor;
		output += '</h4>';
	}

	var scoresElement = document.getElementById('scores');
	scoresElement.innerHTML = output;
}

module.exports = {
	addResult: addResult,
	updateScoreboard: updateScoreboard,
};

},{}]},{},[1]);
