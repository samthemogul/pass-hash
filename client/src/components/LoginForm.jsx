import { Link, useLocation, useNavigate } from "react-router-dom";
import paths from "../statics/assetsImport";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/slices/authSlice";
import { userActions } from "../redux/slices/userSlice";
import { useEffect, useState } from "react";
import Notice from "./Notice";

const LoginForm = () => {
  const dispatch = useDispatch();

  const users = [
    {
      email: "samuelemeka@gmail.com",
      password: "sam123",
    },
    {
      email: "newuser@gmail.com",
      password: "new123",
    },
  ];
  const logUser = () => {
    dispatch(
      userActions.login({
        firstname: "Samuel",
        lastname: "Emeka",
        password: "123",
        email: "samuelemeka@gmail.com",
        recoveryEmail: "samuelemeka@gmail.com",
        passwordList: [],
        passwordSettings: {
          passwordLength: 5,
          includeCapitals: true,
          includeSmall: true,
          includeNumbers: true,
          includeSymbols: true,
        },
        usernameSettings: {
          capitalize: true,
          includeDigits: true,
        },
        folders: ["No folder"],
      })
    );
  };

  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const loginValidation = (credentials) => {
    for(const individual in users){
        if(credentials.email == users[individual].email && credentials.password == users[individual].password){
            return users[individual]
        }
    }
    return false
  }
  const [ displayError, setDisplayError ] = useState(false)
//   useEffect(()=> {
//     if(!loginValidation(formValue) && formValue.email !== ""){
//         setDisplayError(true)
//         console.log(formValue.email)
//     }
//   },[])

  const handleError =() => {
    if(loginValidation(formValue) == false){
        setDisplayError(true)
    } else {
        setDisplayError(false)
        logUser()
        dispatch(authActions.login());
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleError();
    // logUser()
    // 

    // if(location.state?.from && location.state.from.pathname !== '/dashboard/logout') {
    //     navigate(location.state.from);
    // } else {
    //     navigate('/dashboard/home')
    // }
  };

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const [passwordView, setPasswordView] = useState(false);

  const handleView = () => {
    setPasswordView((prev) => !prev);
  };

  return (
    <div className="field-container login">
      <h1>Welcome Back</h1>
      <p>Manage your login details more securely</p>
      <form onSubmit={handleSubmit}>
        <div className="input">
          <input
            name="email"
            type="email"
            placeholder="Enter email address"
            onChange={handleChange}
            defaultValue={formValue.email}
          />
        </div>
        <div className="input">
          <input
            name="password"
            type={passwordView ? "text" : "password"}
            placeholder="Enter master password"
            onChange={handleChange}
            defaultValue={formValue.password}
          />
          <span onClick={handleView} className="material-symbols-outlined">
            {passwordView ? "visibility_off" : "visibility"}
          </span>
        </div>
        {displayError && <Notice error={["Invalid credentials"]} />}
        <button type="submit" className="btn-pry register">
          Login
        </button>
      </form>
      <button type="button" className="btn-trans google-auth">
        <img src={paths.googleLogo} alt="" />
        <span>Sign in with Google</span>
      </button>
      <div className="logged-in">
        <p>
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
        <img src={paths.line} alt="" />
      </div>
    </div>
  );
};

export default LoginForm;
