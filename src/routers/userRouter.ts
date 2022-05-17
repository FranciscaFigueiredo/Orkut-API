import { Router } from 'express';

import * as userController from '../controllers/userController';
import { auth } from '../middlewares/authMiddleware';

const router = Router();

router.get('/users', auth, userController.getUserInfo);
router.get('/users/friends', auth, userController.getUserFriends);
router.post('/users/:recipient/friendship', auth, userController.getUserFriends);

export default router;
