import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes.js';
import rankingRoutes from './routes/rankingRoutes.js';
import cors from 'cors';

import connectDB from './config/db.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/ranking', rankingRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
     console.log(`Server running on port ${PORT}`)
});