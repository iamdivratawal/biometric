const mongoose = require('mongoose'); 
const Account = require('../model/account');

exports.register = (req, res, next) => {
    Account.find({ email: req.body.email }).exec()
    .then(user => {
        if (user.length >= 1) {
            return res.status(409).json({
                message: "Email alredy Exists"
            });
        } else {
            const user = new Account({
                email: req.body.email,
                password: req.body.password
            });
            console.log(user);
            user.save()
            .then(result => {
                res.redirect('/');
            })
            .catch(err => {
                console.log(err);
                res.redirect('/register/');
            })
        }
    })
  };

exports.login = (req, res, next) => {
    Account.find({email: req.body.email}).exec()
    .then(user => {
        if (user.length < 1){
            res.redirect('/login/');
        }
        if (user[0].password == req.body.password ){
            res.redirect('/account/');
        }
        
    })
    .catch(err => {
        console.log(err);
        res.sendStatus(500).json({
            error: err
        });
    });
}