import { Component } from "react"
import paths from "../../statics/assetsImport"
import { useSelector } from "react-redux"
import { useState } from "react"

const PasswordItem = ({  vaultItem, item, tag }) => {

    const passwordItem = item
    const [ passwordShow, setPasswordShow ] = useState(false)
    const passwordDisplay = () => {
        setPasswordShow((prev) => !prev)
    }
    
  return (
    <li>
        <span className="for-name">{  passwordItem.name}</span>
        <span className="for-status strong">{  passwordItem.status}</span>
        <span className="for-pass" onClick={passwordDisplay}>{passwordShow ? passwordItem.value : "**********"}</span>
        {vaultItem && <span className="for-pass">{  passwordItem.folder}</span> }
        <span className="for-copy">
            <button className="copy"><img src={paths.profileIcon} alt="" /></button>
            <button className="copy"><img src={paths.securityLock} alt="" /></button>
              <button className="copy"><img src={paths.edit} alt="" /></button>
              <button className="copy"><img src={paths.deleteIcon} alt="" /></button>
              <button className="copy"><img src={paths.folder} alt="" /></button>
            
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