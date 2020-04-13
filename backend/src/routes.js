const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');

const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();


//routes.get('/ongs', async (request, response) => {
 //   const ongs = await connection('ongs').select('*');
//    return response.json(ongs);
//});

//routes.post('/ongs', async (request, response) => {
    // return response.send('Hello world');
     //const params = request.query; // parametro query 
 
     //const params = request.params; //parametro route

    // const params = request.body; //request body

     //console.log(data);

    // return response.json({
        // evento: 'Semana Oministrack 11.0',
       //  aluno: 'Bruno Pedro Jordão'
     //});

     routes.post('/sessions', SessionController.create);

     routes.get('/ongs', OngController.index);
     routes.post('/ongs', OngController.create);

     routes.get('/profile', ProfileController.index);

     routes.get('/incidents', IncidentController.index);
     routes.post('/incidents', IncidentController.create);
     routes.delete('/incidents/:id', IncidentController.delete);
  
 module.exports = routes;