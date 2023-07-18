// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import CONTACTS from '@/constants/mock-contacts.json';
import type { NextApiRequest, NextApiResponse } from 'next';

type ReturnData = TContactInfo;

export default function handler(req: NextApiRequest, res: NextApiResponse<ReturnData>) {
  console.log('req === ', req);
  const idToFind = parseInt(req.query.id as string);
  const users: TContactInfo[] = [...CONTACTS.users];
  const contact = users.find((u) => u.id === idToFind);

  if (contact) {
    res.status(200).json(contact);
  } else {
    res.status(400).json({ error: `${idToFind} does not exist` });
  }
}
