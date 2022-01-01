# MERN project

I'm following the guidance on the ["Full Stack open 2021"](https://fullstackopen.com/en/) website to build a MERN note-taking app with testing.

In this repo, I'm working through the backend tutorials here:
https://fullstackopen.com/en/part3/node_js_and_express
https://fullstackopen.com/en/part4
(about to start 4(d))

The app is deployed at: https://damp-tor-55947.herokuapp.com/

The frontend build is from this repo: https://github.com/edpackard/mern-project-frontend

NB the frontend build does not yet incorporate all functionality of backend - use Postman or similar to use API.

## How to set up a local development / test version of this app

```
git clone https://github.com/edpackard/mern-project-frontend.git
cd mern-project-frontend
npm install
```

You will need to set up MongoDB databases for development and testing purposes.
Create an `.env` document in the root directory of the project, and include the following:

```
MONGODB_URI=<insert link to development database>
TEST_MONGODB_URI=<insert link to test database>

PORT=3001
```

To run the app:

```
npm run dev
open http://localhost:3001
```

To run the tests:

```
npm test
```

## Notes

`requests` directory: contains API route requests using REST extension for VS code, allowing for simple API endpoint testing. To use the create_note.rest request, first run the create_user.rest request: copy and paste the "id" returned into the userId parameter in the create_note.rest request.
