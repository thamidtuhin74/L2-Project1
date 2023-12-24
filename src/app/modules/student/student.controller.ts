import { Request, Response } from "express";
import { StudentServices } from "./student.service";

//controller will only do -> Application Loading -> Req & Res

const createStudent =  async (req: Request, res: Response) =>{
    try {
        const {student : studentData} = req.body;
        // will col service function & send student 
        const result  = await StudentServices.createStudentIntoDB(studentData);

        //send response
        res.status(200).json({
            success: true,
            message: "Student is created Sucessfully",
            data: result
        })
    } catch (error) {
        console.log(error);
    }   
}
const getAllStudents = async (req: Request, res: Response)=>{
    try {
        const result = await StudentServices.getAllStudentFormDB();
        console.log(result);
        
        res.status(200).json({
            success: true,
            message: 'All students fetched successfully',
            data: result,
        })
        
    } catch (error) {
        console.log(error)
    }
}

const getSingleStudents = async (req: Request, res: Response)=>{
    try {
        const {studentId} =  req.params;
        const result = await StudentServices.getSingleStudentFormDB(studentId);
        // console.log(result);
        
        res.status(200).json({
            success: true,
            message: 'All students fetched successfully',
            data: result,
        })
        
    } catch (error) {
        console.log(error)
    }
}

export const StudentController = {
    createStudent,
    getAllStudents,
    getSingleStudents,
}