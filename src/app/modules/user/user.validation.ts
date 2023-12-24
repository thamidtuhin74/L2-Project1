import { z } from "zod";

const userValidationSchema = z.object({

  password: z.string({
    invalid_type_error: 'Password Must be String'
  }).min(8,{
    message: 'Password should contain more than 8 character'
  }).optional(), // Assuming a minimum length of 8 for the password

})

export const UserValidation = {
    userValidationSchema,
}