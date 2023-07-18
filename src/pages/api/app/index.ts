import APP_LIST from '@/constants/mock-apps.json';
import { apiHandler } from '@/utils/api/handlers';
import { substringExistsInObject } from '@/utils/api/helpers';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

type GetResponse = {
  searched: string;
  results: TMockApp[];
  entity: string;
  total: number;
};

const getApps: NextApiHandler<GetResponse> = async (req, res) => {
  const { search, limit } = req.query;
  const searched = search as string;
  const parsedLimit = parseInt(limit as string);

  const apps = APP_LIST.applist as TMockApp[];

  let results = apps.filter((app) => substringExistsInObject<TMockApp>(searched, app));

  if (!results || search === '') {
    results = [];
  }

  if (!search) {
    results = apps;
  }

  if (parsedLimit) {
    results = results.slice(0, parsedLimit);
  }

  res.status(200).json({ searched, results, total: results.length, entity: 'apps' });
};

export default apiHandler({
  GET: getApps,
});
