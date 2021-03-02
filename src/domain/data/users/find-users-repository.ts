import { User } from '../../models/user';

export interface FindUsersRepository {
    getUsers(): Promise<User[]>;
}
