const bcrypt = require('bcrypt')
const User = require('../models/users')
const {setUser} = require('../services/auth')

const signUpForm = (req, res) => {
    return  res.render('../views/signup')
} 

const loginForm = (req, res) => {
    return res.render('../views/login')
} 



const signUp = async (req, res) => {
    const {firstName, lastName, email, mobile, password} = req.body
    const hashedPassword = await bcrypt.hash(password,10)
    const user = User.create({
        firstName,
        lastName,
        email,
        mobile,
        password  : hashedPassword
    })
    return res.redirect('/loginForm')
} 

const login = async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})
    if(user)
    {
        if(await bcrypt.compare(password, user?.password))
        {
            const accessToken = setUser(user)
            res.cookie('accessToken',accessToken)
            return res.redirect('/')
        }
    }
    return res.redirect('/loginForm')
} 

const logout = async (req, res) => {
    res.cookie('accessToken','')
    return res.redirect('/loginForm')
} 

module.exports = {
    signUpForm,
    loginForm,
    signUp,
    login,
    logout
}