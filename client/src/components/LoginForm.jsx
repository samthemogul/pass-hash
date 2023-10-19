
import { Link } from 'react-router-dom'
import paths from '../statics/assetsImport'

const LoginForm = () => {
  return (
    <div className="field-container login">
                <h1>Welcome Back</h1>
                <p>Manage your login details more securely</p>
                <form action="">
                    <div className="input">
                        <input name="email" type="email" placeholder="Enter email address" />
                    </div>
                    <div className="input">
                        <input name="password" type="password" placeholder="Enter master password" />
                    </div>
                    <button type="submit" className="btn-pry register">Login</button>
                </form>
                <button type="button" className="btn-trans google-auth"><img src={paths.googleLogo} alt="" /><span>Sign in with Google</span></button>
                <div className="logged-in">
                    <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
                    <img src={paths.line} alt="" />
                </div>
            </div>
  )
}

export default LoginForm