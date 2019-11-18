// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/car-dealer.db3'
    },
    userNullAsDefault: true
  },

  migrations: {
    directory: './migrations'
  },

  seeds: {
    directory: './seeds'
  }
};
