require('dotenv').config();
const Hapi = require('@hapi/hapi');

// notes
const notes = require('./api/notes');
const NoteServices = require('./services/postgres/NotesServices');
const NoteValidator = require('./validator/notes');

// users
const users = require('./api/users');
const UserServices = require('./services/postgres/UsersServices');
const UsersValidator = require('./validator/users');

const init = async () => {
  const notesServices = new NoteServices();
  const userServices = new UserServices();
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register([
    {
      plugin: notes,
      options: {
        service: notesServices,
        validator: NoteValidator,
      },
    },
    {
      plugin: users,
      options: {
        service: userServices,
        validator: UsersValidator,
      },
    },
  ]);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
