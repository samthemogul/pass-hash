

const PasswordSetting = () => {
  return (
    <><h2>Password Settings</h2>
    <form>
        <div className="range">
            <label htmlFor="passwordlength">Password length</label><br/>
            <div className="range-field">
                <input className="range-input" type="range" id="digits" name="passwordlength" min="5" max="100" />
                <input className="range-value-field" type="text" value="10" />
            </div>
        </div>
        <div className="check">
            <input type="checkbox" id="capital-letters" name="capital-letters" value="capital-letters" />
            <label htmlFor="capital-letters">Include letters (A -Z)</label><br/>
        </div>
        <div className="check">
            <input type="checkbox" id="small" name="small" value="small"/>
            <label htmlFor="small">Include letters (a - z)</label><br/>
        </div>
        <div className="check">
            <input type="checkbox" id="numbers" name="numbers" value="numbers"/>
            <label htmlFor="numbers">Include numbers (0 - 9)</label><br/>
        </div>
        <div className="check">
            <input type="checkbox" id="specials" name="specials" value="specials"/>
            <label htmlFor="specials">Include special characters </label><br/>
        </div>
        <button type="submit" className="btn-pry">Save details</button>
    </form></>
  )
}

export default PasswordSetting