import faker from 'faker';
import { CreateUserService } from '../../../../src/services/user';
import { MockEmailSpy, MockCreateUserSpy } from './mocks';

describe('user-services tests', () => {
    it('should create user', async (done) => {
        const mockMail = new MockEmailSpy();
        const mailSpy = jest.spyOn(mockMail, 'sendEmail');

        const mockCreateUser = new MockCreateUserSpy();
        const mockCreateUserSpy = jest.spyOn(mockCreateUser, 'createUser');

        const service = new CreateUserService(mockMail, mockCreateUser);

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

        expect(mockCreateUserSpy).toHaveBeenCalledTimes(1);
        expect(mockCreateUserSpy).toHaveBeenCalledWith(mockData);

        done();
    });
});
