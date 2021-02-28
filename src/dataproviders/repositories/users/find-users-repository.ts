import { User } from '../../../domain/models/user';

export interface FindUsersRepository {
    getUsers(): Promise<User[]>;
}
