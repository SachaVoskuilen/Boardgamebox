import { addInteraction } from '@/../prisma/interaction';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  // const session = await getServerSession(req, res, authOptions);

  // if (session) {
  try {
    switch (req.method) {
      case 'GET': {
        const response = 'Cant get interactions for security reasons!';
        return res.json(response);
      }
      case 'POST': {
        const newInteraction = req.body;
        console.log({ POST: newInteraction });
        // const response = await addInteraction(newInteraction);
        return res.json(await addInteraction(newInteraction));
      }
      // case 'DELETE': {
      //   const deleteInteraction = req.body;
      //   const response = await deleteInteraction(req.body);
      //   return res.json(response);
      // }
    }
  } catch (error: any) {
    return res.status(500).json({ ...error, message: error.message });
  }
  // } else {
  //   res.status(401).redirect('/401');
  // }
  res.end();
}
