import { useSelector } from "react-redux";
import PasswordItemConfigured from "./PasswordItem"


const PasswordItems = ({ tag, isVaultItem}) => {

    const passwordItemList = useSelector(state => state.user.passwordList);
    let passwordList = passwordItemList;
    const searchValue = useSelector(state => state.search.value)
    const activeFolder = useSelector(state => state.folder.folder)
    const favItems = passwordItemList.filter((item) => item.favourite == true)
    const recentItems = (passwordList) => {
        if(passwordList.length >= 10){
            return passwordList.slice(-10)
        }
        else {
            return passwordList
        }
    }
    const folderItems = (passwordList) => {
        const items = passwordList.filter((item) => item.folder == activeFolder)
        return items
    }
    const searchItems = (passwordList) => {
        const items = passwordList.filter((item) => item.webUrl.toLowerCase().includes(searchValue.toLowerCase()))
        return items
    }
    const filterList = () => {
        if(tag == "Favourites") {
            return favItems
        }
        if(tag == "Details"){
            return passwordList
        }
        if(tag == "Recent"){
            return recentItems(passwordList)
        }
        if(tag == "Folder") {
            return folderItems(passwordList)
        }
        if(tag == "Search results") {
            return searchItems(passwordList)
        }
    }
    const filteredList = filterList()
  const vaultItem = isVaultItem
  return (
    <div className="recent-con">
                            <div className="head-tag">
                                <h4>{tag == "Folder" ? `Folder name: ${activeFolder}`: tag}</h4>
                                <span className="dots blue"></span>
                                <span className="dots black"></span>
                                <span className="material-symbols-outlined">
                                    more_vert
                                    </span>
                            </div>
                            {!vaultItem ? <div className="subtag-description">
                                <p>name</p>
                                <p className="hide-on-shrink">status</p>
                                <p className="hide-on-shrink">password</p>
                                <p>copy details</p>
                            </div> : <div className="subtag">
                        <p>name</p>
                        <p className="hide-on-shrink">status</p>
                        <p className="hide-on-shrink">password</p>
                        <p className="hide-on-shrink">folder</p>
                        <p>actions</p>
                    </div>}
                            <ul className="password-items">
                                { filteredList.length ? filteredList.map((item) => {
                                  return <PasswordItemConfigured key={item._id} vaultItem={vaultItem} item={item} tag={tag} />
                                }) : <li><em>No items added yet..</em></li>}
                                
                            </ul>
                        </div>
  )
}

export default PasswordItems