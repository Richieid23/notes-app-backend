/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.createTable('notes', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    title: {
      type: 'TEXT',
      noteNull: true,
    },
    body: {
      type: 'TEXT',
      noteNull: true,
    },
    tags: {
      type: 'TEXT[]',
      noteNull: true,
    },
    created_at: {
      type: 'TEXT',
      noteNull: true,
    },
    updated_at: {
      type: 'TEXT',
      notNull: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('notes');
};
