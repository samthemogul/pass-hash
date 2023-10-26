import { Component } from "react"
import paths from "../../statics/assetsImport"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { popupActions } from "../../redux/slices/popupSlice"
import { userActions } from "../../redux/slices/userSlice"
import { infoActions } from "../../redux/slices/infoSlice"

const PasswordItem = ({  vaultItem, item, tag }) => {
  
    const dispatch = useDispatch()
    const passwordItem = item
    const [ passwordShow, setPasswordShow ] = useState(false)
    const passwordDisplay = () => {
        setPasswordShow((prev) => !prev)
    }
    const handleDelete = () => {
      dispatch(popupActions.show({ deleteItemPop : true }))
      dispatch(userActions.selectDeleteId(passwordItem.id))
    }
    const handleUpdate = () => {
      dispatch(userActions.selectUpdateId(passwordItem.id))
      dispatch(popupActions.show({ updateItemPop: true }))
    }
    const handleCopy = (value) => {
      navigator.clipboard.writeText(value)
      dispatch(infoActions.show({ copySuccess: true}))
      setTimeout(()=> {
        dispatch(infoActions.hide())
    }, 4000)
    }
    const handleFolder =() => {
      dispatch(popupActions.show({ ManageFolderPop: true}))
    }

  return (
    <li>
        <span className="for-name">{  passwordItem.webUrl}</span>
        <span className="for-status strong">{  passwordItem.status}</span>
        <span className="for-pass" onClick={passwordDisplay}>{passwordShow ? passwordItem.value : "**********"}</span>
        {vaultItem && <span className="for-pass">{  passwordItem.folder}</span> }
        <span className="for-copy">
            <button onClick={()=> handleCopy(passwordItem.username)} className="copy"><img src={paths.profileIcon} alt="" /></button>
            <button onClick={()=> handleCopy(passwordItem.value)} className="copy"><img src={paths.securityLock} alt="" /></button>
              <button onClick={handleUpdate} className="copy"><img src={paths.edit} alt="" /></button>
              <button onClick={handleDelete} className="copy"><img src={paths.deleteIcon} alt="" /></button>
              <button onClick={handleFolder} className="copy"><img src={paths.folder} alt="" /></button>
            
        </span>
    </li>
  )
}

const withConditionalList = ({ loadingList, emptyList}) => (Component) => (props) => {
  if (props.isLoading) return <li><em>{loadingList}</em></li>;
  return <Component {...props} />;
};

const PasswordItemConfigured = withConditionalList({
  loadingList: 'Loading details...',
  emptyList: 'No details added yet...',
})(PasswordItem)

export default PasswordItemConfigured;