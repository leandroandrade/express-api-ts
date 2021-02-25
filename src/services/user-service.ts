import UserRepository, {
    User,
} from '../dataproviders/repositories/users-repository';
import EmailService from './email-service';

export default class UserService {
    async createUser({ name, email }: User) {
        await UserRepository.createUser({ name, email });

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
