// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import CONTACTS from '@/constants/mock-contacts.json';
import { apiHandler } from '@/utils/api/handlers';
import { substringExistsInObject } from '@/utils/api/helpers';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

type GetResponse = {
  searched: string;
  results: TContactInfo[];
  entity: string;
  total: number;
};

const getContact: NextApiHandler<GetResponse> = async (req, res) => {
  const { search, limit } = req.query;
  const searched = search as string;
  const parsedLimit = parseInt(limit as string);

  const users = CONTACTS.users as TContactInfo[];

  let results = users.filter((user) => substringExistsInObject<TContactInfo>(searched, user));

  if (!results || search === '') {
    results = [];
  }

  if (!search) {
    results = users;
  }

  if (parsedLimit) {
    results = results.slice(0, parsedLimit);
  }

  res.status(200).json({ searched, results, total: results.length, entity: 'contact' });
};

export default apiHandler({
  GET: getContact,
});
