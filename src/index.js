import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'

import AuthRouter from './conponent/authroute/AuthRoute'
import Login from './container/login/Login'
import Register from './container/register/Register'
import BossInfo from './container/bossinfo/BossInfo'
import GeniusInfo from './container/geniusinfo/GeniusInfo'
import Dashboard from './conponent/dashboard/Dashboard'
import reducers from './reducer'


import './config'
import './index.css'

// 创建store
const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
))

function render() {
    ReactDOM.render(
        (<Provider store={store}>
            <BrowserRouter>
                <div>
                    <AuthRouter></AuthRouter>
                    <Switch>
                        <Route path="/geniusinfo" component={GeniusInfo}></Route>
                        <Route path="/bossinfo" component={BossInfo} ></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/register" component={Register}></Route>
                        <Route component={Dashboard} ></Route>
                    </Switch>
                </div>                
            </BrowserRouter>
        </Provider>),
        document.getElementById('root'))
}
render()

store.subscribe(render)
