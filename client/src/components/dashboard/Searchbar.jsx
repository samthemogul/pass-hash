import paths from "../../statics/assetsImport"

const Searchbar = () => {
  return (
    <div className="searchbar">
                    <input placeholder="search login details" type="text" />
                    <button type="button"><img src={paths.search} alt="" /></button>
                </div>
  )
}

export default Searchbar