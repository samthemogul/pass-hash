import { useDispatch } from "react-redux"
import { popupActions } from "../../redux/slices/popupSlice"

const SettingOption = ({ icon, span, text, action }) => {
  const dispatch = useDispatch()
  const showPopUp = (value) => {
    if(value == "autofill"){
      dispatch(popupActions.show({ AutoFillPop: true}))
    }
    if(value == "manage"){
      dispatch(popupActions.show({ ManageFolderPop: true}))
    }
    if(value == "2fa"){
      dispatch(popupActions.show({ TwoStepLoginPop: true}))
    }
    if(value == "about"){
      dispatch(popupActions.show({ AboutUsPop: true}))
    }
    if(value == "rate"){
      dispatch(popupActions.show({ RateUsPop: true}))
    }
  }
  return (
    <div onClick={() => showPopUp(action)} className="setting-option">
                <h4><span className="material-symbols-outlined">
                    {icon}
                    </span>{span}</h4>
                <p>{text}</p>
            </div>
  )
}

export default SettingOption