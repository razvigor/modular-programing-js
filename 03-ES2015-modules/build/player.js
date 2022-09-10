"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getName = getName;
exports.logPlayer = logPlayer;
exports.setName = setName;
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