import APP_LIST from '@/constants/mock-apps.json';
import { apiHandler } from '@/utils/api/handlers';
import { substringExistsInObject } from '@/utils/api/helpers';
import createHttpError from 'http-errors';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

type GetResponse = {
  contact: TMockApp;
  entity: string;
};

const getApp: NextApiHandler<GetResponse> = async (req, res) => {
  const idToFind = parseInt(req.query.id as string);
  const contact = [...(APP_LIST.applist as TMockApp[])].find((u) => u.id === idToFind);

  if (contact) {
    res.status(200).json({ contact, entity: 'apps' });
  } else {
    throw new createHttpError.NotFound(`App ${idToFind} not found!`);
  }
};

export default apiHandler({
  GET: getApp,
});
