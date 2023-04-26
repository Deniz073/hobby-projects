import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import useSWR from 'swr'
import axios from '@/lib/axios'

type User = {
  id: number,
  name: string,
  email: string,
  email_verified_at: string | null,
}

type AuthHook = {
  user: User | undefined | { user: User } | void,
  register: (params: any) => Promise<void>,
  login: (params: any) => Promise<void>,
  logout: () => Promise<void>,
}

type UseAuthProps = {
  middleware: 'auth' | 'guest',
  redirectIfAuthenticated?: string,
}

type UseAuthReturnType = AuthHook

export const useAuth = ({ middleware, redirectIfAuthenticated }: UseAuthProps): UseAuthReturnType => {
  const router = useRouter()

  const { data: user, error, mutate } = useSWR('/api/user', () =>
    axios
      .get<{ user: User }>('/api/user')
      .then(res => res.data)
      .catch(error => {
        if (error.response?.status !== 409) throw error
        router.push('/verify-email')
      }),
  )

  const csrf = () => axios.get('/sanctum/csrf-cookie')

  const register = async ({ setErrors, ...props }: any) => {
    await csrf()
    setErrors([])

    axios
      .post('/register', props)
      .then(() => mutate())
      .catch(error => {
        if (error.response?.status !== 422) throw error
        setErrors(error.response.data.errors)
      })
  }

  const login = async ({ setErrors, setStatus, ...props }: any) => {
    await csrf()
    setErrors([])
    setStatus(null)

    axios
      .post('/login', props)
      .then(() => mutate())
      .catch(error => {
        console.log(error)
        if (error.response?.status !== 422) throw error
        setErrors(error.response.data.errors)
      })
  }


  const logout = async () => {
    if (!error) {
      await axios.post('/logout').then(() => mutate())
    }

    window.location.pathname = '/auth/login'
  }


useEffect(() => {
  if (middleware === 'guest' && redirectIfAuthenticated && user)
    router.push(redirectIfAuthenticated)

  if (middleware === 'auth' && error) logout()
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])


  return {
    user,
    register,
    login,
    logout,
  }
}