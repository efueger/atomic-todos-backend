module.exports = (request, response) => {
  response.set('Content-Type', 'application/json');
  response.sendStatus(404);
};
