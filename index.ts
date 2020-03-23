import express from 'express';
import diagnoseRouter from './src/routes/diagnoses'
import patientRouter from './src/routes/patients'
const app = express();
import cors from 'cors';
app.use(express.json());
app.use(cors())

const PORT = 3001;

app.get('/api/ping', (_req, res) => { 
  console.log('someone pinged here');
  res.status(200)
});

app.use('/api/diagnoses', diagnoseRouter)
app.use('/api/patients', patientRouter)
  
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});