import { Request, Response } from 'express';
import CreateUserService from '../../services/user/user-service';
import { UsersRepository } from '../../dataproviders/repositories/users/users-repository';
import EmailService from '../../services/externals/mail/email-service';

const getUsers = async (req: Request, res: Response): Promise<Response> => {
    const repository = new UsersRepository();
    const result = await repository.getUsers();
    return res.json({ results: result });
};

const createUser = async (req: Request, res: Response): Promise<Response> => {
    const { name, email } = req.body;

    const mailer = new EmailService();
    const repository = new UsersRepository();

    const serivce = new CreateUserService(mailer, repository);
    await serivce.createUser({ name, email });

    return res.status(201).json({
        message: `User ${name} created succesfully!`,
    });
};

export default {
    getUsers,
    createUser,
};
