import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: '1005361955574-953ros0o4p8utpo9k577bifqj34k603d.apps.googleusercontent.com',
            clientSecret: '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'
        })
    ]
})

export { handler as GET, handler as POST }