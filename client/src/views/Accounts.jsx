import AccountsForm from "../components/AccountsForm"

const Accounts = () => {
    const credentials = {
        name: "Samuel",
        email: "samuelemeka@gmail.com",
        masterPassword: "password",
        recoveryEmail: "samuelemeka@gmail.com"
    }
  return (
    <div className="account-body">
        <h3>ACCOUNT DETAILS</h3>
        <AccountsForm name={credentials.name} email={credentials.email} masterPassword={credentials.masterPassword} recoveryEmail={credentials.recoveryEmail} />
        <h3>ACCOUNT REMOVAL</h3>
        <button type="submit" className="btn-pry danger">Delete account</button>
    </div>
  )
}

export default Accounts