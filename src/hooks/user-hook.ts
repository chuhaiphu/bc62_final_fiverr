import { useMutation, UseMutationOptions, useQuery } from '@tanstack/react-query'
import { getAllUsersApi, getAllUsersByPageIndex, loginApi, signUpApi } from '~/apis/user-api'
import { User } from '~/types/User.type'

export const useLogin = (onSuccess?: (data: User) => void, onError?: (error: Error) => void) => {
  return useMutation({
    mutationFn: loginApi,
    onSuccess: onSuccess,
    onError: onError
  })
}

export const useSignUp = (onSuccess?: () => void, onError?: (error: Error) => void) => {
  return useMutation({
    mutationFn: signUpApi,
    onSuccess: onSuccess,
    onError: onError
  })
}

export const useGetAllUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: getAllUsersApi
  })
}

export const useGetAllUsersByPageIndex = (pageIndex: number) => {
  return useQuery({
    queryKey: ['users', pageIndex],
    queryFn: () => getAllUsersByPageIndex(pageIndex)
  })
}