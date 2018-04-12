const express = require('express'); 
const app = express();

const comedians = require('./module1.js');
const theStrokes = require('./module1');

app.get('/videos/:id', (request, response) => {
    response.send('all videos');
});

app.get('/comedians', (request, response) => {
	response.send(comedians[1]);
});

app.get('/videos/:id/comedians', (request, response) => {
	response.send('here are all the videos by comedians');
});
app.get('/videos/:id/comedians/:id', (request, response) => {
	response.send('here is a video by a specific comedians');
});

// --------------LAB

	
app.get('/thestrokes', (request, response) => {
	response.send(theStrokes);
})
app.get('/thestrokes/:id', (request, response) => {
	let id = request.params.id
	let obj = theStrokes[id-1];
	response.send(obj);
})
app.get('/theStrokes/:id/song', (request, response) => {
	let id = request.params.id
	let obj = theStrokes[id-1];
	response.send(obj.song);
})
app.get('/theStrokes/:id/video', (request, response) => {
	let id = request.params.id;
	let obj = theStrokes[id-1];
	response.send(obj.video);
})

app.listen(3000, () => {
    console.log("I am listening");
});