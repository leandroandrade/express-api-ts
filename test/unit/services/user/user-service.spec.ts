import faker from 'faker';
import UserService from '../../../../src/services/user/user-service';
import Mail, { MessageDTO } from '../../../../src/services/externals/mail';

jest.mock('../../../../src/dataproviders/repositories/users/users-repository');

class MockEmail implements Mail {
    async sendEmail({ to, message }: MessageDTO): Promise<void> {
        console.log(to, message);
    }
}

describe('user-services tests', () => {
    it('should create user', async (done) => {
        const mockMail = new MockEmail();
        const mailSpy = jest.spyOn(mockMail, 'sendEmail');

        const service = new UserService(mockMail);

        const mockData = {
            name: faker.name.findName(),
            email: faker.internet.email(),
        };
        await service.createUser(mockData);

        expect(mailSpy).toHaveBeenCalledTimes(1);
        expect(mailSpy).toHaveBeenCalledWith({
            to: { name: mockData.name, email: mockData.email },
            message: {
                subject: 'User created',
                body: 'Congrats!!! Account created!',
            },
        });
        done();
    });
});
