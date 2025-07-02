import 'dotenv/config';
import express from 'express';

import authRoutes from './routes/auth.route.js';
const app = express();

const devPort = process.env.DEV_PORT;

app.use("/api/auth", authRoutes);

app.listen(devPort, () => {
    console.log(`Server running on http://localhost:${devPort}`);
})