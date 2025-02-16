import { z } from 'zod';



const userUpdateNameSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First Name is required')
    .max(20, 'Name cannot be more than 20 characters')
    .trim()
    .optional(),
  lastName: z
    .string()
    .min(1, 'Last Name is required')
    .max(20, 'Name cannot be more than 20 characters')
    .trim()
    .optional(),
});

// const imageFileSchema = z.object({
//   fieldname: z.string().min(1, 'Fieldname is required'),
//   originalname: z.string().min(1, 'Original name is required'),
//   encoding: z.string().min(1, 'Encoding is required'),
//   mimetype: z.string().min(1, 'Mimetype is required'),
//   path: z.string().min(1, 'Path is required'),
//   size: z.number().min(1, 'File size must be greater than 0'),
//   filename: z.string().min(1, 'Filename is required'),
// });

const userValidationSchema = z.object({
  body: z.object({
    username: z.string().min(1, 'Username is required').trim(),
    email: z
      .string()
      .email('Invalid email format')
      .min(1, 'Email is required')
      .trim(),
    password: z
      .string()
      .min(1, 'Password is required')
      .max(20, { message: 'Password can not be more than 20 characters' })
      .trim()
      .optional(),
  }),
});

const userUpdateValidationSchema = z.object({
  body: z.object({
    name: userUpdateNameSchema.optional(),
    bio: z.string().optional(),
    phone: z.string().optional(),
    address: z.string().optional(),
  }),
});

const changeStatusValidationSchema = z.object({
  body: z.object({
    status: z.enum(['in-progress', 'active', 'blocked'] as [
      string,
      ...string[],
    ]),
  }),
});

export const UserValidation = {
  userValidationSchema,
  changeStatusValidationSchema,
  userUpdateValidationSchema,
};
