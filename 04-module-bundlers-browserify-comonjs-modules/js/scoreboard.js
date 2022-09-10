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
