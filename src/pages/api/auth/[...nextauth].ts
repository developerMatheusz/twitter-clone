import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth, { AuthOptions, SessionStrategy } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "@/lib/mongodb";
import { Adapter } from "next-auth/adapters";

export const authOptions: AuthOptions = {
  adapter: MongoDBAdapter(clientPromise) as Adapter,
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
    })
  ],
  pages: {
    signIn: "/login"
  },
  session: {
    strategy: "jwt" as SessionStrategy
  },
  callbacks: {
    async session({ session, token }: any) {
      if (session?.user && token?.sub) {
        session.user.id = token.sub;
      }
      return session;
    }
  }
};

export default NextAuth(authOptions);
