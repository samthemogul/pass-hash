import { useState } from "react"
import DetailType from "../../DetailType"
import { useDispatch, useSelector } from "react-redux"
import { popupActions } from "../../../redux/slices/popupSlice"
import { userActions } from "../../../redux/slices/userSlice"
import usePasswordGenerate from "../../../constants/customHooks/usePasswordGenerate"
import useUsernameGenerate from "../../../constants/customHooks/useUsernameGenerate"
import { infoActions } from "../../../redux/slices/infoSlice"

const UpdateItem = () => {
    const dispatch = useDispatch()
    const passwordSettings = useSelector(state => state.user.passwordSettings)
    const usernameSettings = useSelector(state => state.user.usernameSettings)
    const passwordItemList = useSelector(state => state.user.passwordList);
    const idToUpdate = useSelector(state => state.user.updateId)
    const defaultFolder = useSelector(state => state.user.folders)
    const [ genCount , setGenCount ] = useState(0)

    const itemToUpdate = passwordItemList.find((item) => item.id == idToUpdate )

    const [ newItem, setNewItem ] = useState(itemToUpdate)

    const genPassword = usePasswordGenerate(passwordSettings.passwordLength, genCount, passwordSettings.includeCapitals, passwordSettings.includeSmall, passwordSettings.includeNumbers, passwordSettings.includeSymbols).join('')
    const genUsername = useUsernameGenerate(usernameSettings.capitalize, usernameSettings.includeDigits)

    const [ passwordView, setPasswordView ] = useState(false)
    const handleGenerate = (type) => {
        if(type == "password"){
            setNewItem({...newItem, value: genPassword})
            setGenCount(prev => prev + 1)
        }
        if(type == "username"){
            setNewItem({...newItem, username: genUsername})
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(userActions.updateItem(newItem))
        dispatch(popupActions.hide())
        dispatch(infoActions.show({ itemUpdateSuccess: true }))

        setTimeout(()=> {
            dispatch(infoActions.hide())
        }, 4000)
    }

    const handleChange = (e) => {
        setNewItem({...newItem, [e.target.name]: e.target.value })
    }

    const getDropData = (name, value) => {
        setNewItem({...newItem, [name] : value })
    }
    const handleView = () => {
        setPasswordView(prev => !prev)
    }
    const handleCheckChange = (e) => {
        setNewItem({...newItem, [e.target.name]: e.target.checked})
}
  return (
    <><h2>Edit item</h2>
            <form onSubmit={handleSubmit}>
            <DetailType type="type" onSelect={getDropData} />
                <div className="input-field">
                    <label htmlFor="name">Name</label>
                    <input name="name" type="text" placeholder="Enter Name" defaultValue={newItem.name} onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="username">Username</label>
                    <input defaultValue={newItem.username} onChange={handleChange} name="username" type="text" placeholder="Enter Username" />
                    <span onClick={() => handleGenerate("username")} className="material-symbols-outlined">
                        refresh
                        </span>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input defaultValue={newItem.value} onChange={handleChange} className="password" name="value" type={passwordView ? "text" : "password"} placeholder="Enter Password" />
                    <span onClick={() => handleGenerate("password")} className="material-symbols-outlined">
                        refresh
                        </span>
                    <span onClick={handleView} className="material-symbols-outlined view">
                        {passwordView ? "visibility_off" : "visibility"}
                        </span>
                </div>
                <div className="input-field">
                    <label htmlFor="web-url">Web Url</label>
                    <input defaultValue={newItem.webUrl} onChange={handleChange} name="webUrl" type="text" placeholder="Enter Url" />
                </div>
                <DetailType type="folder" onSelect={getDropData} />
                <div className="check">
                    <input defaultChecked={newItem.favourite} onChange={handleCheckChange} type="checkbox" id="favourite" name="favourite"/>
                    <label htmlFor="favourite"> Add to favourites</label><br />
                </div>
                <div className="input-field">
                    <label htmlFor="notes">Notes (optional)</label>
                    <textarea defaultValue={newItem.notes} onChange={handleChange} name="notes" id="notes" cols="30" rows="10" placeholder="Enter additional content"></textarea>
                </div>
                <button type="submit" className="btn-pry">Save details</button>
            </form></>
  )
}

export default UpdateItem