import { Link } from "react-router-dom";
import paths from "../../statics/assetsImport";

const SideBar = () => {
  return (
    <aside id="aside">
            <div className="aside-container">
                <div className="menu">
                    <button className="toggle-menu" type="button"><span className="material-symbols-outlined">
                        menu
                        </span></button>
                </div>
                <div className="menu-items">
                <Link className="active" to="#"><div className="menu-options">
                        <img src={paths.dashboard} alt="" />
                        <span className="menu-text">Dashboard</span>
                    </div></Link>
                <Link to="#"><div className="menu-options">
                        <img src={paths.refresh} alt="" />
                        <span className="menu-text">Generator</span>
                    </div></Link>
                <Link to="#"><div className="menu-options">
                        <img src={paths.smallkey} alt="" />
                        <span className="menu-text">Vault</span>
                    </div></Link>
                <Link to="#"><div className="menu-options">
                        <img src={paths.settings} alt="" />
                        <span className="menu-text">Settings</span>
                    </div></Link>
                <Link to="#"><div className="menu-options">
                        <img src={paths.accounts} alt="" />
                        <span className="menu-text">Accounts</span>
                    </div></Link>
                <Link to="#"><div className="menu-options">
                        <img src={paths.signout} alt="" />
                        <span className="menu-text">Logout</span>
                    </div></Link>
                </div>
            </div>
        </aside>
  )
}

export default SideBar