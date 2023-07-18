import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

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

  const res = await API.get('/contact', qryConf);
  return res.data;
};

const useSearch = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isSuccess, isError, data } = useMutation(searchForFn, {
    onSuccess: (data, variables, context) => {
      queryClient.setQueryData(['search', { searched: variables }], data);
      return data;
    },
  });
  return { mutate, isLoading, isSuccess, isError, data };
};

export default useSearch;
