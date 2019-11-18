const server = require('./server.js');
const carsRouter = require('./cars-router');

const PORT = process.env.PORT || 4000;

server.use('/api/cars', carsRouter);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});