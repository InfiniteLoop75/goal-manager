const bCrypt = require('bcrypt-nodejs');
module.exports = function(passport, user){
    var User = user;
    var LocalStrategy = require('passport-local').Strategy;

    // METHOD FOR SIGNUP
    passport.use('local-signup', new LocalStrategy({
        usernameField: 'UserName',
        passwordField: 'Password',
        passReqToCallback: true
    },
    function(req, username,password,done){
        var generateHash = function(password) {
            return bCrypt.hashSync(password, bCrypt.genSalt(8), null);
        };
        User.findOne({
            where: {
                UserName: username
            }
        }).then(user=>{
            if(user){
                return done(null, false,{
                    message: 'Email is already in use'
                });
            }else{
                var userPassword = generateHash(password);
                var data = {
                    UserName: username,
                    Password: userPassword,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    About: req.body.about,
                    DateOfBirth: req.body.dob
                }
                User.create(data).then(newUser=>{
                    if(!newUser){
                        return done(null, false);
                    }else{
                        return done(null, newUser);
                    }
                    
                }).catch(err=>{

                });


                
            }
        })
    }
));

passport.use('local-signin', new LocalStrategy({
    usernameField: 'UserName',
    passwordField: 'Password',
    passReqToCallback: true
},
(req, username, password, done)=>{
    var User = user;
    var isPasswordValid = (userPassword, Password)=>{
        return bCrypt.compareSync(Password, userPassword);
    };
    User.findOne({
        where:{
            UserName: username
        }
    }).then(user=>{
        if(!user){
            return done(null, false, {
                message: 'User does not exist'
            });
        }
        if(!isPasswordValid(user.Password, password)){
            return done(null, false, {
                message: 'Incorrect password'
            });
        }
    }).catch(err=>{
        console.log('Unable to login', err)
    });
}
));
};