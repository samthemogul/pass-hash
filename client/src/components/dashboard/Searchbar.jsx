import { useDispatch, useSelector } from "react-redux"
import paths from "../../statics/assetsImport"
import { useState } from "react"
import { searchActions } from "../../redux/slices/searchSlice"
import { useNavigate } from "react-router-dom"

const Searchbar = () => {
  const navigate = useNavigate()
  const searchValue = useSelector(state => state.search.value)
  const dispatch = useDispatch()
  const [ value, setValue ] = useState("")

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const handleSearch = () => {
    dispatch(searchActions.setSearchValue(value))
    navigate('/dashboard/search-results', {replace: true})
    
  }
  return (
    <div className="searchbar">
                    <input defaultValue={value} onChange={handleChange} placeholder="search login details by url" type="text" />
                    <button onClick={handleSearch} type="button"><img src={paths.search} alt="" /></button>
                </div>
  )
}

export default Searchbar