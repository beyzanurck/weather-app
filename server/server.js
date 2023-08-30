import express from 'express';
import cors from'cors';

const app = express();
app.use(cors());  

const PORT = process.env.PORT || 1001;

app.get('/api', (req, res) => {
    res.json({ message: 'This is a test' });
});
  
  
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});