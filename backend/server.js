import 'dotenv/config';
import express from 'express';

import connectionDB from './lib/database/db.js';
import Product from './lib/database/entities/Product.js';
import User from './lib/database/entities/User.js';
import UserCartItem from './lib/database/entities/UserCartItem.js';


connectionDB
    .authenticate()
    .then(() => {
        console.log('DB successfully connected');
    })
  .catch((errorMessage) => {
    console.error('Erro ao conectar/sincronizar com o DB:', errorMessage);
  });

import authRoutes from './routes/auth.route.js';


const app = express();

const devPort = process.env.DEV_PORT;

app.use("/api/auth", authRoutes);

app.listen(devPort, () => {
    console.log(`Server running on http://localhost:${devPort}`);
})