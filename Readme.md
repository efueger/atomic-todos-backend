# Atomic Todos: The backend

[![Build Status](https://snap-ci.com/othman853/atomic-todos-backend/branch/master/build_image)](https://snap-ci.com/othman853/atomic-todos-backend/branch/master)
[![Stories in Ready](https://badge.waffle.io/othman853/atomic-todos-backend.svg?label=ready&title=Ready)](http://waffle.io/othman853/atomic-todos-backend)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/0e136a491a234501a1e243c9cf9009da)](https://www.codacy.com/app/anuar-yasser/atomic-todos-backend?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=othman853/atomic-todos-backend&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/0e136a491a234501a1e243c9cf9009da)](https://www.codacy.com/app/anuar-yasser/atomic-todos-backend?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=othman853/atomic-todos-backend&amp;utm_campaign=Badge_Coverage)

#### Tech stack:
- Node.js
- Express
- MongoDB
- Mongoose
- Winston

#### Quality stack:
- Chai
- Dredd
- EsLint
- Istanbul
- Mocha
- Sinon
- Sinon-Chai
- Sinon-As-Promised
- Supertest

#### Environment Variables:
- `ATOMIC_MONGO_URL`: URL to the mongo database.
- `ATOMIC_MONGO_TEST_URL`: URL to the test mongo database.
- `CODACY_PROJECT_TOKEN`: Codacy token. Required to send testing metrics to the [Codacy quality analysis tool](https://www.codacy.com/app/anuar-yasser/atomic-todos-backend).

#### Running:
 - `npm install`
 - `npm start`

#### Running with hot reload using nodemon:
- `npm run dev`

### Quality:
###### Run code linting `npm run lint`
###### Run All tests and show summarized line coverage report `npm test`
###### Run Unit tests `npm run test-unit`
###### Run Integration tests `npm run test-integration`
###### Run End to end tests `npm run test-e2e`
###### Run Contract tests `npm run test-contract`
###### Send line coverage metrics to codacy `npm run coverage` -
*This will only take effect in CI, since Codacy "binds" each `coverage` call with a specific commit.

#### Issue and backlog tracker (experimenting different tools):
- [Waffle](https://waffle.io/othman853/atomic-todos-backend)
- [Overvio](https://overv.io/othman853/atomic-todos-backend/board/)


#### Code quality and test coverage metrics:
- [Codacy](https://www.codacy.com/app/anuar-yasser/atomic-todos-backend)

#### API Documentation
- [Apiary](http://docs.atomictodosbackend.apiary.io/)

# Development Guideline

#### Using folders as modules with `index.js` files

This app uses the `index` files to organise the folders so that they can be seen as single modules. It makes it easier to import and add some initial logic to these modules. This is based on the pythonic `__init__.py` idea. One example where this technique is beneficial is when it is needed to register all modules of a folder into the applications (a folder containing several routes, for instance). It is quite easy to apply a forEach function into those modules and register them all at once into the app, as it can be seen in `actions/index.js` altogether with `etc/register.js`

#### Adding endpoints to the API

To make it easier to add new endpoints to the API, the idea of the `index.js` is used together with the `Action` class (located in `app/action/base-action.js`). The `Action` class and its subclasses help to achieve the `Dependency Injection` concept into our routes, so that they can be more testable and more concise. Besides that, it is possible to pre-validate all the requests before actually processing them, through the method `pre` of the `Action` class.

#### Currently in trial

- pm2
