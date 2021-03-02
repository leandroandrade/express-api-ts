import { CreateUserRepository } from '../../../../../src/domain/dataproviders/users';
import { User } from '../../../../../src/domain/models/user';

export class MockCreateUserSpy implements CreateUserRepository {
    async createUser(user: User): Promise<void> {}
}
