var game = (function () {
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

	return {
		printGame: printGame,
		calculateScore: calculateScore,
		getProblemCount: getProblemCount,
		setProblemCount: setProblemCount,
	};
})();
