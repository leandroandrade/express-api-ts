import { User } from '../../domain/models/user';
import { UsersRepository } from '../../dataproviders/repositories/users/users-repository';
import Mail from '../externals/mail';

export default class UserService {
    constructor(private readonly mail: Mail) {}

    async createUser({ name, email }: User): Promise<void> {
        const repository = new UsersRepository();
        await repository.createUser({ name, email });

        await this.mail.sendEmail({
            to: { name, email },
            message: {
                subject: 'User created',
                body: 'Congrats!!! Account created!',
            },
        });
    }
}
