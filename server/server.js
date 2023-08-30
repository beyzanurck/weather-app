import express from 'express';
import cors from'cors';

const app = express();
app.use(cors());  

const PORT = process.env.PORT || 1001;