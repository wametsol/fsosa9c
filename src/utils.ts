import { NewPatient, Gender, Entry, EntryType } from '../types';


export const toNewPatient = (object: any): NewPatient =>{
    return {
        name: parseName(object.name),
        dateOfBirth: parseDate(object.dateOfBirth),
        gender: parseGender(object.gender),
        ssn: parseSsn(object.ssn),
        occupation: parseOccupation(object.occupation),
        entries: parseEntries(object.entries)
    }
}

export const toEntry = (object: any): Entry => {
    console.log(object.type)
    if (!object.type || !object.description || !object.date || !object.specialist ){
        throw new Error('Incorrect or missing details for entry: '+ object)
    }
    if (object.type==="Hospital" && !object.discharge){
        throw new Error('Incorrect or missing discharge for HospitalEntry: '+object)
    }
    if (object.type==="OccupationalHealthcare" && !object.employerName){
        throw new Error('Incorrect or missing employerName for OccupationEntry: '+object)
    }
    if (object.type==="HealthCheck" && !object.healthCheckRating){
        throw new Error('Incorrect or missing healthcheckrating for HealthCheckEntry: '+object)
    }
    return object

}

const parseEntryStrings = (object: any): Entry => {
    if(!isType(object.type) || !object.id || !isString(object.id) || !isString(object.description) || !isDate(object.date) || !isString(object.specialist)){
        throw new Error('Incorrect or missing entry: '+ object)
    }
    return object;
} 

const isType = (param: any): param is EntryType => {
    return Object.values(EntryType).includes(param);

}

const isString = (text: any): text is string => {
    return typeof text === 'string' || text instanceof String;
}

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
}

const isGender = (param: any): param is Gender => {
    return Object.values(Gender).includes(param);
}

const parseName = (name: any): string => {
    if(!name || !isString(name)){
        throw new Error('Incorrect or missing name: '+ name);
    }
    return name;
}

const parseEntries = (entries: any): [] => {
    if (!entries){
        return []
    } else {
        entries.forEach((entry: any) => {
            toEntry(entry)
        });
        return entries
    }
}

const parseGender = (gender: any): Gender => {
    if(!gender || !isGender(gender)){
        throw new Error('Incorrect or missing gender: ' + gender)
    }
    return gender;
}

const parseSsn = (ssn: any): string => {
    if(!ssn || !isString(ssn)){
        throw new Error('Incorrect or missing ssn: '+ ssn);
    }
    return ssn;
}

const parseOccupation = (occupation: any): string => {
    if(!occupation || !isString(occupation)){
        throw new Error('Incorrect or missing occupation: '+ occupation);
    }
    return occupation;
}

const parseDate = (date: any): string => {
    if(!date || !isString(date) || !isDate(date)){
        throw new Error('Incorrect or missing date: '+ date);
    }
    return date;
}



