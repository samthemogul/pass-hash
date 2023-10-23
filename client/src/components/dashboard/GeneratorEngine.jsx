import { useDispatch } from "react-redux"
import { popupActions } from "../../redux/slices/popupSlice"

const GeneratorEngine = ({ imagePath, value, buttonText, linkText, action }) => {
  const dispatch = useDispatch()
  const showPopUp = (value) => {
    if(value == "passwordSet"){
      dispatch(popupActions.show({ passwordSettingPop: true}))
    }
    if(value == "usernameSet"){
      dispatch(popupActions.show({ usernameSettingPop: true}))
    }
  }
  return (
    <div className="gen-section">
                <img src={imagePath} alt="" />
                <div className="generated">
                    <input type="text" value={value} />
                    <span className="material-symbols-outlined">
                        file_copy
                        </span>
                </div>
                <button type="button" className="btn-pry">{buttonText}</button>
                <p>Edit <span onClick={() => showPopUp(action)}>{linkText}</span></p>
            </div>
  )
}

export default GeneratorEngine