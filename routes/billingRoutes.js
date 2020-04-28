const dev = require('../config/dev.js');
const stripe = require('stripe')(dev.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
	app.post('/api/stripe', requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
     	amount: 500,
     	currency: 'inr',
     	description:'$5 for 5 credits',
     	source: req.body.id
      });
    req.user.credits += 5;
    const user = await req.user.save();///Changes in text
    res.send(user); 
	});
};