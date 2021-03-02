import { User } from '../../models/user';

export interface CreateUserRepository {
    createUser(user: User): Promise<void>;
}
