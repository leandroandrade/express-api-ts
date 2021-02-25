import { User } from '../../domain/models/user';

const users: User[] = [{ id: 1, name: 'John', email: 'john@test.com' }];

class UsersRepository {
    async getUsers(): Promise<User[]> {
        return users;
    }

    async createUser(user: User): Promise<void> {
        const id = Math.floor(Math.random() * 9999) + 1;
        users.push({ ...user, id });
    }
}

export default new UsersRepository();
