import { User } from '../../../domain/models/user';
import { CreateUserRepository } from '../../../domain/data/users/create-user-repository';
import { FindUsersRepository } from '../../../domain/data/users/find-users-repository';

const users: User[] = [{ name: 'John', email: 'john@test.com', id: 1 }];

export class UsersRepository
    implements CreateUserRepository, FindUsersRepository {
    async getUsers(): Promise<User[]> {
        return users;
    }

    async createUser(user: User): Promise<void> {
        const id = Math.floor(Math.random() * 9999) + 1;

        users.push({ ...user, id });
    }
}
