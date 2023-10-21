
import paths from '../statics/assetsImport'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { authActions } from '../redux/slices/authSlice'

const RegisterForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(authActions.signup)
    }
  return (
         <div className="field-container">
                <h1>Create new account</h1>
                <p>Manage your login details more securely</p>
                <form onSubmit={handleSubmit}>
                    <div className="input">
                        <input name="firstname" type="text" placeholder="Enter Firstname" />
                    </div>
                    <div className="input">
                        <input name="lastname" type="text" placeholder="Enter Lastname" />
                    </div>
                    <div className="input">
                        <input name="email" type="email" placeholder="Enter email address" />
                    </div>
                    <div className="input">
                        <input name="password" type="password" placeholder="Choose a master password" />
                    </div>
                    <div className="input">
                        <input name="password-confirm" type="password" placeholder="Re-enter password" />
                    </div>
                    <button type="submit" className="btn-pry register">Create account</button>
                </form>
                <button type="button" className="btn-trans google-auth">
                    <img src={ paths.googleLogo } alt="" />
                    <span>Sign up with Google</span>
                </button>
                <div className="logged-in">
                    <p>Already have an account? <Link to="/login">Sign In</Link></p>
                    <img src={ paths.line } alt="" />
                </div>
            </div>
    
  )
}

export default RegisterForm