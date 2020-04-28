const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
	app.post('/api/stripe', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
        console.log('Stripe keys is', process.env.REACT_APP_STRIPE_KEY);
    console.log('Environment is',process.env.NODE_ENV);
     	amount: 500,
     	currency: 'inr',
     	description:'$5 for 5 credits',
     	source: req.body.id
      });
    //console.log('Stripe keys is', process.env.REACT_APP_STRIPE_KEY);
    //console.log('Environment is',process.env.NODE_ENV);
    req.user.credits += 5;
    const user = await req.user.save();///Changes in text

    res.send(user); 
	});
};