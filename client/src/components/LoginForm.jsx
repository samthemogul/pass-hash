import { Link, useLocation, useNavigate } from "react-router-dom";
import paths from "../statics/assetsImport";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/slices/authSlice";
import { userActions } from "../redux/slices/userSlice";
import { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import Notice from "./Notice";
import axios from 'axios';
import { signInWithGoogle } from "../firebase";

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
  const logUser = (data) => {
    dispatch(userActions.login(data));
    dispatch(authActions.login());
  };

  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  
  const [ errorMessage, setErrorMessage ] = useState("")
  const [loading, setLoading] = useState(false);

  const loginValidation = (credentials) => {
      setLoading(true);
      axios.post('https://passhash.onrender.com/auth/login', credentials)
    .then(response => {
      // Handle the response data
      setLoading(false);
      if(response.status == 200 ){
        logUser(response.data.user)
        setLoading(false);
      } else {
        setDisplayError(true)
        setLoading(false);
      }
    })
    .catch(error => {
      // Handle errors
      setLoading(false);
      setErrorMessage(error.response.data.msg)
      setDisplayError(true)
    });
    }
  
  const [ displayError, setDisplayError ] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    loginValidation(formValue)
  };

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const [passwordView, setPasswordView] = useState(false);

  const handleView = () => {
    setPasswordView((prev) => !prev);
  };

  const handleGoogleAuth = async () => {
    try {
      const authResult = await signInWithGoogle();
      console.log(authResult);
      // Handle the response, e.g., set user data in your app's state.
    } catch (error) {
      console.error(error);
      // Handle the error, e.g., display an error message to the user.
    }
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
        {displayError && <Notice error={[errorMessage]} />}
        <div className="loading">
        {loading && <BeatLoader
        color={'#000000'}
        loading={loading}
        cssOverride={override}
        size={7}
      />}
        </div>
        <button type="submit" className="btn-pry register">
          Login
        </button>
      </form>
      {/* <button 
      type="button" 
      className="btn-trans google-auth"
      onClick={handleGoogleAuth}
      >
        <img src={paths.googleLogo} alt="" />
        <span>Sign in with Google</span>
      </button> */}
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
