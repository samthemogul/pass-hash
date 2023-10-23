import React from 'react'

const ManageFolder = () => {
  return (
    <><h2>Manage folder</h2>
    <form>
    <div className="detail-type">
                    <label htmlFor="type-info">Select folder</label>
                    <select name="type-info" id="type-info">
                        <option value="Login">No folder</option>
                    </select>
                    <span className="material-symbols-outlined">
                        expand_more
                        </span>
                </div>
        <button type="submit" className="btn-pry">Browse folder</button>
    </form></>
  )
}

export default ManageFolder