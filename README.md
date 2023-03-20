# 🚀 Mango-test

## Instalation

To clone this repository you will need to have [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en/download/) (16 version) installed on your computer, which already comes with *npm* installed. Once you have these applications open a terminal and follow the instructions below:

```md
# Clone repository
https://github.com/migudevelop/mango-test.git

# Install dependencies (npm)
npm i

# Start project
npm start
```

## Scripts

The main project scripts:

```sh
# Start project
npm run start

# Start project tests
npm run test

# Check errors
npm run lint
```

## Mock server

A mock server with the json-server dependency has been added to simulate the operation of the application. This mock server will be started automatically when the script is executed:

```sh
npm run start
```

If you want start only mock server, you can run this script:

```sh
npm run mock:server
```

## Code format

To ensure the quality of the code and avoid errors we have made use of **ESLint** and **Prettier** libraries. We have also installed **Lint Staged** and **Husky** to be able to launch scripts before uploading commits to the repository, in this case we will run ESLint and prettier to check that everything is correct. Also **Commitlint** has been added to check that the commits follow the conventional commits format.

## TODO


Below I attach pending issues due to lack of time:

```sh
Add more unit tests and add e2e tests

```
