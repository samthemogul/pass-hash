import Searchbar from "../components/dashboard/Searchbar"
import PasswordItems from "../components/dashboard/PasswordItems"

const Vault = () => {
  return (
    <div className="vault-body">
        <Searchbar />
        <div className="vault-actions">
                <button type="button" className="btn-pry">Add new items +</button>
                <button type="button" className="btn-pry">Create new folder +</button>
        </div>
        <div className="analytics-items">
            <PasswordItems tag="Details" isVaultItem={true} />
        </div>
    </div>
  )
}

export default Vault