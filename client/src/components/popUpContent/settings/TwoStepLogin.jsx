import React from 'react'

const TwoStepLogin = () => {
  return (
    <><h2>Two-factor Authentication</h2>
    <form>
        <div className="input-field">
            <label htmlFor="2fa-email">2FA Email</label>
            <input name="2fa-email" type="email" placeholder="Enter an email address" />
        </div>
        <button type="submit" className="btn-pry">Setup 2FA</button>
    </form></>
  )
}

export default TwoStepLogin