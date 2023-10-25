import React from 'react'
import DetailType from '../../DetailType'

const ManageFolder = () => {
  const getDropData =(name, value) => {
    console.log(name, value)
  }
  return (
    <><h2>Manage folder</h2>
    <form>
    <DetailType type="folder" onSelect={getDropData} />
        <button type="submit" className="btn-pry">Browse folder</button>
    </form></>
  )
}

export default ManageFolder