import Searchbar from "../components/dashboard/Searchbar"
import PasswordItems from "../components/dashboard/PasswordItems"
import { useDispatch } from "react-redux"
import { popupActions } from "../redux/slices/popupSlice"

const Vault = () => {
  const dispatch = useDispatch()
  const showPopUp = (value) => {
      if(value == "newItems"){
        dispatch(popupActions.show({ newItemPop: true}))
      }
      if(value == "newFolder"){
        dispatch(popupActions.show({ NewFolderPop: true}))
      }
  }
  return (
    <div className="vault-body">
        <Searchbar />
        <div className="vault-actions">
                <button onClick={() => showPopUp("newItems")} type="button" className="btn-pry">Add new items +</button>
                <button onClick={() => showPopUp("newFolder")} type="button" className="btn-pry">Create new folder +</button>
        </div>
        <div className="analytics-items">
            <PasswordItems tag="Details" isVaultItem={true} />
        </div>
    </div>
  )
}

export default Vault