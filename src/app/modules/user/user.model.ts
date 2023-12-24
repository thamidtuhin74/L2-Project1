import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';

const userSchema = new Schema<TUser>({
    id:{//serever generated -auto 
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    needPasswordChange :{
        type: Boolean,
        default: true,
    },
    role:{
        type: String,
        enum: ['student','faculty','admin']
    },
    status:{
        type: String,
        enum: ['in-progress','blocked'],
        default: "in-progress"
    },
    isDeleted: {
        type: Boolean,
        default: false
    }


},
{
    timestamps: true,
})

export const User = model<TUser>('User',userSchema);//create 'User' collection in database Based on 'userSchema'