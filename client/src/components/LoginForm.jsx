
import { Link, useLocation, useNavigate } from 'react-router-dom'
import paths from '../statics/assetsImport'
import { useDispatch } from 'react-redux'
import { authActions } from '../redux/slices/authSlice';
import { userActions } from '../redux/slices/userSlice';

const LoginForm = () => {
    const dispatch = useDispatch();
    const user = {
        firstname : "Samuel",
        lastname: "Emeka",
        password: "123",
        email: "samuelemeka@gmail.com",
        recoveryEmail: "samuelemeka@gmail.com",
        passwordList: [
            {
                name: "www.github.com",
                status: "strong",
                value: "strongpass",
                favourite: true,
                folder: "None"
            }
        ]
    }
    const logUser = () => {
        dispatch(userActions.add({
            firstname : "Samuel",
            lastname: "Emeka",
            password: "123",
            email: "samuelemeka@gmail.com",
            recoveryEmail: "samuelemeka@gmail.com",
            passwordList: [
                {
                    name: "www.github.com",
                    status: "strong",
                    value: "strongpass",
                    favourite: false,
                    folder: "None"
                }
            ]
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        logUser()
        dispatch(authActions.login());
        
        // if(location.state?.from && location.state.from.pathname !== '/dashboard/logout') {
        //     navigate(location.state.from);
        // } else {
        //     navigate('/dashboard/home')
        // }
    }

    


  return (
    <div className="field-container login">
                <h1>Welcome Back</h1>
                <p>Manage your login details more securely</p>
                <form onSubmit={handleSubmit}>
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