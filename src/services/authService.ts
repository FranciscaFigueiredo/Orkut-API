import { User } from '@prisma/client';
import bcrypt from 'bcrypt';

import ConflictError from '../errors/ConflictError';
import UnauthorizedError from '../errors/UnauthorizedError';

import { UserAuthData, UserInsertData, UserLogin } from '../interfaces/User';
import * as authRepository from '../repositories/authRepository';
import { generateToken } from '../utils/generateToken';

async function findByEmail(email: string): Promise<User> {
    const searchByEmail = await authRepository.findByEmail(email);

    return searchByEmail;
}

async function findById(id: number): Promise<User> {
    const user = await authRepository.findById(id);

    return user;
}

async function registration(createUser: UserInsertData): Promise<User> {
    const {
        username,
        avatar,
        subtitle,
        email,
        password,
    } = createUser;

    const searchByEmail = await findByEmail(email);

    if (searchByEmail) {
        throw new ConflictError('This email already exists');
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const userCreated = await authRepository.create({
        username,
        avatar,
        subtitle,
        email,
        password: hashedPassword,
    });

    return userCreated;
}

async function authentication(authUserInfo: UserAuthData): Promise<UserLogin> {
    const {
        email,
        password,
    } = authUserInfo;

    const user = await findByEmail(email);

    if (!user) {
        throw new UnauthorizedError('Incorrect email or password');
    }

    const isAuthorized = bcrypt.compareSync(password, user.password);

    if (!isAuthorized) {
        throw new UnauthorizedError('Incorrect email or password');
    }

    const token = generateToken(user.id);

    return {
        id: user.id,
        username: user.username,
        avatar: user.avatar,
        subtitle: user.subtitle,
        email: user.email,
        token,
    };
}

export {
    findByEmail,
    findById,
    registration,
    authentication,
};
