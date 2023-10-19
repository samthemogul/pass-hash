import StatusItem from "./StatusItem"
import paths from "../../statics/assetsImport"

const StatusItems = () => {
  return (
    <div className="password-blocks">
        <StatusItem source={paths.bigkey} value={2}/>
        <StatusItem source={paths.caution} value={6}/>
        <StatusItem source={paths.copy} value={2}/>
    </div>
  )
}

export default StatusItems