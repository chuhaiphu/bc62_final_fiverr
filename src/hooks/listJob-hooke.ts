import { listjobApi } from '~/apis/list-job';
import { MenuLoaiCongViec } from '~/types/MenuLoaiCongViec.type';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';


export const useListJob = () => {
    return useQuery<MenuLoaiCongViec[], Error>({
      queryKey: ['list-job'],
      queryFn: listjobApi,
    });
  };