import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import Google from 'next-auth/providers/google'
import { Pool } from '@neondatabase/serverless'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaNeon } from '@prisma/adapter-neon'
import { PrismaClient } from '@prisma/client'

const { AUTH_GOOGLE_ID = '', AUTH_GOOGLE_SECRET = '' } = process.env

const neon = new Pool({
  connectionString: process.env.AUTH_POSTGRES_PRISMA_URL,
})
const adapter = new PrismaNeon(neon)
const prisma = new PrismaClient({ adapter })

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: { username: {}, password: {} },
      authorize: async (credentials) => {
        let user = null
        const hashPassword = credentials?.password || ''
        console.log('hashPassword', hashPassword)

        user = await { id: '12' }

        if (user) {
          return user
        }

        throw new Error('User not found')
      },
    }),
    Google({
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
      clientId: AUTH_GOOGLE_ID,
      clientSecret: AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    jwt({ token, trigger, session }) {
      if (trigger === 'update') token.name = session?.user?.name
      return token
    },
  },
})
