import express from 'express';
import cors from'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());  

const PORT = process.env.PORT || 1001;
const API_KEY = process.env.APIKEY;

app.get('/api', (req, res) => {
    res.json({ message: 'Data acquired from the secret lair! 🌐🔍🚀' });
});

app.get('/api/api-key', (req, res) => {
    res.json({ apiKey: API_KEY });
});
  
  
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});