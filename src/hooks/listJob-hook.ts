import { listjobApi } from '~/apis/listJob-api';
import { MenuLoaiCongViec } from '~/types/MenuLoaiCongViec.type';
import { useQuery } from '@tanstack/react-query';


export const useListJob = () => {
    return useQuery<MenuLoaiCongViec[], Error>({
      queryKey: ['list-job'],
      queryFn: listjobApi,
    });
  };