import { prisma } from "../database";
import { FriendShipRequest } from "../interfaces/Friend";

async function findUserFriends(id: number) {
    const friends = await prisma.friendship.findMany({
        select: {
            friend: {
                select: {
                    id: true,
                    username: true,
                    avatar: true,
                }
            },
        },
        where: { userId: id },
    });

    return friends;
}

async function createNewFriendshipRequest(friendshipRequestData: FriendShipRequest) {
    const friendshipRequest = await prisma.friendshipRequest.create({
        data: friendshipRequestData,
    });
    
    return friendshipRequest;
}

async function deleteFriendRequest(friendRequest: number) {
    const friendshipRequest = await prisma.friendshipRequest.delete({
        where: {
            id: friendRequest,
        },
    });
    
    return friendshipRequest;
}

async function findFriendRequestByRequestId(friendRequest: number) {
    const friendshipRequest = await prisma.friendshipRequest.findFirst({
        where: {
            id: friendRequest,
        },
    });
    
    return friendshipRequest;
}

async function createFriendship(friendshipData: FriendShipRequest) {
    const friendshipRequest = await prisma.friendship.create({
        data: {
            userId: friendshipData.sender,
            friendId: friendshipData.recipient,
        },
    });
    
    return friendshipRequest;
}

async function findUsers(username: string) {
    const users = await prisma.user.findMany({
        where: {
            username: {
                contains: username,
                mode: 'insensitive',
            },
        },
        select: {
            id: true,
            username: true,
            avatar: true,
        }
    });
    
    return users;
}

export {
    findUserFriends,
    createNewFriendshipRequest,
    deleteFriendRequest,
    findFriendRequestByRequestId,
    createFriendship,
    findUsers,
};