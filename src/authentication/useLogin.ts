import { AppDispatch, RootState } from '../state/store'
import { logIn, logOut } from '../state/authSlice'
import { useDispatch, useSelector } from 'react-redux'

import { User } from '../state/Types'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

const login = async ({ username, password }: User) => {
  const res = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })

  if (!res.ok) {
    throw new Error(res.statusText)
  }

  return res.json()
}

function useGetData(token: string | null) {
  return useQuery({
    queryKey: ['getUser', token],
    queryFn: async ({ queryKey }) => {
      const [, token] = queryKey
      if (!token) {
        throw new Error('Token is not available')
      }

      const res = await fetch('https://dummyjson.com/auth/me', {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      })

      if (!res.ok) {
        throw new Error(res.statusText)
      }

      return res.json()
    },
  })
}

export function useLogin() {
  const dispatch = useDispatch<AppDispatch>()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const log = async ({ username, password }: User) => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await login({ username, password })
      localStorage.setItem('token', response.accessToken)
      dispatch(logIn(response))
      setIsLoading(false)
      return response
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error('An unknown error occurred')
      )
      setIsLoading(false)
      throw err
    }
  }
  const token = useSelector((state: RootState) => state.authReducer.accessToken)
  const user = useGetData(token)

  return { log, isLoading, error, user }
}

export function useLogout() {
  const dispatch = useDispatch<AppDispatch>()
  return () => {
    dispatch(logOut())
  }
}
