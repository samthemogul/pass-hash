
import { Link } from 'react-router-dom'
import paths from '../../statics/assetsImport'
import { useSelector } from 'react-redux'

const NavigationBar = () => {
    const name = useSelector(state => state.user.firstname)
  return (
    <nav>
        <div className="logo-con">
            <Link to="/"><img className="logo" src="/passhash-logo.png" alt="Pass hash" /><h1>Passhash</h1></Link>
        </div>
        <div className="accounts">
            <p>Welcome, {name}</p>
            <Link className="nav-icons" to="/settings"><span className="material-symbols-outlined">
                settings
                </span></Link>
            <Link className="nav-icons" to="/help"><span className="material-symbols-outlined">
                help
                </span></Link>
            <div className="profile-pic">
                <img src={paths.profile} alt="Samuel Emeka" />
            </div>
        </div>
    </nav>
  )
}

export default NavigationBar;