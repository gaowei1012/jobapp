import React from 'react'
import { NavBar, List, InputItem, TextareaItem, Button } from 'antd-mobile'
import AvatarSelector from '../../conponent/avatarselector/AvatarSelector'
import { connect } from 'react-redux'
import { update } from '../../redux/user.redux'

@connect(
    state=>state.user,
    { update }
)
class GeniusInfo extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            title: '',
            company: '',
            money: '',
            desc: ''
        }
    }

    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }

    render() {
        return (
            <div>
                <NavBar
                    mode="lihit"
                >牛人</NavBar>
                <AvatarSelector
                    selectAvatar={(images) => {
                        this.setState({
                            avatar: images
                        })
                    }}
                ></AvatarSelector>
                <List>
                    <InputItem
                        onChange={v => this.handleChange('title', v)}
                    >姓名</InputItem>
                    <InputItem
                        onChange={v => this.handleChange('company', v)}
                    >求职岗位</InputItem>
                    <InputItem
                        onChange={v => this.handleChange('money', v)}
                    >薪资要求</InputItem>
                    <TextareaItem
                        title="个人简介"
                        placeholder="不少于30字符"
                        data-seed="logId"
                        autoHeight
                        onChange={v => this.handleChange('desc', v)}
                    />
                    <Button
                        type="primary"
                        onClick={() => {
                            this.props.update(this.state)
                        }}
                    >保存</Button>
                </List>
            </div>
        );
    }
}

export default GeniusInfo