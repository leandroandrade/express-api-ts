import { CreateUserRepository } from '../../../../../src/dataproviders/repositories/users/create-user-repository';
import { User } from '../../../../../src/domain/models/user';

export default class MockCreateUser implements CreateUserRepository {
    async createUser(user: User): Promise<void> {
    }
}
