import { Request, Response } from 'express';
import UserService from '../../services/user/user-service';
import { UsersRepository } from '../../dataproviders/repositories/users/users-repository';
import EmailService from '../../services/externals/mail/email-service';

export const UsersController = {
    async getUsers(req: Request, res: Response): Promise<Response> {
        const repository = new UsersRepository();
        const result = await repository.getUsers();
        return res.json({ results: result });
    },

    async createUser(req: Request, res: Response): Promise<Response> {
        const { name, email } = req.body;

        const mailer = new EmailService();
        const repository = new UsersRepository();
        const serivce = new UserService(mailer, repository);
        await serivce.createUser({ name, email });

        return res.status(201).json({
            message: `User ${name} created succesfully!`,
        });
    },
};
