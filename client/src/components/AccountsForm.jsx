

const AccountsForm = ({ name, email, masterPassword, recoveryEmail}) => {
  return (
    <form action="">
                <div className="account-detail">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" value={name} />
                </div>
                <div className="account-detail">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" id="email" value={email} />
                </div>
                <div className="account-detail">
                    <label htmlFor="master-password">Master password</label>
                    <input type="password" className="password" name="master-password" id="master-password" value={masterPassword} />
                    <span className="material-symbols-outlined">
                        refresh
                        </span>
                    <span className="material-symbols-outlined view">
                        visibility
                        </span>
                </div>
                <div className="account-detail">
                    <label htmlFor="recovery-mail">Recovery email</label>
                    <input type="email" name="recovery-mail" id="recovery-mail" value={recoveryEmail} />
                </div>
                <button type="submit" className="btn-pry">Save details</button>
            </form>
  )
}

export default AccountsForm