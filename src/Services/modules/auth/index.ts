import { api } from '@/Services/api'
import login from './login'
import register from './register'

export const userApi = api.injectEndpoints({
  endpoints: build => ({
    login: login(build),
    register: register(build),
  }),
  overrideExisting: false,
})

export const { useLoginMutation, useRegisterMutation } = userApi
