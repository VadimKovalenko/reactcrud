import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'

import { serverPort } from '../etc/config.json';

import * as db from './utils/DataBaseUtils';

var Note = mongoose.model('Note');

const app = express();

db.setUpConnection();

app.use( bodyParser.json() );

app.get('/api/notes', (req, res) => {
	Note.find().exec(function(err, notes) {
		if(err) {
			res.send('Error has occured')
		}else{
			//console.log(notes);
			res.send(notes)
		}
	})
})

const server = app.listen(serverPort, function() {
    console.log(`Server is up and running on port ${serverPort}`);
});
console.log("App is running");
