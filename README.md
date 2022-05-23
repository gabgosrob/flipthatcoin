# flipthatcoin ![Vercel](https://vercelbadge.vercel.app/api/gabgosrob/flipthatcoin)

This is a competitive coinflipping web application built using [Next.js](https://nextjs.org/).

## Tools

The application was built on the [Next.js](https://www.npmjs.com/package/next) framework, which uses [React](https://www.npmjs.com/package/react). It was then deployed with [Vercel](https://vercel.com). [MongoDB](https://www.npmjs.com/package/mongodb) was used for the database, which is hosted in the cloud on [Atlas](https://www.mongodb.com/atlas/database). Cron jobs were setup using [EasyCron](https://www.easycron.com).

On the frontend, [js-cookie](https://www.npmjs.com/package/js-cookie) and [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) were used for user authentication and authorization.

In the backend, [mongoose](https://www.npmjs.com/package/mongoose) and [bcryptjs](https://www.npmjs.com/package/bcryptjs) were used to store and manipulate user data securely.

## Setup

You can follow these steps to setup a local version of the application on your machine.

First, install the dependencies:

```bash
npm install
```

You can then create a `.env.local` file and add the following environment variables (which will automatically get registered into the app):

```
MONGO_PASSWORD=
JWT_SECRET=
```

Finally, you can run the application in development mode:

```bash
npm run dev
```

which will then be accessible at https://localhost:3000/
