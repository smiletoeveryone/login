const mysql = require('mysql');

const connection = mysql.createConnection({
	host : 'db4free.net',
	database : 'login_fiftycents',
	user : 'fiftycentsjj',
	password : 'Holtumrs@66'
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

