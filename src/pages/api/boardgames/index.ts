import { addBoardGames, getAllBoardGames } from '@/../prisma/boardgame';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case 'GET': {
        const response = await getAllBoardGames();
        return res.json(response);
      }
      case 'POST': {
        const newBoardgames = req.body;
        const response = await addBoardGames(JSON.parse(newBoardgames));
        return res.json(response);
      }
    }
  } catch (error: any) {
    return res.status(500).json({ ...error, message: error.message });
  }
}
