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
