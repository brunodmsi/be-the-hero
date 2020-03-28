const express = require('express');
const { celebrate, Segments } = require('celebrate');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const validateIncidentIndex = require('./validators/Incident/IncidentIndexValidator');
const validateIncidentStore = require('./validators/Incident/IncidentStoreValidator');
const validateIncidentDelete = require('./validators/Incident/IncidentDeleteValidator');
const validateOngStore = require('./validators/OngStoreValidator');
const validateSessionStore = require('./validators/SessionStoreValidator');
const validateProfileIndex = require('./validators/ProfileIndexValidator');

const routes = express.Router();

routes.post('/sessions', validateSessionStore, SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', validateOngStore, OngController.create);

routes.get('/profile', validateProfileIndex, ProfileController.index);

routes.get('/incidents', validateIncidentIndex, IncidentController.index);
routes.post('/incidents', validateIncidentStore, IncidentController.create);
routes.delete('/incidents/:id', validateIncidentDelete, IncidentController.delete);

module.exports = routes;
