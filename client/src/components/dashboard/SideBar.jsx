import { NavLink, Outlet, useNavigate } from "react-router-dom";
import paths from "../../statics/assetsImport";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../redux/slices/authSlice";
import { userActions } from "../../redux/slices/userSlice";

const SideBar = () => {
    const toggleValue = useSelector(state => state.sidebar.display)
    const dispatch = useDispatch();
    const Logout = () => {
        dispatch(authActions.logout())
        dispatch(userActions.logout())
    }
  return (
    <aside id="aside" className={toggleValue ? "active" : ""} >
            <div className="aside-container">
                
                <div className="menu-items">
                <NavLink to="home"><div className="menu-options">
                        <img src={paths.dashboard} alt="" />
                        <span className="menu-text">Dashboard</span>
                    </div></NavLink>
                <NavLink to="generator"><div className="menu-options">
                        <img src={paths.refresh} alt="" />
                        <span className="menu-text">Generator</span>
                    </div></NavLink>
                <NavLink to="vault"><div className="menu-options">
                        <img src={paths.smallkey} alt="" />
                        <span className="menu-text">Vault</span>
                    </div></NavLink>
                <NavLink to="settings"><div className="menu-options">
                        <img src={paths.settings} alt="" />
                        <span className="menu-text">Settings</span>
                    </div></NavLink>
                <NavLink to="accounts"><div className="menu-options">
                        <img src={paths.accounts} alt="" />
                        <span className="menu-text">Accounts</span>
                    </div></NavLink>
                <NavLink to="logout" onClick={Logout}><div className="menu-options">
                        <img src={paths.signout} alt="" />
                        <span className="menu-text">Logout</span>
                    </div></NavLink>
                </div>
                <Outlet />
            </div>
        </aside>
  )
}

export default SideBar