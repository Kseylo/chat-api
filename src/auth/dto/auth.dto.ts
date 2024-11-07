import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const LoginDtoSchema = z.object({
  login: z.string().min(3).max(30).trim(),
  password: z.string().min(3).max(30).trim(),
});

export class LoginDto extends createZodDto(LoginDtoSchema) {}
