define(['./player', './game'], function (player, game) {
	document.getElementById('startGame').addEventListener('click', function () {
		player.setName(document.getElementById('name').value);
		game.printGame();
	});
	document.getElementById('calculate').addEventListener('click', function () {
		game.calculateScore();
	});
	document.getElementById('problems').value = game.getProblemCount();
});
