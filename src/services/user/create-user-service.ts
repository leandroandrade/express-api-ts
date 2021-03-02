import { User } from '../../domain/models/user';
import Mail from '../externals/mail';
import { CreateUserRepository } from '../../domain/data/users';

export class CreateUserService {
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
