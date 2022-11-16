import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GitlabProvider from "next-auth/providers/gitlab";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: '01dd4a70fa8fadc4bc3a',
      clientSecret: 'a6ba3f017c936fee033cfef20053125725939782',
    }),
    GitlabProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
  ],

  // adapter: FirestoreAdapter({
  //   apiKey: process.env.FIREBASE_API_KEY,
  //   appId: process.env.FIREBASE_APP_ID,
  //   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  //   databaseURL: process.env.FIREBASE_DATABASE_URL,
  //   projectId: process.env.FIREBASE_PROJECT_ID,
  //   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  //   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  //   // Optional emulator config (see below for options)
  //   emulator: {},
  // }),

  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token, user }) {
      session.accessToken = token.accessToken
      // console.log('session', session);
      return session
    }
  }
}
export default NextAuth(authOptions)