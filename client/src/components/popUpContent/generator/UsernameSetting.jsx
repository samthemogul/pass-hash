import React from 'react'

const UsernameSetting = () => {
  return (
    <><h2>Username Settings</h2>
    <form>
        <div className="check">
            <input type="radio" id="capitals" name="favourite" value="favourite" />
            <label htmlFor="favourite">Use Email sub-address</label><br/>
        </div>
        <div className="check">
            <input type="radio" id="capitals" name="favourite" value="favourite" />
            <label htmlFor="favourite">Use random word</label><br/>
        </div>
        <div className="check">
            <input type="checkbox" id="capitals" name="favourite" value="favourite" />
            <label htmlFor="favourite">Capitalize</label><br/>
        </div>
        <div className="check">
            <input type="checkbox" id="digits" name="favourite" value="favourite" />
            <label htmlFor="favourite">Include digits</label><br/>
        </div>
        <div className="input-field">
            <label htmlFor="email">Email address</label>
            <input name="email" type="email" placeholder="Enter email" value="samuelemeka@gmail.com" />
        </div>
        <button type="submit" className="btn-pry">Save details</button>
    </form></>
  )
}

export default UsernameSetting