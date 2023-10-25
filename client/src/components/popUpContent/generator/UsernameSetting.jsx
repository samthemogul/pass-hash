
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from "../../../redux/slices/userSlice";
import { useState } from 'react';
import { popupActions } from '../../../redux/slices/popupSlice';
import { infoActions } from '../../../redux/slices/infoSlice';

const UsernameSetting = () => {
    const loadedOptions = useSelector(state => state.user.usernameSettings)
    const [ options, setOptions ] = useState(loadedOptions)
    const dispatch = useDispatch()


    const handleCheckChange = (e) => {
        setOptions({...options, [e.target.name]: e.target.checked})
}
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(userActions.usernameSet(options))
        dispatch(popupActions.hide())
        dispatch(infoActions.show({ itemUpdateSuccess: true }))

        setTimeout(()=> {
            dispatch(infoActions.hide())
        }, 4000)
    }
  return (
    <><h2>Username Settings</h2>
    <form onSubmit={handleSubmit}>
        <div className="check">
            <input defaultChecked={options.capitalize} onChange={handleCheckChange} type="checkbox" id="capitals" name="capitalize" value="favourite" />
            <label htmlFor="favourite">Capitalize</label><br/>
        </div>
        <div className="check">
            <input defaultChecked={options.includeDigits} onChange={handleCheckChange} type="checkbox" id="digits" name="includeDigits" value="favourite" />
            <label htmlFor="favourite">Include digits</label><br/>
        </div>
        <button type="submit" className="btn-pry">Save details</button>
    </form></>
  )
}

export default UsernameSetting