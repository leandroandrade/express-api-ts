import { Router } from 'express';
import { UsersController } from '../../entrypoints/rest/users-controller';

export default (router: Router): void => {
    router.get('/users', UsersController.getUsers);
    router.post('/users', UsersController.createUser);
};
