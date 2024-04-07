const {getUser} = require('../services/auth')


const authenticateUser = (req,res,next) => {
    const accessToken = req.cookies?.accessToken
    if(!accessToken)
    {
        return res.redirect('/loginForm')
    }
    const user = getUser(accessToken)
    req.body.user = user
    next()
}

module.exports = {authenticateUser}