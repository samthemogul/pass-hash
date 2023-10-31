import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { userActions } from "../redux/slices/userSlice"
import { popupActions } from "../redux/slices/popupSlice"


const AccountsForm = () => {
    const dispatch = useDispatch()
    const currentUserInfo = useSelector(state => state.user)
    const [updateInfo, setUpdateInfo ] = useState(currentUserInfo)
    const [ passwordView, setPasswordView ] = useState(false)

    const handleView = () => {
        setPasswordView(prev => !prev)
    }

    const handleChange = (e) => {
        setUpdateInfo({...updateInfo, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(userActions.updateUserInfo(updateInfo))
        dispatch(popupActions.show({updateAccountPop: true}))
    }
  return (
    <form onSubmit={handleSubmit}>
                <div className="account-detail">
                    <label htmlFor="firstname">Firstname</label>
                    <input type="text" name="firstname" id="firstname" onChange={handleChange} defaultValue={updateInfo.firstname} />
                </div>
                <div className="account-detail">
                    <label htmlFor="lastname">Lastname</label>
                    <input type="text" name="lastname" id="lastname" onChange={handleChange} defaultValue={updateInfo.lastname} />
                </div>
                <div className="account-detail">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" onChange={handleChange} defaultValue={updateInfo.email} />
                </div>
                {/* <div className="account-detail">
                    <label htmlFor="password">Master password</label>
                    <input type={passwordView ? "text" : "password"} className="password" name="password" id="master-password" onChange={handleChange} defaultValue={updateInfo.password} />
                    <span onClick={handleView} className="material-symbols-outlined">
                        {passwordView ? "visibility_off" : "visibility"}
                        </span>
                </div> */}
                <div className="account-detail">
                    <label htmlFor="recoveryEmail">Recovery email</label>
                    <input type="email" name="recoveryEmail" id="recovery-mail" onChange={handleChange} defaultValue={updateInfo.recoveryEmail} />
                </div>
                <button type="submit" className="btn-pry">Save details</button>
            </form>
  )
}

export default AccountsForm