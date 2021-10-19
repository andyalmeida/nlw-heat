import { Request, Response } from 'express';

import { AuthenticateUserService } from '../services/AuthenticateUserService';

class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    const { code } = req.body;

    try {
      const service = new AuthenticateUserService();
      const result = await service.execute(code);

      return res.json(result);
    } catch (err) {
      return res.status(401).json({ error: err.message });
    }
  }
}

export { AuthenticateUserController }