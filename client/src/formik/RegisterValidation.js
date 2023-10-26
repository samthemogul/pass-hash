import * as Yup from 'yup'

const passwordRegex = /^(?=(?:.*[A-Z]){2})(?=(?:.*[a-z]){3})(?=(?:.*\d){2})(?=(?:.*[!@#$%^&*()_+|~=`{}\[\]:";'<>?,./\\-]){1}).{8,}$/;


export const RegisterValidation = Yup.object({
    firstname: Yup.string().min(3).required("Firstname must have at least 3 characters"),
    lastname: Yup.string().min(3).required("Lastname must have at least 3 characters"),
    email: Yup.string().email("Please enter a valid email address").required("Please enter an email address"),
    password: Yup.string().matches(passwordRegex, { message: "Please enter a password" }).required("Please enter a password"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password")], "Passwords do not match").required("Please confirm password")
})

export const customPasswordValidation = (password) => {
    const failures = [];
  
    if (!/(?=(.*[A-Z]){2})/.test(password)) {
        failures.push('At least 2 uppercase letters are required.');
      }
    
      if (!/(?=(.*[a-z]){3})/.test(password)) {
        failures.push('At least 3 lowercase letters are required.');
      }
    
      if (!/(?=(.*\d){2})/.test(password)) {
        failures.push('At least 2 numbers are required.');
      }
    
      if (!/(?=(.*[!@#$%^&*()_+|~=`{}\[\]:";'<>?,./\\-]){1})/.test(password)) {
        failures.push('At least 1 special character is required.');
      }
    
      if (password.length < 8) {
        failures.push('Password must be at least 8 characters long.');
      }
  
    return failures;
  };