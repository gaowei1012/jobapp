import React from 'react'
import Logo from '../../conponent/logo/Logo'
import {
    Button,
    List,
    WingBlank,
    WhiteSpace,
    InputItem
} from 'antd-mobile'
import { connect } from 'react-redux'
import { login } from '../../redux/user.redux'


@connect(
    state => state.user,
    { login }
)
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            ped: ''
        }

        this.Register = this.Register.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }
    // 注册 
    Register() {
        console.log(this.props)
        this.props.history.push('/register')
    }

    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }

    // 登录
    handleLogin() {
           this.props.login(this.state)
           console.log(this.state)
        // console.log(this.props)
    }

    render() {
        return (
            <div>
                <Logo />
                <WingBlank>
                    <List>
                        <InputItem
                            onChange={v=> this.handleChange('user', v)}
                        >用户名</InputItem>
                        <WhiteSpace />
                        <InputItem
                            type="password"
                            onChange={v=> this.handleChange('pwd', v)}
                        >密码</InputItem>
                    </List>
                    <Button onClick={this.handleLogin} type="primary">登录</Button>
                    <WhiteSpace />
                    <Button type="primary" onClick={this.Register}>注册</Button>
                </WingBlank>
            </div>
        );
    }
}

export default Login