import authApi from "api/auth-api"
import { GetUserReponse } from "interfaces"

export const getUserById = async (userId: string, token: string): Promise<GetUserReponse> => {
   const { data } = await authApi.get(`/users/${userId}`, {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   })
   return data
}