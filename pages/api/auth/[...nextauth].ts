import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
    //   using 'as string' ^^ is a typescript-thing when the value dataType is known as string/etc
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
})