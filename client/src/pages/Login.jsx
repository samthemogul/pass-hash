import { useEffect } from "react"
import LoginForm from "../components/LoginForm"
import { Link } from "react-router-dom"
import paths from "../statics/assetsImport"



const Login = () => {

    useEffect(()=> {
        document.title = "Passhash - Login"
    })
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
           <LoginForm />
        </section>
    </main>
  )
}

export default Login