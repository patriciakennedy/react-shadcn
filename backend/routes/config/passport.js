const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();

// Use Google OAuth Strategy
passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL,
        },
        (accessToken, refreshToken, profile, done) => {
            if (!profile.emails || profile.emails.length === 0) {
                return done(new Error('No email found in Google profile'));
            }

            const userEmail = profile.emails[0].value;
            const user = {
                googleId: profile.id,
                name: profile.displayName,
                email: userEmail,
                userType: userEmail.includes('@company.com')
                    ? 'Recruiter'
                    : 'Job Seeker',
            };

            return done(null, user);
        }
    )
);

// Serialize user into the session
passport.serializeUser((user, done) => {
    done(null, user);
});

// Deserialize user from session
passport.deserializeUser((user, done) => {
    done(null, user);
});

// Export passport for use in other files
module.exports = passport;

/////////////////////////////////////////////////////////////////////////////////////////////

// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// require('dotenv').config();

// passport.use(
//     new GoogleStrategy(
//         {
//             clientID: process.env.GOOGLE_CLIENT_ID,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//             callbackURL: process.env.GOOGLE_CALLBACK_URL,
//         },
//         (accessToken, refreshToken, profile, done) => {
//             // Extract user info
//             const user = {
//                 googleId: profile.id,
//                 name: profile.displayName,
//                 email: profile.emails[0].value,
//                 userType: profile.emails[0].value.includes('@company.com')
//                     ? 'Recruiter'
//                     : 'Job Seeker', // Example logic
//             };
//             return done(null, user);
//         }
//     )
// );

// // Serialize user into the session
// passport.serializeUser((user, done) => {
//     done(null, user);
// });

// // Deserialize user from session
// passport.deserializeUser((user, done) => {
//     done(null, user);
// });
