import { useQuery } from "@tanstack/react-query"
import { getAllJobTypesApi, getAllJobsApi, getAllServicesApi } from "~/apis/job-api"

export const useGetAllJobs = () => {
  return useQuery({
    queryKey: ['jobs'],
    queryFn: getAllJobsApi
  })
}

export const useGetAllJobTypes = () => {
  return useQuery({
    queryKey: ['jobTypes'],
    queryFn: getAllJobTypesApi
  })
}

export const useGetAllServices = () => {
  return useQuery({
    queryKey: ['services'],
    queryFn: getAllServicesApi
  })
}