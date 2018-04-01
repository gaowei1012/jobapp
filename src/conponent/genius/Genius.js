import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Card, WhiteSpace, WingBlank } from 'antd-mobile'

import { getUserList } from '../../redux/chat.redux'
// import UserCard from '../usercard/UserCard'

class Genius extends React.Component {

    componentDidMont() {
        this.props.getUserList('boss')
    }

    render() {
        return null
        // return <UserCard userlist={this.props.userlist}></UserCard>
    }
}

export default Genius
