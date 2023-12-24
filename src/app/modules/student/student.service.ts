import { Student } from "./student.interface";
import { StudentModel } from "./student.model";


const createStudentIntoDB = async (student: Student) =>{
    const result = await StudentModel.create(student);//query on Mongooes
    return result;
}
const getAllStudentFormDB = async () =>{
    const result = await StudentModel.find();
    // console.log(result);
    return result;
}
const getSingleStudentFormDB = async (id : string) =>{
    const result = await StudentModel.findOne({id});
    // console.log(result);
    return result;
}

export const StudentServices = {
    createStudentIntoDB,
    getAllStudentFormDB,
    getSingleStudentFormDB,
}