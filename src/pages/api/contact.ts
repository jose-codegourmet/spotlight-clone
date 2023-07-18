// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { CONTACTS } from '@/constants/mock-contacts';
import type { NextApiRequest, NextApiResponse } from 'next';

type ReturnData = {
  searched: string;
  results: TContactInfo[];
  total: number;
};

function substringExistsInObject<TObj>(substring: string, obj: TObj): boolean {
  if (obj === null || obj === undefined) {
    return false;
  }

  if (typeof obj === 'string' && obj.toLowerCase().includes(substring)) {
    return true;
  }

  if (typeof obj === 'object') {
    for (let key in obj) {
      if (substringExistsInObject(substring, obj[key])) {
        return true;
      }
    }
  }

  return false;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ReturnData>) {
  const searchTerm = (req.query.search as string) || '';
  const { users } = CONTACTS;

  let results = users.filter((user) => {
    return substringExistsInObject<TContactInfo>(searchTerm, user);
  });

  if (!results || searchTerm === '') {
    results = [];
  }

  res.status(200).json({ searched: searchTerm, results, total: results.length });
}
