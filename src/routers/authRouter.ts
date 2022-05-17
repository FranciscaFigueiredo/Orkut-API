import { Router } from 'express';

import * as authController from '../controllers/authController';

import { validateSchemaMiddleware } from '../middlewares/validateSchemaMiddleware';
import { loginSchema, signUpSchema } from '../schemas/userSchema';

const router = Router();

router.post('/users/registration', validateSchemaMiddleware(signUpSchema), authController.signUp);
router.post('/users/authentication', validateSchemaMiddleware(loginSchema), authController.login);

export default router;
