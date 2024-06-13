import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { loginApi, signUpApi } from '~/apis/user-api'
import { User } from '~/types/User.type'

export const useLogin = (onSuccess?: (data: User) => void, onError?: (error: Error) => void) => {
  return useMutation({
    mutationFn: loginApi,
    onSuccess: onSuccess,
    onError: onError
  })
}

export const useSignUp = (onSuccess?: (data: User) => void, onError?: (error: Error) => void) => {
  return useMutation({
    mutationFn: signUpApi,
    onSuccess: onSuccess,
    onError: onError
  })
}