import EmailService from '../email-service';
import { User } from '../../domain/models/user';
import { UsersRepository } from '../../dataproviders/repositories/users/users-repository';

export default class UserService {
    async createUser({ name, email }: User): Promise<void> {
        const repository = new UsersRepository();
        await repository.createUser({ name, email });

        const emailService = new EmailService();
        await emailService.sendEmail({
            to: { name, email },
            message: {
                subject: 'User created',
                body: 'Congrats!!! Account created!',
            },
        });
    }
}
