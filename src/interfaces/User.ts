import { User } from '@prisma/client';

export type UserInsertData = Omit<User, 'id'>;

export type UserAuthData = Omit<User, 'id' | 'username' | 'avatar' | 'subtitle'>;

export interface UserLogin {
    id: number;
    username: string;
    avatar: string;
    subtitle: string;
    email: string;
    token: string;
}
