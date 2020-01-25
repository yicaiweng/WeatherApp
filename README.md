## Weather APP :cloud:

TODO Add Description of the app
### Installing Dependencies
From the root directory, run
```
npm run install-all
```
to install dependencies for both the server and the client. To install dependencies individually, run `npm install` in the root directory or cd into the /ui directory and run the same.


### Running the Application
To run the application in development, run the command:
```
npm run dev
```
to enable hot reloading on both the front-end and backend to speed up development.
Alternatively, run the command:
```
npm run start
```
This will serve up the React front-end application on `http://localhost:3000` and the backend on `http://localhost:4000`.

Alternatively, the front-end and backend can be run separately by running the commands:
```
npm run start-ui
```
for the front-end, and
```
npm run start-server
```
for the backend.