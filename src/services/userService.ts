import { User } from '@prisma/client';

import * as authRepository from '../repositories/authRepository';
import * as userRepository from '../repositories/userRepository';

async function findByEmail(email: string): Promise<User> {
    const searchByEmail = await authRepository.findByEmail(email);

    return searchByEmail;
}

async function findById(id: number): Promise<User> {
    const user = await authRepository.findById(id);

    return user;
}

async function findFriendsByUserId(id: number) {
    const friends = await userRepository.findUserFriends(id);

    return friends;
}

async function createNewFriendshipRequest(recipient: number, sender: number) {
    const friendshipRequest = await userRepository.createNewFriendshipRequest(recipient, sender);

    return friendshipRequest;
}

export {
    findByEmail,
    findById,
    findFriendsByUserId,
    createNewFriendshipRequest,
};
