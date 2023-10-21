import StatusItem from "./StatusItem"
import paths from "../../statics/assetsImport"
import { useSelector } from "react-redux"

const StatusItems = () => {
   const statusInfoValue = useSelector(state => state.user.passwordList)
  // const statusInfo = {

  // }
  return (
    <div className="password-blocks">
        <StatusItem source={paths.bigkey} value={statusInfoValue.length} text="Total Passwords"/>
        <StatusItem source={paths.caution} value={0} text="Weak Passwords"/>
        <StatusItem source={paths.copy} value={0} text="Duplicate passwords"/>
    </div>
  )
}

export default StatusItems