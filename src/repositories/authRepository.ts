import { User } from '@prisma/client';
import { prisma } from '../database';
import { UserInsertData } from '../interfaces/User';

async function create({
    username,
    avatar,
    subtitle,
    email,
    password,
}: UserInsertData): Promise<User> {
    const user = await prisma.user.create({
        data: {
            username,
            avatar,
            subtitle,
            email,
            password,
        },
    });

    return user;
}

async function findByEmail(email: string): Promise<User> {
    const user = await prisma.user.findFirst({
        where: { email },
    });

    return user;
}

async function findById(id: number): Promise<User> {
    const user = await prisma.user.findFirst({
        where: { id },
    });

    return user;
}

export {
    create,
    findByEmail,
    findById,
};
