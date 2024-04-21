import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { loggin } from "database/dbAuth";


const handler = NextAuth({
   providers: [
      CredentialsProvider({
         name: "Credentials",
         id: "credentials",
         credentials: {
            email: {},
            password: {},
         },
         async authorize(credentials) {

            try {
               const userToken = await loggin(credentials!.email, credentials!.password);
               if (!userToken) throw new Error("Invalid credentials");
               return userToken;
            } catch (error) {
               console.error('Error en el proceso de inicio de sesión')
               console.log(error);
            }
         },
      }),
   ],
   pages: {
      signIn: "/uth/login",
      newUser: '/auth/new-account',
   },
   session: {
      strategy: "jwt",
   },
   callbacks: {
      async jwt({ token, user }) {
         if (user) token.user = user;
         return token;
      },
      async session({ session, token }) {
         session.user = token.user as any;
         return session;
      },
   },
})

export { handler as GET, handler as POST };