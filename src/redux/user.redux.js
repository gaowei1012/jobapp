import axios from 'axios'
import { getRedirectPath } from '../util'


const REGISTER_SECCESS = "REGISTER_SECCESS"
const ERROR_MSG = "ERROR_MSG"

const initState = {
    redirectTo: '',
    isAuth: '',
    msg: '',
    user: '',
    pwd: '',
    type: ''
}

// reducer
export function user(state = initState, action) {
    switch (action.type) {
        case REGISTER_SECCESS:
            return { ...state, msg: '', isAuth: true, redirectTo: getRedirectPath(action.payload), ...action.payload }
        case ERROR_MSG:
            return { ...state, isAuth: false, msg: action.msg }
        default:
            return state
    }
}

function reisgerSuccess(data) {
    return { type: REGISTER_SECCESS, payload: data }
}

function errorMsg(msg) {
    return { msg, type: ERROR_MSG }
}

export function register({ user, pwd, repeatpwd, type }) {
    if (!user || !pwd || !type) {
        return errorMsg('error')
    }

    if (pwd !== repeatpwd) {
        return errorMsg('error')
    }

    return dispatch => {
        axios.post('/user/register', { user, pwd, type })
            .then(res => {
                console.log(user)
                if (res.status == 200 && res.data.code == 0) {
                    //请求成功
                    dispatch(reisgerSuccess({ user, pwd, type }))
                } else {
                    // 请求失败
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }

}