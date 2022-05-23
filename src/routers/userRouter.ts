import { Router } from 'express';

import * as userController from '../controllers/userController';
import { auth } from '../middlewares/authMiddleware';

const router = Router();

router.get('/users', auth, userController.getUserInfo);
router.get('/users/list', auth, userController.getUsersData);
router.get('/users/:id/friends', auth, userController.getUserFriends);
router.post('/users/:recipient/friendship', auth, userController.postNewFriendshipRequest);
router.get('/users/:user/friendship', auth, userController.getFriendshipRequest);
router.get('/users/:user/friends/:friend', auth, userController.getFriendship);
router.post('/friends/friendship/:request', auth, userController.acceptFriendshipRequest);
router.get('/users/:id', auth, userController.getUserProfile);

export default router;
