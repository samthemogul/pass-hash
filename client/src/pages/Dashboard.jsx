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
import { useDispatch, useSelector } from "react-redux";
import InfoBox from "../components/InfoBox";
import { infoActions } from "../redux/slices/infoSlice";
import FolderItems from "../views/FolderItems";
import SearchResults from "../views/SearchResults";



const Dashboard = ({ isSignedIn }) => {
  const user = useSelector(state => state.user)
  const displayPopUp = useSelector(state => state.popup.display)
  const displayInfoBox = useSelector(state => state.info.display)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  useEffect(()=> {
    document.title = "Passhash - Dashboard"

    if(isSignedIn){
        navigate('/dashboard/home')
    }
    

}, [])    
  return (
    <div className="dashboard-con">
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
        <Route path="folders" element={<FolderItems />} />
        <Route path="search-results" element={<SearchResults />} />
        </Routes>
      {/* </Routes> */}
      {/* <DashboardHome /> */}
      {/* <Vault /> */}
      {/* <Settings /> */}
      {/* <Accounts /> */}
      </main>
      { displayPopUp && <PopUp />}
      { displayInfoBox && <InfoBox />}
    </div>
  )
}

export default Dashboard