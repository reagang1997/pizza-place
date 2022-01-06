const router = require('express').Router();
const db = require('../../models');

const passport = require('../../config/passport');


//create a new user
router.post('/api/user', async (req, res) => {
    const newUser = req.body;
    console.log('signup')
    const newDBUser = await db.User.create(newUser);
    newDBUser.hashed = true;
    newDBUser.save();
    req.session.save(() => {
        req.session.userId = newUser.id;
        req.session.displayName = newUser.displayName;
    });
    res.send(newDBUser);
});



router.put('/api/user/update/:id', async (req, res) => {
    const updated = await db.User.findByIdAndUpdate(req.body._id, req.body)
    const found = await db.User.findById(req.body._id);
    req.session.passport.user = found;
    req.session.save(function (err) { console.log(err); })
    console.log(req.session.passport.user)
    res.send(200);
})

//login
router.post('/api/user/login', passport.authenticate('local'), async (req, res) => {
    req.session.save(() => {
        req.session.userId = req.user._id;
    });
    res.send(req.user);
});

router.get('/api/user/orders', async (req, res) => {
    const user = await db.User.findById(req.session.passport.user._id).populate('orders');
    res.send(user.orders);
})

router.get('/api/user/loggedIn', async (req, res) => {
    console.log(req.session)
    if (req.session.passport) {
        const user = await db.User.findById(req.session.passport.user._id)
        res.send(user)
    }
    else {
        res.send({ error: 'Not logged in' })
    }
});

router.post('/api/order/guest', async (req, res) => {
    const created = await db.Order.create(req.body);
    console.log(created);
    res.sendStatus(200);
})

router.post('/api/order/user', async (req, res) => {
    // [x] create order with user id and points
    // [] add order to users orders
    // [] incriment user points
    console.log(req.body);
    const createdOrder = await db.Order.create(req.body)
    console.log(createdOrder);

    const foundUser = await db.User.findById(req.body.user);
    foundUser.points += +req.body.points;
    foundUser.orders.push(createdOrder._id);
    foundUser.save();
    res.sendStatus(200);
    
})
module.exports = router;