import 'dotenv/config';
import express from 'express';

import connectionDB from './lib/database/db.js';

connectionDB
    .authenticate()
    .then(() => {
        console.log('DB successfully connected');
    })
    .catch((errorMessage) => {
        console.log(errorMessage);
    });

import authRoutes from './routes/auth.route.js';
const app = express();

const devPort = process.env.DEV_PORT;

app.use("/api/auth", authRoutes);

app.listen(devPort, () => {
    console.log(`Server running on http://localhost:${devPort}`);
})