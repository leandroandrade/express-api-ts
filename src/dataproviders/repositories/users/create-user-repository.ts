import { User } from '../../../domain/models/user';

export interface CreateUserRepository {
    createUser(user: User): Promise<void>;
}
