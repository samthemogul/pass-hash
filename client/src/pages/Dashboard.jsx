import SideBar from "../components/dashboard/SideBar";
import NavigationBar from "../components/dashboard/NavigationBar";
import { useEffect } from "react";
import DashboardHome from "../views/DashboardHome";
import PopUp from "../components/PopUp";
import Generator from "../views/Generator";
import Vault from "../views/Vault";
import Settings from "../views/Settings";
import Accounts from "../views/Accounts";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";



const Dashboard = ({ isSignedIn }) => {
  const user = useSelector(state => state.user)
  const displayPopUp = useSelector(state => state.popup.display)
  const navigate = useNavigate();
  useEffect(()=> {
    document.title = "Passhash - Dashboard"

    if(isSignedIn){
        navigate('/dashboard/home')
    }


}, [])
  return (
    <>
      <NavigationBar />
      <main className="dashboard">
      <SideBar />
      {/* <Generator /> */}
      {/* <Routes> */}
        <Routes>
        <Route path="home" element={<DashboardHome />} />
        <Route path="generator" element={<Generator />} />
        <Route path="vault" element={<Vault />} />
        <Route path="settings" element={<Settings />} />
        <Route path="accounts" element={<Accounts />} />
        </Routes>
      {/* </Routes> */}
      {/* <DashboardHome /> */}
      {/* <Vault /> */}
      {/* <Settings /> */}
      {/* <Accounts /> */}
      </main>
      { displayPopUp && <PopUp />}
    </>
  )
}

export default Dashboard