import { useDispatch, useSelector } from "react-redux"
import { popupActions } from "../../../redux/slices/popupSlice";
import { useEffect, useState } from "react";
import { userActions } from "../../../redux/slices/userSlice";
import Notice from "../../Notice";
import { infoActions } from "../../../redux/slices/infoSlice";


const PasswordSetting = () => {
    const dispatch = useDispatch();
    const loadedOptions = useSelector(state => state.user.passwordSettings)
    const [ options, setOptions ] = useState(loadedOptions)

    // Calculate the disableButton state based on checkbox values
    const disableButton = !(options.includeCapitals || options.includeSmall || options.includeNumbers || options.includeSymbols);


    const handleRangeChange = (e) => {
        setOptions({...options, passwordLength: e.target.value})
        
    }
    const handleCheckChange = (e) => {
            setOptions({...options, [e.target.name]: e.target.checked})
    }

    const saveDetails = (event) => {
        event.preventDefault();
        dispatch(userActions.passwordSet(options))
        dispatch(popupActions.hide())
        dispatch(infoActions.show({ itemUpdateSuccess: true }))

        setTimeout(()=> {
            dispatch(infoActions.hide())
        }, 4000)
    
    }
  return (
    <><h2>Password Settings</h2>
    <form onSubmit={saveDetails}>
        <div className="range">
            <label htmlFor="passwordlength">Password length</label><br/>
            <div className="range-field">
                <input value={options.passwordLength} onChange={handleRangeChange} className="range-input" type="range" id="digits" name="passwordlength" min="5" max="100" />
                <input className="range-value-field" type="text" readOnly value={options.passwordLength} />
            </div>
        </div>
        <div className="check">
            <input defaultChecked={options.includeCapitals}  onChange={handleCheckChange}  type="checkbox" id="capital-letters" name="includeCapitals" value="capital-letters" />
            <label htmlFor="includeCaps">Include letters (A -Z)</label><br/>
        </div>
        <div className="check">
            <input defaultChecked={options.includeSmall} onChange={handleCheckChange} type="checkbox" id="small" name="includeSmall" value="small"/>
            <label htmlFor="includeSmall">Include letters (a - z)</label><br/>
        </div>
        <div className="check">
            <input defaultChecked={options.includeNumbers} onChange={handleCheckChange} type="checkbox" id="numbers" name="includeNumbers" value="numbers"/>
            <label htmlFor="includeNumber">Include numbers (0 - 9)</label><br/>
        </div>
        <div className="check">
            <input defaultChecked={options.includeSymbols} onChange={handleCheckChange} type="checkbox" id="specials" name="includeSymbols" value="specials"/>
            <label htmlFor="includeSymbol">Include special characters </label><br/>
        </div>
        {disableButton && <Notice error={["Please check at least one option"]} />}
        <button disabled={disableButton} type="submit" className="btn-pry">Save details</button>
    </form></>
  )
}

export default PasswordSetting