const shortid = require('shortid');
const ShortUrl = require('../models/short-url')

const homePage = async (req,res) => {
    const user = req.body?.user
    if(!user) 
    {
        return res.redirect('./loginForm')
    }
    const shortUrls = await ShortUrl.find({createdBy : user._id})
    return res.render('../views/index',{shortUrls,user})
}

const generateShortUrl = async (req,res) => {
    const url = req.body.url;
    if(!url)
    {
        return res.status(400).json({'status':false, 'message':`Please provide URL`, 'data':{}})
    }
    const shortId = shortid.generate()
    const userId = req.body.user?._id
    // save short url
    const shortUrl = await ShortUrl.create({
        url,
        shortId,
        createdBy : userId
    })
    return res.redirect('/')
}

const redirectShortUrl = async (req,res) => {
    const shortId = req.params?.shortId
    if(!shortId)
    {
        return res.redirect('/')
    }
    const shortUrls = await ShortUrl.findOneAndUpdate(
        {
            shortId
        },
        {
            $push: {
                visits : {
                    visitTimestamps : Date.now()
                }
            }
        }
    );
    return res.redirect(shortUrls?.url)
}

module.exports = {
    homePage,
    generateShortUrl,
    redirectShortUrl,
}