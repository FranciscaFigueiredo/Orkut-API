import { Request, Response } from 'express';
import { UserAuthData, UserInsertData } from '../interfaces/User';
import * as authService from '../services/authService';

async function signUp(req: Request, res: Response): Promise<Response> {
    const {
        username,
        avatar,
        subtitle,
        email,
        password,
    }: UserInsertData = req.body;

    const user = await authService.registration({
        username,
        avatar,
        subtitle,
        email,
        password,
    });

    return res.status(201).send(user);
}

async function login(req: Request, res: Response): Promise<Response> {
    const {
        email,
        password,
    }: UserAuthData = req.body;

    const user = await authService.authentication({
        email,
        password,
    });

    return res.status(200).send(user);
}

async function getUserInfo(req: Request, res: Response): Promise<Response> {
    const userId = res.locals.user;

    const token = await authService.findById(userId);

    return res.status(200).send(token);
}

export {
    signUp,
    login,
    getUserInfo,
};
