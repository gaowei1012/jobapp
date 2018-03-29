const express = require('express')
const Router = express.Router()
const utility = require('utility')
const models = require('./model')
const User = models.getModel('user')

Router.get('/list', function (req, res) {
    // 删除所有用户
    // User.remove({}, function(err, doc) {})
    // 查找
    User.find({}, function (err, doc) {
        return res.json(doc)
    })
})
// POST
Router.post('/register', function (req, res) {
    console.log(req.body)
    const { user, pwd, type } = req.body
    const sodle = '12nhjhsj_nkjn@#$nk>...nu!!``~~~'
    User.findOne({ user }, function (err, doc) {
        if (doc) {
            return res.json({ code: 1, msg: '用户名重复' })
        }
        User.create({ user, pwd: utility.md5(pwd + sodle), type }, function (e, d) {
            if (e) {
                return res.json({ code: 1, msg: '服务器出错' })
            }
            return res.json({ code: 0 })
        })
    })
})

// post login
Router.post('/login', function (req, res) {
    const { user, pwd } = req.body
    User.findOne({ user, pwd: md5Pwd(pwd) }, _filter, function (err, doc) {
        if (!doc) {
            return res.json({ code: 1, msg: '用户名或者密码错误' })
        }
        res.cookie('userid', doc._id)
        return res.json({ code: 0, data: doc })
    })
})

// user
Router.get('/info', function (req, res) {
    // 通过cookie校验用户是否登录
    return res.json({ code: 1 })
})

module.exports = Router