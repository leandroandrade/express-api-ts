import { Request, Response } from 'express';
import UserService from '../../services/user-service';
import { UsersRepository } from '../../dataproviders/repositories/users-repository';

class UsersController {
    async getUsers(req: Request, res: Response) {
        const result = await UsersRepository.getUsers();
        return res.json({ results: result });
    }

    async createUser(req: Request, res: Response) {
        const { name, email } = req.body;

        const serivce = new UserService();
        await serivce.createUser({ name, email });

        return res.status(201).json({
            message: `User ${name} created succesfully!`,
        });
    }
}

export default new UsersController();
