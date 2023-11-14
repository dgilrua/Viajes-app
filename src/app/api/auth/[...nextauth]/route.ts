import NextAuth  from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import {conectDB} from '@/libs/mongodb'
import User from '@/models/user'
import bcrypt from 'bcryptjs'
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith@hola.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials,req) {
        await conectDB();

        const userFound = await User.findOne({email: credentials?.email}).select('+password')
        if (!userFound) throw new Error('Credenciales invalidas')

        const passwordMatch = await bcrypt.compare(credentials!.password, userFound.password)
        if (!passwordMatch) throw new Error('Credenciales invalidas')

        return userFound;
      }
    })
  ],
  callbacks: {
    jwt({token, user}) {
      if (user) {
        token.user = user;
      }
      return token;
    },

    session({session, token}) {
      session.user = token.user as any;
      return session;
    }
  },
  /*pages: {
    signIn: '/login'
  }*/
})

export {handler as GET,  handler as POST}