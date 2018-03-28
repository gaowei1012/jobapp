import React from 'react'
import Logo from '../../conponent/logo/Logo'
import {
    List,
    WingBlank,
    Button,
    Radio,
    WhiteSpace,
    InputItem
} from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { register } from '../../redux/user.redux'

@connect(
    state => state.user,
    { register }
)
class Register extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            redirectTo: '',
            user: '',
            pwd: '',
            repeatpwd: '',
            type: 'genius' // 或者 boss
        }
        // 绑定this
        this.handleRegister = this.handleRegister.bind(this)
    }

    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }

    handleRegister() {
        this.props.register(this.state)
        // console.log(this.state)
    }

    render() {
        const RadioItem = Radio.RadioItem
        return (
            <div>
                <Logo></Logo>
                {this.props.redirectTo?<Redirect to={this.props.redirectTo} />: null}
                <List>
                    {this.props.msg?<p className="err-msg">{this.props.msg}</p>:null}
                    <InputItem
                        onChange={v => this.handleChange('user', v)}
                    >用户名</InputItem>
                    <InputItem
                        type="password"
                        onChange={v=> this.handleChange('pwd', v)}
                    >密码</InputItem>
                    <InputItem
                        type="password"
                        onChange={v=> this.handleChange('repeatpwd', v)}
                    >确认密码</InputItem>
                    <RadioItem 
                        checked={this.state.type == 'genius'}
                        onChange={()=>this.handleChange('type', 'genius')}
                    >
                        牛人
                   </RadioItem>
                    <RadioItem 
                        checked={this.state.type == 'boos'}
                        onChange={()=> this.handleChange('type', 'boss')}
                        >
                        BOSS
                   </RadioItem>
                    <Button 
                        type="primary"
                        onClick={this.handleRegister}
                    >注册</Button>
                </List>
            </div>
        );
    }
}

export default Register