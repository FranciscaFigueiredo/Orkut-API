import { User } from '@prisma/client';
import NotFoundError from '../errors/NotFoundError';
import { FriendShipRequest } from '../interfaces/Friend';

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

async function createNewFriendshipRequest(friendshipData: FriendShipRequest) {
    const friendshipRequest = await userRepository.createNewFriendshipRequest(friendshipData);

    return friendshipRequest;
}

async function acceptFriendRequest(request: number) {
    const friendshipRequest = await userRepository.findFriendRequestByRequestId(request);

    if (!friendshipRequest) {
        throw new NotFoundError('');
    }

    const friendship = await userRepository.createFriendship(friendshipRequest);

    await userRepository.deleteFriendRequest(request);

    return friendship;
}

export {
    findByEmail,
    findById,
    findFriendsByUserId,
    createNewFriendshipRequest,
    acceptFriendRequest,
};
