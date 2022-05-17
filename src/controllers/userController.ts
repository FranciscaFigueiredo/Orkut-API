import { Request, Response } from 'express';
import * as userService from '../services/userService';

async function getUserInfo(req: Request, res: Response): Promise<Response> {
    const userId = res.locals.user;

    const token = await userService.findById(userId);

    return res.status(200).send(token);
}

async function getUserFriends(req: Request, res: Response): Promise<Response> {
    const userId = res.locals.user;

    const friends = await userService.findFriendsByUserId(userId);

    return res.status(200).send(friends);
}

async function postNewFriendshipRequest(req: Request, res: Response): Promise<Response> {
    const sender = res.locals.user;
    
    const { recipient } = req.params;

    const friends = await userService.createNewFriendshipRequest(Number(recipient), sender);

    return res.status(200).send(friends);
}

export {
    getUserInfo,
    getUserFriends,
};
