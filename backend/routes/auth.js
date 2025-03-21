const express = require('express');
const passport = require('passport');

const router = express.Router();

// Google Authentication Route
router.get(
    '/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

//  Google Authentication Callback Route
router.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        // Successful authentication, redirect based on user type
        const userType = req.user.userType;

        if (userType === 'Recruiter') {
            res.redirect('/PostJobs'); // Adjust if React handles routing
        } else {
            res.redirect('/JobListing');
        }
    }
);

// Logout Route
router.get('/logout', (req, res, next) => {
    req.logout((err) => {
        if (err) return next(err);
        req.session.destroy(() => {
            res.redirect('/'); // Redirect to home after logout
        });
    });
});

module.exports = router;

