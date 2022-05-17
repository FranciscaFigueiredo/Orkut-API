import { prisma } from "../database";

async function findUserFriends(id: number) {
    const friends = await prisma.friendship.findMany({
        include: {
            users: {
                where: { id },
            }
        },
        where: { userId: id },
    });

    return friends;
}

async function createNewFriendshipRequest(recipient: number, sender: number) {
    const friendshipRequest = await prisma.friendshipRequest.create({
        data: {
            recipient,
            sender,
        }
    });

    return friendshipRequest;
}

export {
    findUserFriends,
    createNewFriendshipRequest,
};