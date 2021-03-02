import { CreateUserRepository } from '../../../../../src/domain/data/users/create-user-repository';
import { User } from '../../../../../src/domain/models/user';

export class MockCreateUser implements CreateUserRepository {
    async createUser(user: User): Promise<void> {
    }
}
