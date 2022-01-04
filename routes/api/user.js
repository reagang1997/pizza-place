const router = require('express').Router();
const db = require('../../models');

const passport = require('../../config/passport');


//create a new user
router.post('/api/user', async (req, res) => {
    const newUser = req.body;
    const newDBUser = await db.User.create(newUser);
    req.session.save(() => {
        req.session.userId = newUser.id;
        req.session.displayName = newUser.displayName;
    });
    res.send(newDBUser);
});

//login
router.post('/api/user/login', passport.authenticate('local'), async (req, res) => {
    req.session.save(() => {
        req.session.userId = req.user._id;
    });
    res.send(req.user);
});

router.get('/api/user/loggedIn', (req, res) => {
    console.log(req.session.passport.user)
    res.send(req.session.passport.user)
});
module.exports = router;