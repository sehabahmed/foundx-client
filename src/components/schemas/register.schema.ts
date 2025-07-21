import z from "zod";

const registerValidationSchema = z.object({
  name: z.string("Please enter a valid email").trim(),
  email: z.string().trim().email("Please enter a valid email"),
  mobileNumber: z.string("Please Enter a valid Mobile Number").trim(),
  password: z.string().trim().min(6, "Password must be at least 6 characters"),
});

export default registerValidationSchema;
