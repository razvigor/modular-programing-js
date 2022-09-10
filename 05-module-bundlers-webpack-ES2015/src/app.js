import * as player from './player.js';
import * as game from './game.js';

document.getElementById('startGame').addEventListener('click', function () {
	player.setName(document.getElementById('name').value);
	game.printGame();
});
document.getElementById('calculate').addEventListener('click', function () {
	game.calculateScore();
});
document.getElementById('problems').value = game.getProblemCount();
