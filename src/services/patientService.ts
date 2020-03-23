import patients from '../../data/patients'
import { NewPatient, cencoredPatient, Patient } from '../../types'
import uuid from 'uuid/v1';

//const patientList: Array<Patient> = patients as Array<Patient>;

const getPatients = (): cencoredPatient[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
}
const addPatient = ( patient: NewPatient): Patient => {
    const newPatient = {
        id: uuid(),
        ...patient
    }
    patients.push(newPatient);
    return newPatient;
}


export default {
    getPatients,
    addPatient
}