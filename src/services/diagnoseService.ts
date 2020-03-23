import diagnoses from '../../data/diagnoses'
import { Diagnose } from '../../types'

const diagnoseList: Array<Diagnose> = diagnoses as Array<Diagnose>;

const getDiagnoses = (): Array<Diagnose> => {
    return diagnoseList;
}


export default {
    getDiagnoses
}