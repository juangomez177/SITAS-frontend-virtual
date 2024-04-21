import authApi from "api/auth-api";
import { LogginInterface } from "interfaces";


export const loggin = async (email: string, password: string): Promise<any> => {
   const body: LogginInterface = {
      userEmail: email,
      userPassword: password
   }
   const { data } = await authApi.post('/auth/login', body);
   return data;
}