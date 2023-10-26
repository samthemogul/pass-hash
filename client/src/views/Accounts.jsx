import { useState } from "react"
import AccountsForm from "../components/AccountsForm"
import paths from "../statics/assetsImport"

const Accounts = () => {

  const [ edit, setEdit ] = useState(false)

  const handleEdit = () => {
    console.log("Pic edited")
  }
    
  return (
    <div className="account-body">
       <div className="acc-set">
       <div className="profile-photo-section">
                <div className="profile-photo"
                onMouseEnter={()=> setEdit(true)}
                onMouseLeave={()=> setEdit(false)}>
                    <img src={paths.defaultProfile} alt="Profile Photo"
    
                     />
                    <div className={edit ? "change-photo active" : "change-photo"}
                    onClick={handleEdit}
                    >
                        <span className="material-symbols-outlined">
                            photo_camera
                            </span>
                    </div>
                </div>
                <div className="photo-desc">
                    <h2>Profile Photo</h2>
                    <p>Personalize your account with a unique avatar.
                         Keep your digital identity secure, just
                         like your passwords.</p>
                </div>
            </div>
       <h3>ACCOUNT DETAILS</h3>
        <AccountsForm />
        <h3>ACCOUNT REMOVAL</h3>
        <button type="submit" className="btn-pry danger">Delete account</button>
       </div>
    </div>
  )
}

export default Accounts