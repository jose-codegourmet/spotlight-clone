// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import CONTACTS from '@/constants/mock-contacts.json';
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
  const qryLimit = (req.query.limit as string) || '0';
  const parsedLimit = parseInt(qryLimit);

  let count = 0;
  const users = CONTACTS.users as TContactInfo[];

  let results = users.filter((user) => {
    const ifLimitReached = parsedLimit === count;
    if (!ifLimitReached && substringExistsInObject<TContactInfo>(searchTerm as string, user)) {
      count++;
      return true;
    }
  });

  if (!results || searchTerm === '') {
    results = [];
  }

  res.status(200).json({ searched: searchTerm, results, total: results.length });
}
