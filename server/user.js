const express = require('express')
const Router = express.Router()
const models = require('./model')
const User = models.getModel('user')

Router.get('/list', function(req, res) {
    // 删除
    User.remove({}, function (e, d) {})   
    // 查找
    User.find({}, function(err, doc) {
        return res.json(doc)
    })
})

// POST 注册
Router.post('/register', function (req, res) {
    console.log(req.body)
    const {user, pwd, type} = req.body
    User.findOne({user}, function(err, doc) {
        if (doc) {
            return res.json({code: 1, msg: '用户名重复'})
        }
        User.create({user, pwd, type}, function(e, d) {
            if (e) {
                return res.json({code: 1, msg: '服务器出错'})
            }
            return res.json({code: 0})
        })
    })
})
// 登录 POST
Router.post('/login', function(req, res) {
    console.log(req.body)
})

// user
Router.get('/info', function(req, res) {
    // 通过cookie校验用户是否登录
    return res.json({code: 1})
})

module.exports = Router