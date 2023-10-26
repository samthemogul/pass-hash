import React from 'react'
import DetailType from '../../DetailType'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { popupActions } from '../../../redux/slices/popupSlice'
import { useState } from 'react'
import { folderActions } from '../../../redux/slices/folderSlice'

const ManageFolder = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const folderCurrent = useSelector(state => state.folder.folder)
  const [ folder, setFolder ] = useState("No folder")
  const getDropData =(name, value) => {
    setFolder(value)
  }
  const handleSubmit = (e)  => {
    e.preventDefault()
    dispatch(popupActions.hide())
    dispatch(folderActions.setFolderName(folder))
    navigate('folders')
  }
  return (
    <><h2>Manage folder</h2>
    <form onSubmit={handleSubmit}>
    <DetailType type="folder" onSelect={getDropData} />
        <button type="submit" className="btn-pry">Browse folder</button>
    </form></>
  )
}

export default ManageFolder