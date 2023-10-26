import { useDispatch, useSelector } from "react-redux"
import { popupActions } from "../redux/slices/popupSlice";
import useShowPopUp from "../constants/customHooks/useShowPopUp";
import NewItem from "./popUpContent/dashboard/NewItem";
import PasswordSetting from "./popUpContent/generator/PasswordSetting";
import UsernameSetting from "./popUpContent/generator/UsernameSetting";
import AboutUs from "./popUpContent/settings/AboutUs";
import AutoFill from "./popUpContent/settings/AutoFill";
import ManageFolder from "./popUpContent/settings/ManageFolder";
import RateUs from "./popUpContent/settings/RateUs";
import TwoStepLogin from "./popUpContent/settings/TwoStepLogin";
import NewFolder from "./popUpContent/vault/NewFolder";
import DeleteItem from "./popUpContent/vault/DeleteItem";
import UpdateItem from "./popUpContent/dashboard/UpdateItem";
import UpdateAccount from "./popUpContent/vault/UpdateAccount";





const PopUp = () => {
    const popState = useSelector(state => state.popup.content)
    const dispatch = useDispatch();
        const hidePopUp = () => {
            dispatch(popupActions.hide())
    }
    
  return (
    <div className="popup-env">
        <div className="pop-section">
            <button onClick={hidePopUp} type="button" className="close-btn"><span className="material-symbols-outlined">
                close
                </span></button>
            {popState.newItemPop && <NewItem />}
            {popState.passwordSettingPop && <PasswordSetting />}
            {popState.usernameSettingPop && <UsernameSetting />}
            {popState.AboutUsPop && <AboutUs />}
            {popState.AutoFillPop && <AutoFill />}
            {popState.ManageFolderPop && <ManageFolder />}
            {popState.RateUsPop && <RateUs />}
            {popState.TwoStepLoginPop && <TwoStepLogin />}
            {popState.NewFolderPop && <NewFolder />}
            {popState.deleteItemPop && <DeleteItem />}
            {popState.updateItemPop && <UpdateItem />}
            {popState.updateAccountPop && <UpdateAccount />}
        </div>
    </div>
  )
}

export default PopUp