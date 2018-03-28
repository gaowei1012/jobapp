import React from 'react'
import Logo from '../../conponent/logo/Logo'
import {
    Button, 
    List, 
    WingBlank, 
    WhiteSpace, 
    InputItem
} from 'antd-mobile'

class Login extends React.Component {

    constructor(props) {
        super(props)

        this.login = this.login.bind(this)
    }
    // Login 
    login() {
        console.log(this.props)
        this.props.history.push('/register')
    }

    render() {
        return (
            <div>
                <Logo />
                <WingBlank>
                    <List>
                        <InputItem>用户名</InputItem>
                        <WhiteSpace />
                        <InputItem>密码</InputItem>
                    </List>
                    <Button type="primary">登录</Button>
                    <WhiteSpace />
                    <Button type="primary" onClick={this.login}>注册</Button>
                </WingBlank>
            </div>
        );
    }
}

export default Login