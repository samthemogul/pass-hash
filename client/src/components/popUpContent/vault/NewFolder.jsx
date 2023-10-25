import { useDispatch } from "react-redux"
import { userActions } from "../../../redux/slices/userSlice"
import { useState } from "react"
import { popupActions } from "../../../redux/slices/popupSlice"
import { infoActions } from "../../../redux/slices/infoSlice"


const NewFolder = () => {
  const dispatch = useDispatch()
  const [ folderName, setFolderName ] = useState("")

  const handleChange = (e) => {
    setFolderName(e.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(userActions.createFolder(folderName))
    dispatch(popupActions.hide())
    dispatch(infoActions.show({ folderSuccess: true }))

        setTimeout(()=> {
            dispatch(infoActions.hide())
        }, 4000)
  }
  return (
    <><h2>Create new folder</h2>
    <form onSubmit={handleSubmit}>
        <div className="input-field">
            <label htmlFor="folder">New Folder</label>
            <input defaultValue={folderName} onChange={handleChange} name="folder" type="text" placeholder="Enter folder name" />
        </div>
        <button type="submit" className="btn-pry">Save details</button>
    </form></>
  )
}

export default NewFolder