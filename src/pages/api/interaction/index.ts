import { addInteraction } from '@/../prisma/interaction';
import { authOptions } from '@/server/auth';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    try {
      switch (req.method) {
        case 'GET': {
          const response = 'Cant get interactions for security reasons!';
          return res.json(response);
        }
        case 'POST': {
          let newInteraction = await JSON.parse(req.body);
          newInteraction.userId = session.user.id;
          const response = await addInteraction(newInteraction);
          return res.json(response);
        }
        // case 'DELETE': {
        //   const deleteInteraction = req.body;
        //   const response = await deleteI nteraction(req.body);
        //   return res.json(response);
        // }
      }
    } catch (error: any) {
      return res.status(500).json({ ...error, message: error.message });
    }
  } else {
    return res.json({ message: 'Not logged in' });
  }
  res.end();
}
