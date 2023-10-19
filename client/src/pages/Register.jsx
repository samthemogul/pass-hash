import { useEffect } from "react";
import { Link } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import paths from "../statics/assetsImport";



const Register = () => {
useEffect(()=> {
    document.title = "Passhash - Register"
},[])

  return (
    <main className="container">
        <section className="desc">
            <div className="logo-con">
                <Link to="/">
                    <img className="logo" src="/passhash-logo.png" alt="Pass hash" />
                    <h1>Passhash</h1>
                </Link>
            </div>
            <div className="description">
                <img src={paths.registerpic} alt="" />
            </div>
        </section>
        <section className="form-container">
           <RegisterForm />
        </section>
    </main>
  )
}

export default Register