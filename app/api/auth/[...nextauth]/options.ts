import type { NextAuthOptions } from "next-auth";
import LineProvider from "next-auth/providers/line";

const lineClientId = process.env.LINE_CLIENT_ID;
const lineClientSecret = process.env.LINE_CLIENT_SECRET;
if (!lineClientId || !lineClientSecret) {
  throw new Error("LINE_CLIENT_ID または LINE_CLIENT_SECRET が設定されていません");
}

export const authOptions: NextAuthOptions = {
  debug: true,
  session: { strategy: "jwt" },
  providers: [LineProvider({ clientId: lineClientId, clientSecret: lineClientSecret })],
  callbacks: {
    jwt: async ({ token, user, account }) => {
      if (user) {
        token.user = user;
        const u = user as any;
        token.role = u.role;
      }
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    session: ({ session, token }) => {
      token.accessToken;
      return { ...session, user: { ...session.user, role: token.role } };
    },
  },
};
