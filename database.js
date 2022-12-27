const mysql = require('mysql');

const connection = mysql.createConnection({
	host : 'db4free.net',
	database : 'name of your mysql database',
	user : 'username',
	password : 'password'
});

connection.connect(function(error){
	if(error)
	{
		throw error;
	}
	else
	{
		console.log('You are now able to connect to localhost:3000. \n \nMySQL Database is connected Successfully!');
	}
});

module.exports = connection;

