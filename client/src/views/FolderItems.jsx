import Searchbar from "../components/dashboard/Searchbar"
import PasswordItems from "../components/dashboard/PasswordItems"
import { useDispatch, useSelector } from "react-redux"
import { popupActions } from "../redux/slices/popupSlice"

const FolderItems = () => {
  const dispatch = useDispatch()
  const folderName = useSelector(state => state.folder)
  const showPopUp = (value) => {
      if(value == "newItems"){
        dispatch(popupActions.show({ newItemPop: true}))
      }
  }
  return (
    <div className="vault-body">
        <Searchbar />
        <div className="vault-actions">
                <button onClick={() => showPopUp("newItems")} type="button" className="btn-pry">Add new items +</button>
        </div>
        <div className="analytics-items">
            <PasswordItems tag="Folder" isVaultItem={true} />
        </div>
    </div>
  )
}

export default FolderItems