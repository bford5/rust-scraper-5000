import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import Stripe from "stripe"

const prisma = new PrismaClient()

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
    //   using 'as string' ^^ is a typescript-thing when the value dataType is known as string/etc
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  events: {
    createUser: async ({user}: any) => {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
        apiVersion: "2022-11-15"
      })
      // create stripe customer
      if (user.email && user.name) {
        const customer = await stripe.customers.create({
          email: user.email,
          name: user.name,
        })
        // update prisma user with stripe info
        await prisma.user.update({
          where: {id: user.id},
          data: { stripeCustomerId: customer.id },
        })
      }
    }
  }
}

export default NextAuth(authOptions);