const {
  addNotehandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIhandler, deleteNoteByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNotehandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIhandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;
