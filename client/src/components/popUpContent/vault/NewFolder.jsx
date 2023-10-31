import { useDispatch, useSelector } from "react-redux"
import { userActions } from "../../../redux/slices/userSlice"
import { useState } from "react"
import { popupActions } from "../../../redux/slices/popupSlice"
import { infoActions } from "../../../redux/slices/infoSlice"
import axios from "axios"


const NewFolder = () => {
  const dispatch = useDispatch()
  const email = useSelector(state => state.user.email)
  const [ folderName, setFolderName ] = useState("")

  const folder = {
    name: folderName
  }

  const handleChange = (e) => {
    setFolderName(e.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(popupActions.hide())
    dispatch(popupActions.setLoading())
    axios.post(`http://localhost:3001/users/new-folder/${email}`, folder)
    .then(response => {
      dispatch(popupActions.setLoading())
      dispatch(userActions.createFolder(response.data.folder))
      dispatch(infoActions.show({ folderSuccess: true }))
    })
    

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