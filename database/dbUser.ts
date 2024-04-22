import authApi from "api/auth-api"
import { JWTPayload } from "interfaces/jwt.interface"

export const getUserData = async (userId: string, token: string): Promise<JWTPayload> => {
  const { data } = await authApi.get(`/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  console.log(data)
  return data
}
