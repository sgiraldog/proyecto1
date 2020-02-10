const recordsRoutes = require('./records-routes');
const usersRoutes = require('./users-routes');

module.exports = app => {
  app.use('/api/v1/users', usersRoutes);
  app.use('/api/v1/records', recordsRoutes);
};
