import { useSelector } from "react-redux";
import PasswordItemConfigured from "./PasswordItem"


const PasswordItems = ({ tag, isVaultItem}) => {

    const passwordItemList = useSelector(state => state.user.passwordList);
    let passwordList = passwordItemList;
    const favItems = passwordItemList.filter((item) => item.favourite == true)
    const filterList = () => {
        if(tag == "Favourites") {
            return favItems
        } else {
            return passwordList
        }
    }
    const filteredList = filterList()
  const vaultItem = isVaultItem
  return (
    <div className="recent-con">
                            <div className="head-tag">
                                <h4>{tag}</h4>
                                <span className="dots blue"></span>
                                <span className="dots black"></span>
                                <span className="material-symbols-outlined">
                                    more_vert
                                    </span>
                            </div>
                            {!vaultItem ? <div className="subtag-description">
                                <p>name</p>
                                <p>status</p>
                                <p>password</p>
                                <p>copy details</p>
                            </div> : <div className="subtag-description">
                        <p>name</p>
                        <p>status</p>
                        <p>password</p>
                        <p>folder</p>
                        <p>actions</p>
                    </div>}
                            <ul className="password-items">
                               <PasswordItemConfigured vaultItem={vaultItem} items={filteredList} tag={tag} />
                                
                            </ul>
                        </div>
  )
}

export default PasswordItems