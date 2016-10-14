module.exports = {
  actions: (app, actions) => actions.forEach(action => new action.Constructor(app).register(action.method, action.endpoint)),
  errors: (app, errors) => app.errors = errors,
  models: (app, models) => app.models = models,
  validators: (app, validators) => app.validators = validators
};
