import express from 'express';
import patientService from '../services/patientService'
import { toNewPatient, toEntry} from '../utils'

const router = express.Router();

router.get('/', (_req, res) => {
    console.log('Getting patients')
  res.send(patientService.getPatients());
})

router.get('/:id', (req, res) => {
  const patient = patientService.getSinglePatient(String(req.params.id));

  if (patient) {
    res.send(patient);
  } else {
    res.sendStatus(404);
  }
})

router.post('/:id/entries', (req, res) => {
  console.log(req.body)
    const newEntry = toEntry(req.body);
    
    const addedEntry = patientService.addEntry(String(req.params.id), newEntry);
    res.json(addedEntry);

})

router.post('/', (req, res) => {
    const newPatient = toNewPatient(req.body);
    
    const addedPatient = patientService.addPatient(newPatient);
  res.json(addedPatient);
})


export default router;