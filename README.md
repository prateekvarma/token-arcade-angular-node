# Installation Instructions

The project uses [Angular CLI](https://github.com/angular/angular-cli) version `15.0.2` for the frontend client.

And the backend server was created using `Express version 4.18.2`

Both the client and the server were created using `node.js v18.12.1 and npm v8.19.2`

It is recommended that you use the same versions of Node and NPM as above. Please check [Node Version Manager](https://github.com/nvm-sh/nvm) if you want to keep multiple versions of Node and npm.

Check your versions of node and npm by `node -v` and `npm -v` respectively.

## Running the server

Go to the `/client` folder, and run `npm install` to install all dependencies.

Run `npm start` to run the server. The server is configured to listen on `localhost:8080`.


## Running the client

Go to the `/server` folder, and run `npm install` to install the dependencies.

Run `npm start` to run the client. Navigate to `http://localhost:4200/`.

## Notes

The backend server is configured to use a memcached type caching server to store data temporarily only.
