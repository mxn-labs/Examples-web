# TS-Express-MySQL Template

Template with JWT authentication and user registry using [Express](https://expressjs.com/)

## Getting Started

Clone down this repository. You will need `node`, `npm` and `nodemon` installed globally on your machine.

Installation:

```
npm install
```

To transpilate ts files

```
tsc --watch
```

To Start Development Server:

```
nodemon dist/app.js
```

To Visit App:

`localhost:8010/`

## Features

- Database connection and models implemented with Sequelize and mysql2 <https://sequelize.org/> - <https://github.com/sidorares/node-mysql2#readme>
- Password Encrpted using BcryptJS <https://github.com/dcodeIO/bcrypt.js>
- Environment variables with Dotenv <https://github.com/motdotla/dotenv>
- JWT implemented with node-jsonwebtoken <https://github.com/auth0/node-jsonwebtoken>
- CORS middleware with cors <https://github.com/expressjs/cors>
- Using TypeScript <https://www.typescriptlang.org/>


## Notes

- It is necessary to perform the transplantation process before running the program.
