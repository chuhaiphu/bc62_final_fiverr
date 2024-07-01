import { useMutation } from "@tanstack/react-query"
import { addCommentApi } from "~/apis/add-comment-api"

export const useAddComment = (onSuccess?: () => void, onError?: (error: Error) => void) => {
    return useMutation({
      mutationFn: addCommentApi,
      onSuccess: onSuccess,
      onError: onError
    })
  }