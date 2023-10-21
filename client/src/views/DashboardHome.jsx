import Searchbar from "../components/dashboard/Searchbar"
import StatusItems from "../components/dashboard/StatusItems"
import PasswordItems from "../components/dashboard/PasswordItems"
import CallToAction from "../components/dashboard/CallToAction"

const DashboardHome = () => {
  return (
    <div>
      <div className="content" id="db">
        <div className="dashboard-body">
        <Searchbar />
        <StatusItems />
        <button className="btn-pry new-item">Add new item +</button>
        <section className="analytics">
          <div className="analytics-items">
              <PasswordItems tag="Recent" isVaultItem={false} />
              <PasswordItems tag="Favourites" isVaultItem={false} />
          </div>
          <CallToAction />
        </section>
        </div>
      </div>
    </div>
  )
}

export default DashboardHome
