import React from 'react'
import axios from 'axios'
import {WingBlank, WhiteSpace, Grid} from 'antd-mobile'

class Boss extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    // 网络请求
    componentDidMount() {
        axios.get('/user/list?type=genius')
            .then(res=> {
                if (res.data.code == 0) {
                    this.setState({data: res.data.doc})
                }
            })
    }

    render() {
        console.log(this.state)
        return null
    }
}

export default Boss