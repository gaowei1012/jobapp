import React from 'react'
import { NavBar, Icon, Grid, List, InputItem, Button, TextareaItem } from 'antd-mobile'

import AvatarSelector from '../../conponent/avatarselector/AvatarSelector'


class BossInfo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
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
                >NavBar</NavBar>
                <AvatarSelector
                    // 组件之间交互
                    selectAvatar={(images) => {
                        this.setState({
                            avatar: images
                        })
                    }}
                ></AvatarSelector>
                <List>
                    <InputItem
                        onChange={v => this.handleChange('name', v)}
                    >职位名称</InputItem>
                    <InputItem
                        onChange={v => this.handleChange('Uname', v)}
                    >公司信息</InputItem>
                    <TextareaItem
                        title="职位要求"
                        placeholder="不少于30字符"
                        data-seed="logId"
                        autoHeight
                        onChange={v=>this.handleChange('text', v)}
                    />
                    <Button
                        type="primary"
                        onClick={this.handleRegister}
                    >保存</Button>
                </List>
            </div>
        );
    }
}

export default BossInfo