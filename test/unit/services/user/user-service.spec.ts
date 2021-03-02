import faker from 'faker';
import UserService from '../../../../src/services/user/user-service';
import MockEmail from './mock/mock-email';
import MockCreateUser from './mock/mock-create-user';

import { CreateUserRepository } from '../../../../src/dataproviders/repositories/users/create-user-repository';
import { User } from '../../../../src/domain/models/user';

jest.mock('../../../../src/dataproviders/repositories/users/users-repository');

describe('user-services tests', () => {
    it('should create user', async (done) => {
        const mockMail = new MockEmail();
        const mailSpy = jest.spyOn(mockMail, 'sendEmail');

        const mockCreateUser = new MockCreateUser();
        const mockCreateUserSpy = jest.spyOn(mockCreateUser, 'createUser');

        const service = new UserService(mockMail, mockCreateUser);

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
