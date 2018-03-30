import React from 'react'
import { Grid, List } from 'antd-mobile'
import PropTypes from 'prop-types'

class AvatarSelector extends React.Component {
    // 类型检测 isRequired
    static PropTypes = {
        selectAvatar: PropTypes.func
    } 

    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const avatarlist = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'
            .split(',')
            .map(v => ({
                icon: require(`../img/${v}.png`),
                text: v
            }))
        const gridHeader = this.state.text
                        ? (<div>
                            <span>已选择图像</span>
                            <img src={this.state.icon} style={{width: 20}} alt="icon" />
                        </div>) : <div>'请选择图像'</div>   
        return (
            <div>
                <List renderHeader={() =>gridHeader}>
                    <Grid
                        data={avatarlist}
                        columnNum={5}
                        // isCarousel="false"
                        onClick={elm => {
                            this.setState(elm)
                            this.props.selectAvatar(elm.text)
                        }}
                    />
                </List>
            </div>
        );
    }
}

export default AvatarSelector