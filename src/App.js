import React from 'react'
import {connect} from 'react-redux'
import {addGun, addGunAsync, removeGun} from './index.redux'

class App extends React.Component {
    render() {
        const num  = this.props.num
        const addGun = this.props.addGun
        const removeGun = this.props.removeGun
        const addGunAsync = this.props.addGunAsync
        return (
            <div>
                <button onClick={addGun}>加机关枪</button>
                <button onClick={removeGun}>减机关枪</button>
                <button onClick={addGunAsync}>等两秒开启</button>                
                <h1>现在有机枪{num}</h1> 
            </div>
        );
    }
}

const mapStateProps = (state) =>{
    return {num: state}
}
const actionCreators = {addGun, addGunAsync, removeGun}
App = connect(mapStateProps, actionCreators)(App)
export default App