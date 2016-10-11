module.exports = {
  registerAll: (app, actions) => actions.forEach(action => new action.Constructor(app).register(action.endpoint, action.method))
};
