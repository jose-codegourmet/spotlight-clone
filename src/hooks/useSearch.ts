import axios from 'axios';
import { useMutation } from 'react-query';

export const API = axios.create({
  baseURL: '/api',
});

export const searchForFn = async (search: string) => {
  let qryConf: {
    params: {
      search?: string;
      limit?: number;
    };
  } = {
    params: {
      limit: 3,
    },
  };

  if (search) {
    qryConf.params = {
      search,
      ...qryConf.params,
    };
  }

  const contactReq = API.get('/contact', qryConf);
  const appsReq = API.get('/app', qryConf);

  const res = await Promise.all([contactReq, appsReq]).then(([contactRes, appRes]) => {
    return {
      data: {
        apps: {
          ...appRes.data,
        },
        contacts: {
          ...contactRes.data,
        },
      },
    };
  });

  return res.data;
};

const useSearch = () => {
  const { mutate, isLoading, isSuccess, isError, data } = useMutation(searchForFn);
  return { mutate, isLoading, isSuccess, isError, data };
};

export default useSearch;
