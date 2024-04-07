const shortid = require('shortid');
const ShortUrl = require('../models/short-url')

const homePage = async (req,res) => {
    const shortUrls = await ShortUrl.find({})
    res.render('../views/index',{shortUrls})
}

const generateShortUrl = async (req,res) => {
    const url = req.body.url;
    if(!url)
    {
        res.status(400).json({'status':false, 'message':`Please provide URL`, 'data':{}})
    }
    const shortId = shortid.generate()
    // save short url
    const shortUrl = await ShortUrl.create({
        url,
        shortId,
    })
    res.redirect('/')
}

const redirectShortUrl = async (req,res) => {
    const shortId = req.params?.shortId
    if(!shortId)
    {
        res.redirect('/')
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
    res.redirect(shortUrls?.url)
}

module.exports = {
    homePage,
    generateShortUrl,
    redirectShortUrl
}