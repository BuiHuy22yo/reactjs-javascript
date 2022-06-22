import {useState} from 'react'
import { handleLoginApi } from '../../../services/userService';
// import { connect } from 'react-redux';
// import { push } from "connected-react-router";
import * as actions from "../../../store/actions";

const FromLogin = () => {
    const [user, setUser] = useState({userId: '', password: ''});
    const onUsernameChange = (e) => {
        let userId = e.target.value
        setUser({...user, userId})
    }

    const onPasswordChange = (e) => {
        let password = e.target.value
        setUser({...user, password})
    }
    // const userLoginSuccess= (userInfo) => {
    //     console.log('111')
    //     console.log(userInfo)
    //     actions.userLoginSuccess(userInfo)
    // }
    const handleLogin = async (e) => {
        try {
            let data = await handleLoginApi(user.userId, user.password);
            if (data && data.code !== 0) {
                let errMessage =  data.message
                console.log(errMessage)
            }
            if (data && data.code === 0) {
                actions.userLoginSuccess(data.user)
                // userLoginSuccess(data.user);
                console.log('loging success',);
            }

        } catch (e) {
            if (e.response) {
                if (e.response.data) {
                    let errMessage =  e.response.data.message
                    console.log(errMessage)
                }
            }
            console.log('error message', e.response);
        }

    }

    return (
        <div className='login-background d-flex align-items-center justify-content-center min-vh-100'>
            <div className='login-container p-4 col-12 col-md-6 col-lg-4 box-shadow'>
                <div className='login-content'>
                    <div className='text-center title-login T30M_38 mb-4'>ログイン</div>
                    <div className=' form-group'>
                        <div className="username mb-4">
                            <label>アカウント<span className='text-danger'>*</span></label>
                            <input type="text" className='input-username form-control px-3 py-0' value={user.userId}
                                   onChange={(event) => onUsernameChange(event)}/>
                        </div>
                        <div className="password">
                            <label>パスワード<span className="text-danger">*</span></label>
                            <div className='input-password '>
                                <input type='password' className='form-control px-3 py-0' value={user.password}
                                       onChange={(event) => onPasswordChange(event)}/>
                                <span className='icon_eye'><i className=""></i></span>
                            </div>
                        </div>
                    </div>
                    <div className='btn-login text-center mb-4 mt-5'>
                        <button type="button" className="button button-bg T12R_16"
                                onClick={(event) => handleLogin(event)}>
                            <span> ログイン </span>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FromLogin;
