# Atomic Todos: The backend

[![Build Status](https://snap-ci.com/othman853/atomic-todos-backend/branch/master/build_image)](https://snap-ci.com/othman853/atomic-todos-backend/branch/master)

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

#### Environment Variables:
- `ATOMIC_MONGO_URL`: URL to the mongo database.
- `ATOMIC_MONGO_TEST_URL`: URL to the test mongo database.

#### Running:
 - `npm install`
 - `npm start`

#### Running with hot reload using nodemon:
- `npm run dev`

### Testing:
###### All `npm test`
###### Unit `npm run test-unit`
###### Integration `npm run test-integration`
###### End to end `npm run test-e2e`

#### Issue and backlog tracker: [Waffle](https://waffle.io/othman853/atomic-todos-backend)
