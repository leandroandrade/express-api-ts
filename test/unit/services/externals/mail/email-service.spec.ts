import faker from 'faker';
import EmailService from '../../../../../src/services/externals/mail/email-service';

describe('email-services tests', () => {
    it('should send email', async (done) => {
        const emailService = new EmailService();
        await emailService.sendEmail({
            to: { name: faker.name.findName(), email: faker.internet.email() },
            message: {
                subject: 'User created',
                body: 'Congrats!!! Account created!',
            },
        });
        done();
    });
});
