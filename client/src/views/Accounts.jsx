import AccountsForm from "../components/AccountsForm"

const Accounts = () => {
    
  return (
    <div className="account-body">
       <div className="acc-set">
       <h3>ACCOUNT DETAILS</h3>
        <AccountsForm />
        <h3>ACCOUNT REMOVAL</h3>
        <button type="submit" className="btn-pry danger">Delete account</button>
       </div>
    </div>
  )
}

export default Accounts