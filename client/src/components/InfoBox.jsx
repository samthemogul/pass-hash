import { useSelector } from "react-redux"
import NewItemSuccess from "./infoBoxContent/NewItemSuccess"
import NewFolderSuccess from "./infoBoxContent/NewFolderSuccess"
import DeleteDetailSuccess from "./infoBoxContent/DeleteDetailSuccess"
import UpdateItemSuccess from "./infoBoxContent/UpdateItemSuccess"
import CopyDetailsSuccess from "./infoBoxContent/CopyDetailsSuccess"


const InfoBox = () => {
    const infoState = useSelector(state => state.info.content)
  return (
    <div className="info-box">
        { infoState.itemSuccess && <NewItemSuccess />}
        { infoState.itemUpdateSuccess && <UpdateItemSuccess />}
        { infoState.folderSuccess && <NewFolderSuccess />}
        { infoState.deleteSuccess && <DeleteDetailSuccess />}
        { infoState.copySuccess && <CopyDetailsSuccess />}
    </div>
  )
}

export default InfoBox