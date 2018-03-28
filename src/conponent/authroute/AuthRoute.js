import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class AuthRoute extends React.Component {
    componentDidMount() {
        // 获取用户信息
        axios.get('/user/info')
            .then(res => {
                if (res.status == 200) {
                    if (res.data.code == 0) {
                        // 有登陆信息                    
                    } else {
                        this.props.history.push('/login')
                    }
                    console.log(res.data)
                }
            })
            // 是否登录
            // 现在的url地址 login 不需要跳转
    }

    render() {
        return <p>test</p>
    }
}

export default withRouter(AuthRoute)