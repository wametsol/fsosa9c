import patients from '../../data/patients'
import { NewPatient, cencoredPatient, Patient, Entry } from '../../types'
import uuid from 'uuid/v1';

//const patientList: Array<Patient> = patients as Array<Patient>;

const getPatients = (): cencoredPatient[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
        entries
    }));
}

const getSinglePatient = (id: string): Patient | undefined => {
    const patient = patients.find(a => a.id === id);
    console.log(patient)
    return  patient;
}
const addPatient = ( patient: NewPatient): Patient => {
    const newPatient = {
        id: uuid(),
        ...patient
    }
    patients.push(newPatient);
    return newPatient;
}

const addEntry = (id: string, entry: Entry): Entry => {
    const newEntry = {
        id: uuid(),
        ...entry
    }
    const patient = getSinglePatient(id);
    patient?.entries.concat(newEntry);
    return newEntry;
}


export default {
    getPatients,
    addPatient,
    getSinglePatient,
    addEntry
}