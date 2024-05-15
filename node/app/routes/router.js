const express = require('express')
const router = express.Router()

const port = process.env.port || 3005

router.get('/api', (req, res)=> {
    res.json({
        'All Users': `http://localhost:${port}/api/user`
    })
})

router.use('/api/user', require('./api/userRoutes'))

router.get('*', (req,res)=> {
    if(req.url === '/favicon.ico') {
        res.end()
    } else {
        res.send('<h1> Error. This page does not exist. </h1>')
    }
})

module.exports = router