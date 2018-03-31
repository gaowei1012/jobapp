import React from 'react'
import axios from 'axios'

class Test extends React.Component {

    componentDidMount() {
        axios.get('https://cnodejs.org/api/v1/topics')
            .then(res => {
                if (res.status == 200 && res.data.success == true) {
                    console.log(res.data)
                }

            })
            .catch(err=> {
                console.log(err)
            })
    }

    render() {
        return <h2>HELLO WORLD</h2>
    }
}

export default Test