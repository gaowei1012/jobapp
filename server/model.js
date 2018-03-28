const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/webapp'
// 数据库连接操作
mongoose.connect(DB_URL)

const models = {
    // 用户信息
    user: {
        'user': { type: String, require: true },
        'pwd': { type: String, require: true },
        'type': { type: String, require: true },
        // 头像
        'avatar': { 'type': String },
        // 个人信息简介
        'desc': { 'type': String },
        // 职位信息
        'title': { 'type': String },
        // 公司信息
        'company': { 'type': String },
        'money': { 'type': String }
    },
    // 聊天
    chat: {

    }
}
// 遍历拿到每一个值
for (let m in models) {
    mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
    getModel: function (name) {
        return mongoose.model(name)
    }
}