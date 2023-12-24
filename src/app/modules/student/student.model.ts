//schema ->  model

//Schema
import { Schema, model } from 'mongoose';
import { Guardian, LocalGuardian, Student, UserName } from './student.interface';

const userNameSchema =  new Schema<UserName>({
    firstName: {
        type: String, required: true,
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String, required: true,
    }
})

const gurdianSchema = new Schema<Guardian>({
    fatherName: {
        type: String, required: true,
    },
    fatherOccupation: {
        type: String, required: true,
    },
    fatherContactNo: {
        type: String, required: true,
    },
    montherName: {
        type: String, required: true,
    },
    montherOccupation: {
        type: String, required: true,
    },
    montherContactNo: {
        type: String, required: true,
    },
})
const localGurdianSchema = new Schema<LocalGuardian>({
    name: {
        type: String, required: true,
    },
    occupation: {
        type: String, required: true,
    },
    contactNO: {
        type: String, required: true,
    },
    address: {
        type: String, required: true,
    },
})

const studentSchema =  new Schema <Student>({
    id: {type: String},
    name: userNameSchema ,
    gender: ["male","female","Others"],
    dateOfBirth: String,
    email: {
        type: String, required: true,
    },
    contactNumber: {
        type: String, required: true,
    },
    emergencyContactNumber: {
        type: String, required: true,
    },
    bloodGroup: ["A+" , "A-" , "B+" , "B-" , "AB+" , "AB-" , "O+" , "O-"],
    presentAddress: {
        type: String, required: true,
    },
    permanentAddress: {
        type: String, required: true,
    },
    guardian: gurdianSchema,
    localGuardian: localGurdianSchema,
    profileImg:{
        type: String,
    },
    isActive:['active','blocked']

});

export const StudentModel = model<Student>('Student', studentSchema);