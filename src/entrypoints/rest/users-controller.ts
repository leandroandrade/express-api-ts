import { Request, Response } from 'express';
import UserService from '../../services/user/user-service';
import { UsersRepository } from '../../dataproviders/repositories/users/users-repository';

export const UsersController = {
    async getUsers(req: Request, res: Response) {
        const repository = new UsersRepository();
        const result = await repository.getUsers();
        return res.json({ results: result });
    },

    async createUser(req: Request, res: Response) {
        const { name, email } = req.body;

        const serivce = new UserService();
        await serivce.createUser({ name, email });

        return res.status(201).json({
            message: `User ${name} created succesfully!`,
        });
    },
};
