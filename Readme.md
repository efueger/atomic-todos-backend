# Atomic Todos: The backend

[![Build Status](https://snap-ci.com/othman853/atomic-todos-backend/branch/master/build_image)](https://snap-ci.com/othman853/atomic-todos-backend/branch/master)
[![Stories in Ready](https://badge.waffle.io/othman853/atomic-todos-backend.svg?label=ready&title=Ready)](http://waffle.io/othman853/atomic-todos-backend)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/0e136a491a234501a1e243c9cf9009da)](https://www.codacy.com/app/anuar-yasser/atomic-todos-backend?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=othman853/atomic-todos-backend&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/0e136a491a234501a1e243c9cf9009da)](https://www.codacy.com/app/anuar-yasser/atomic-todos-backend?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=othman853/atomic-todos-backend&amp;utm_campaign=Badge_Coverage)

#### Tech stack:
- Node.js 5.8
- Express
- MongoDB
- Mongoose
- Winston and Morgan for logging

#### Test stack:
- Mocha
- Chai
- Sinon
- Sinon-Chai
- Sinon-As-Promised
- Supertest
- Istanbul

#### Environment Variables:
- `ATOMIC_MONGO_URL`: URL to the mongo database.
- `ATOMIC_MONGO_TEST_URL`: URL to the test mongo database.
- `DISABLE_LOGS`: If set, disable all logs. Used in end to end tests to improve the readability of the tests feedbacks.
- `CODACY_PROJECT_TOKEN`: Codacy token. Required to send testing metrics to the [Codacy quality analysis tool](https://www.codacy.com/app/anuar-yasser/atomic-todos-backend).

#### Running:
 - `npm install`
 - `npm start`

#### Running with hot reload using nodemon:
- `npm run dev`

### Quality:
###### Run code linting `npm run lint`
###### Run All tests `npm test`
###### Run Unit tests `npm run test-unit`
###### Run Integration tests `npm run test-integration`
###### Run End to end tests `npm run test-e2e`

#### Issue and backlog tracker: [Waffle](https://waffle.io/othman853/atomic-todos-backend)


#### Code quality and test coverage metrics:
- [Codacy](https://www.codacy.com/app/anuar-yasser/atomic-todos-backend)
