import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import { checkUserEmailPassword } from '../../../config/dbUser';

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        // ...add more providers here
        Credentials({
            name: 'Custom Login',
            credentials: {
                email: { label: 'Correo:', type: 'email', placeholder: 'correo@google.com' },
                password: { label: 'Contraseña:', type: 'password', placeholder: 'Contraseña' },
            },
            async authorize(credentials) {
                return await checkUserEmailPassword(credentials.email, credentials.password);
            }
        }),
    ],

    // Custom Pages
    pages: {
        signIn: '/auth/login',
        newUser: '/auth/register'
    },

    // Callbacks
    jwt: {
        // secret: process.env.JWT_SECRET_SEED, // deprecated
    },

    session: {
        maxAge: 2592000, /// 30d
        strategy: 'jwt',
        updateAge: 86400, // cada día
    },

    callbacks: {

        async jwt({ token, account, user }) {
            // console.log({ token, account, user });

            if (account) {
                token.accessToken = account.access_token;

                switch (account.type) {

                    // case 'oauth': 
                    //   token.user = await dbUsers.oAUthToDbUser( user?.email || '', user?.name || '' );
                    // break;

                    case 'credentials':
                        token.user = user;
                        break;
                }
            }
            return token;
        },

        async session({ session, token, user }) {
            // console.log({ session, token, user });
            session.accessToken = token.accessToken;
            session.user = token.user;
            return session;
        }
    }

});
