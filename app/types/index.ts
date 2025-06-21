import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
  /**
   * Session tipini genişlet
   */
  interface Session {
    role?: string
    user: {
      id?: string
    } & DefaultSession["user"]
  }

  /**
   * JWT tipini genişlet
   */
  interface JWT {
    role?: string
  }
}