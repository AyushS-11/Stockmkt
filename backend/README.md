Backend setup

1) In MongoDB Atlas, make sure:

- Your cluster user has a username and password.
- Your current IP address is allowed in Network Access, or use `0.0.0.0/0` temporarily for testing.
- You copied the Node.js connection string from Atlas.

2) Copy `.env.example` to `.env` and set `MONGO_URL`. Example Atlas format:

   MONGO_URL=mongodb+srv://<username>:<password>@<cluster-url>/stockmkt?retryWrites=true&w=majority&appName=stockmkt

   If the password contains characters like `@`, `:`, `/`, or `#`, URL-encode it first.

3) Install dependencies:

```bash
cd backend
npm install
```

4) Seed the database:

```bash
npm run seed
```

5) Run the backend:

```bash
npm run start
```

or production:

```bash
npm run start:prod
```

API endpoints

- GET /api/health — health check
- GET /api/watchlist — list watchlist items
- GET /api/holdings — list holdings
- GET /api/positions — list positions

Notes

- The backend exits immediately if `MONGO_URL` is missing or Atlas rejects the connection.
- Don't commit `.env` with credentials. Use `.env.example` as a template.
