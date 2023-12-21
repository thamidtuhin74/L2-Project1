import { Schema, model, connect } from 'mongoose';

export type Guardian = {
    fatherName: string;
    fatherOccupation: string;
    fatherContactNo: string;
    montherName: string;
    montherOccupation: string;
    montherContactNo: string;
}

export type LocalGuardian = {
    name: string;
    occupation: string;
    contactNO: string;
    address: string;
}

export type UserName = {
    firstName: string;
    middleName: string;
    lastName: string;
};

export type Student = {
    name: UserName;
    gender: "male"|"female"|"Others";
    dateOfBirth: string;
    email: string;
    contactNumber: string;
    emergencyContactNumber: string;
    bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
    presentAddress: string;
    permanentAddress: string;
    guardian: Guardian;
    localGuardian : LocalGuardian;
    profileImg?: string;
    isActive: 'active'|'inactive'
  }