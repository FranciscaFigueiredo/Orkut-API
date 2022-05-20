import { Request, Response } from 'express';
import * as userService from '../services/userService';

async function getUserInfo(req: Request, res: Response): Promise<Response> {
    const userId = res.locals.user;

    const token = await userService.findById(userId);

    return res.status(200).send(token);
}

async function getUserProfile(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const user = await userService.findById(Number(id));

    return res.status(200).send(user);
}

async function getUserFriends(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const userId = res.locals.user;

    const friends = await userService.findFriendsByUserId(Number(id) | userId);

    return res.status(200).send(friends);
}

async function postNewFriendshipRequest(req: Request, res: Response): Promise<Response> {
    const sender = res.locals.user;
    
    const { recipient } = req.params;

    const friendshipRequest = await userService.createNewFriendshipRequest({recipient: Number(recipient), sender});

    return res.status(200).send(friendshipRequest);
}

async function acceptFriendshipRequest(req: Request, res: Response): Promise<Response> {
    const { request } = req.params;

    const friendship = await userService.acceptFriendRequest(Number(request));

    return res.status(200).send(friendship);
}

export {
    getUserInfo,
    getUserProfile,
    getUserFriends,
    postNewFriendshipRequest,
    acceptFriendshipRequest,
};
