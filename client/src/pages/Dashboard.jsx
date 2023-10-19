import SideBar from "../components/dashboard/SideBar";
import NavigationBar from "../components/dashboard/NavigationBar";
import { useEffect } from "react";
import DashboardHome from "../views/DashboardHome";



const Dashboard = () => {

  useEffect(()=> {
    document.title = "Passhash - Dashboard"
})
  return (
    <>
      <NavigationBar />
      <main className="dashboard">
      <SideBar />
      <DashboardHome />
      </main>
    </>
  )
}

export default Dashboard