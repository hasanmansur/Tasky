var usersModel = require("../data/models/users");
var tasksModel = require("../data/models/tasks");
var async = require('async');

function search (req, res, next) {
	async.parallel(
		[
			function (next) {
				usersModel.search({
			        query: {
			            multi_match : {
			                query: req.query.searchText,
			                fields: [ "username", "email", "role.name"]
			            }
			        }
			    }, function (err, users) {
			        next(null, users.hits.hits);
			    });	
			}, 
			function (next) {
				tasksModel.search({
			        query: {
			            multi_match : {
			                query: req.query.searchText,
			                fields: [ "name", "status"]
			            }
			        }
			    }, function (err, users) {
			        next(null, users.hits.hits);
			    });	
			}
		],
		// final callback after execution of the funcitons in previous array 
		function (err, results) {
			console.log('------------ search results ----------------');
			console.log(results[0].concat(results[1]));
			res.send(results);
			console.log('------------ search results ----------------');
		});
}

module.exports = {
	search: search
}