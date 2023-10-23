

const NewFolder = () => {
  return (
    <><h2>Create new folder</h2>
    <form>
        <div className="input-field">
            <label htmlFor="folder">New Folder</label>
            <input name="folder" type="text" placeholder="Enter folder name" />
        </div>
        <button type="submit" className="btn-pry">Save details</button>
    </form></>
  )
}

export default NewFolder