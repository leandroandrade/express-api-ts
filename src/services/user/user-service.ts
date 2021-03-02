import { User } from '../../domain/models/user';
import Mail from '../externals/mail';
import { CreateUserRepository } from '../../dataproviders/repositories/users/create-user-repository';

export default class UserService {
    constructor(
        private readonly mail: Mail,
        private readonly repository: CreateUserRepository
    ) {}

    async createUser({ name, email }: User): Promise<void> {
        await this.repository.createUser({ name, email });

        await this.mail.sendEmail({
            to: { name, email },
            message: {
                subject: 'User created',
                body: 'Congrats!!! Account created!',
            },
        });
    }
}
