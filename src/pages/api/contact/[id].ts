import CONTACTS from '@/constants/mock-contacts.json';
import { apiHandler } from '@/utils/api/handlers';
import { substringExistsInObject } from '@/utils/api/helpers';
import createHttpError from 'http-errors';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

type GetResponse = {
  contact: TContactInfo;
  entity: string;
};

const getContact: NextApiHandler<GetResponse> = async (req, res) => {
  const idToFind = parseInt(req.query.id as string);
  const contact = [...(CONTACTS.users as TContactInfo[])].find((u) => u.id === idToFind);

  if (contact) {
    res.status(200).json({ contact, entity: 'contact' });
  } else {
    throw new createHttpError.NotFound(`User ${idToFind} not found!`);
  }
};

export default apiHandler({
  GET: getContact,
});
