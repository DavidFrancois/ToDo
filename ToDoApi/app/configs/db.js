module.exports = {
  all: {},
  development: {
    mongo: { host: 'localhost', port: 27017, db: 'ToDo', options: {} }
  },
  preprod: {
    mongo: {
      host: 'todo.com', // to be set
      port: 27017,
      db: 'todo',
      options: { server: { ssl: true, sslValidate: false } }
    }
  },
  production: {
    mongo: {
      host: 'todo.com', // to be set
      port: 27017,
      db: 'todo',
      options: { server: { ssl: true, sslValidate: false } }
    }
  }
}
