import Searchbar from "../components/dashboard/Searchbar"
import StatusItems from "../components/dashboard/StatusItems"

const DashboardHome = () => {
  return (
    <div>
      <div className="content" id="db">
        <div className="dashboard-body">
        <Searchbar />
        <StatusItems />
        <button className="btn-pry new-item">Add new item +</button>
        </div>
      </div>
    </div>
  )
}

export default DashboardHome
