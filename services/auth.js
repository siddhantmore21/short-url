const jwt = require('jsonwebtoken')
const ACCESS_PRIVATE_KEY = 'SJnznckobhrzLWnG'

const setUser = (user) => {
    const accessToken = jwt.sign({
        user : {
            _id : user._id,
            firstName : user.firstName,
            lastName : user.lastName,
            mobile : user.mobile,
            email : user.email,
        }
    },
    ACCESS_PRIVATE_KEY,
    { expiresIn: '1h' })
    return accessToken;
}

const getUser = (accessToken) => {

    const user = jwt.verify(accessToken,ACCESS_PRIVATE_KEY)
    if(!user)
    {
        return res.redirect('/loginForm')
    }
    return user.user
}

module.exports = {setUser,getUser}