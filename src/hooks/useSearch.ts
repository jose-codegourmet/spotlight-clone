import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

export const API = axios.create({
  baseURL: '/api',
});

export const searchForFn = async (search: string) => {
  const res = await API.get('/contact', {
    params: {
      search,
    },
  });
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
