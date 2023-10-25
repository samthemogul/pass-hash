import { useDispatch, useSelector } from "react-redux"
import { popupActions } from "../../redux/slices/popupSlice"
import usePasswordGenerate from "../../constants/customHooks/usePasswordGenerate"
import { useEffect, useState } from "react"
import useUsernameGenerate from "../../constants/customHooks/useUsernameGenerate"
import { infoActions } from "../../redux/slices/infoSlice"

const GeneratorEngine = ({ imagePath, value, buttonText, linkText, action }) => {
  const passwordSettings = useSelector(state => state.user.passwordSettings)
  const usernameSettings = useSelector(state => state.user.usernameSettings)
  const [ genCount , setGenCount ] = useState(0)
  const dispatch = useDispatch()
  const [initialPasswordGenerated, setInitialPasswordGenerated] = useState(true);
  const showPopUp = (value) => {
    if(value == "passwordSet"){
      dispatch(popupActions.show({ passwordSettingPop: true}))
    }
    if(value == "usernameSet"){
      dispatch(popupActions.show({ usernameSettingPop: true}))
    }
  }
  const handleCopy = (value) => {
    navigator.clipboard.writeText(value)
    dispatch(infoActions.show({ copySuccess: true}))
    setTimeout(()=> {
      dispatch(infoActions.hide())
  }, 4000)
  }
 
  const genPassword = usePasswordGenerate(passwordSettings.passwordLength, genCount, passwordSettings.includeCapitals, passwordSettings.includeSmall, passwordSettings.includeNumbers, passwordSettings.includeSymbols).join('');

  useEffect(() => {
    if (!initialPasswordGenerated) {
      // Set the initial password only once when it's generated
      if (genPassword.length > 0) {
        setInitialPasswordGenerated(true);
      }
    }
  }, [genPassword, initialPasswordGenerated]);

  const [ password, setPassword ] = useState(genPassword)
  const [ username, setUsername ] = useState(useUsernameGenerate(usernameSettings.capitalize, usernameSettings.includeDigits))
  const genUsername = useUsernameGenerate(usernameSettings.capitalize, usernameSettings.includeDigits)

  const generate = () => {
    if (buttonText === "Regenerate password") {
      setPassword(genPassword)
      setGenCount(genCount + 1);
    }
    if (buttonText === "Regenerate username") {
      setUsername(genUsername)
    }
  }
  return (
    <div className="gen-section">
                <img src={imagePath} alt="" />
                <div className="generated">
                    <input type="text" value={buttonText == "Regenerate password" ? password : username} />
                    <span onClick={()=> handleCopy(buttonText == "Regenerate password" ? password : username)} className="material-symbols-outlined">
                        file_copy
                        </span>
                </div>
                <button onClick={generate} type="button" className="btn-pry">{buttonText}</button>
                <p>Edit <span onClick={() => showPopUp(action)}>{linkText}</span></p>
            </div>
  )
}

export default GeneratorEngine