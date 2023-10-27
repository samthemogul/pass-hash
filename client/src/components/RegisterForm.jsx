import paths from "../statics/assetsImport";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../redux/slices/authSlice";
import { useEffect, useState } from "react";
import Notice from "./Notice";
import { Formik, Form, Field } from "formik";
import { userActions } from "../redux/slices/userSlice";
import axios from 'axios';
import { RegisterValidation, customPasswordValidation } from "../formik/RegisterValidation";

const RegisterForm = () => {
  const dispatch = useDispatch();

  // useEffect(()=> {
        
  // })
  const regUser =(data) => {
    axios.post('https://passhash.onrender.com/auth/register', data)
  .then(response => {
    // Handle the response data
    dispatch(authActions.signup());
    dispatch(userActions.register(response.data))
    // console.log(response.data);
  })
  .catch(error => {
    // Handle errors
    console.error(error);
  });
  }
  const registerUser = (details) => {
      event.preventDefault();
      regUser(details)
    //   dispatch(authActions.signup())
    //   dispatch(userActions.register({
    //     firstname : details.firstname,
    //     lastname: details.lastname,
    //     password: details.password,
    //     email: details.email,
    //     recoveryEmail: "",
    //     passwordList: [],
    //     passwordSettings : {
    //         passwordLength: 12,
    //         includeCapitals: true,
    //         includeSmall: true,
    //         includeNumbers: true,
    //         includeSymbols: true,
    //     },
    //     usernameSettings : {
    //         capitalize: true,
    //         includeDigits: true
    //     },
    //     folders: ["No folder"],
    // }));
  }
  const [passwordView, setPasswordView] = useState(false);
  const [passwordConfirmView, setPasswordConfirmView] = useState(false);

  const handleView = () => {
    setPasswordView((prev) => !prev);
  };
  const handleConfirmView = () => {
    setPasswordConfirmView((prev) => !prev);
  };
  // Form Validation Logic
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [ passwordErrors, setPasswordErrors ] = useState([])
  const validatePassword = (e) => {
    const passwordToCheck = e.target.value
    const failureList = customPasswordValidation(passwordToCheck)
    if(passwordToCheck == ""){
        setPasswordErrors(["Please enter a password"])
    } else{
        setPasswordErrors(failureList)
    }
    
    
 
  }
  const [ showErrors, setShowErrors ] = useState(false)
  useEffect(()=> {
    if(passwordErrors.length > 0){
        setShowErrors(true)
    } else {
        setShowErrors(false)
    }
  },[passwordErrors])

  return (
    <div className="field-container">
      <h1>Create new account</h1>
      <p>Manage your login details more securely</p>
      <Formik
        initialValues={initialValues}
        validationSchema={RegisterValidation}
        onSubmit={(values) => {
            registerUser(values)
        }}
      >
        {({errors, handleChange, values, handleSubmit, status}) => (
            <Form >
            <div className="input">
              <Field
                name="firstname"
                type="text"
                placeholder="Enter Firstname"
              />
            </div>
            {errors.firstname && <Notice error={[errors.firstname]} />}
            <div className="input">
              <Field 
              name="lastname" 
              type="text" 
              placeholder="Enter Lastname"
              />
            </div>
            {errors.lastname && <Notice error={[errors.lastname]} />}
            <div className="input">
              <Field 
              name="email" 
              type="email" 
              placeholder="Enter email address"
              />
            </div>
            {errors.email && <Notice error={[errors.email]} />}
            <div className="input">
              <Field
                name="password"
                type={passwordView ? "text" : "password"}
                placeholder="Choose a master password"
                onChange={(e) => {
                    handleChange(e);
                    validatePassword(e);
                }}
              />
              <span onClick={handleView} className="material-symbols-outlined">
                {passwordView ? "visibility_off" : "visibility"}
              </span>
            </div>
            {showErrors && <Notice error={passwordErrors} />}
            <div className="input">
              <Field
                name="confirmPassword"
                type={passwordConfirmView ? "text" : "password"}
                placeholder="Re-enter password"
              />
              <span
                onClick={handleConfirmView}
                className="material-symbols-outlined"
              >
                {passwordConfirmView ? "visibility_off" : "visibility"}
              </span>
            </div>
            {errors.confirmPassword && <Notice error={[errors.confirmPassword]} />}
            <button type="submit" className="btn-pry register">
              Create account
            </button>
          </Form>
        )}
      
      </Formik>
      <button type="button" className="btn-trans google-auth">
        <img src={paths.googleLogo} alt="" />
        <span>Sign up with Google</span>
      </button>
      <div className="logged-in">
        <p>
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
        <img src={paths.line} alt="" />
      </div>
    </div>
  );
};

export default RegisterForm;
