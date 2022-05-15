import bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';

import { prisma } from '../../src/database';
import { generateToken } from '../../src/utils/generateToken';

async function createUserBody() {
    const user = {
        username: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        avatar: faker.internet.url(),
    };

    return user;
}

async function createUser() {
    const user = await createUserBody();
    const insertedUser = await prisma.user.create({
        data: {
            username: user.username,
            email: user.email,
            password: bcrypt.hashSync(user.password, 10),
            avatar: user.avatar,
        },
    });
    insertedUser.password = user.password;

    return insertedUser;
}

async function logUser() {
    const insertedUser = await createUser();

    const token = generateToken(insertedUser.id);

    return {
        ...insertedUser,
        token,
    };
}

export {
    createUserBody,
    createUser,
    logUser,
};
