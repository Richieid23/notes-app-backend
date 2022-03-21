require('dotenv').config();
const Hapi = require('@hapi/hapi');
const notes = require('./api/notes');
const NoteServices = require('./services/postgres/NotesServices');
const NoteValidator = require('./validator/notes');

const init = async () => {
  const notesServices = new NoteServices();
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register({
    plugin: notes,
    options: {
      service: notesServices,
      validator: NoteValidator,
    },
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
