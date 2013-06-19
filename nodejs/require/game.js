var games = {};

var id = 0;

var io;

var game = {
	gameid: 0,
	tasks: ['one', 'two', 'three', 'four'],
	players: ['p1', 'p2'],
	images: {
		'p1': ['http://placehold.it/200x150', 'http://placehold.it/200x150',
		'http://placehold.it/200x150', 'http://placehold.it/200x150'],
		'p2': ['http://placehold.it/200x150', 'http://placehold.it/200x150',
		'http://placehold.it/200x150', 'http://placehold.it/200x150'],
		'p3': ['http://placehold.it/200x150', 'http://placehold.it/200x150',
		'http://placehold.it/200x150', 'http://placehold.it/200x150']
	}
}

games[id.toString()] = game;
id++

exports.setSocket = function(sockio){
	io = sockio;
}

var imageSubmit = function(gameid, userid, task, filepath){
	var g = getGame(gameid);
	var tasknum = g.tasks.indexOf(task);
	g.players[userid][tasknum] = filepath;
}
exports.imageSubmit = imageSubmit;

var getGame = function(gameid){
	return games[0];
}
exports.getGame = getGame;

var isGameId = function(gameid){
	if(games[gameid]){
		return true;
	} else {
		return false;
	}
}
exports.isGameId = isGameId;
