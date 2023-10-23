

const NewItem = () => {
  return (
    <><h2>Add new item</h2>
            <form action="">
                <div className="detail-type">
                    <label htmlFor="type-info">Select type</label>
                    <select name="type-info" id="type-info">
                        <option value="Login">Login</option>
                    </select>
                    <span className="material-symbols-outlined">
                        expand_more
                        </span>
                </div>
                <div className="input-field">
                    <label htmlFor="name">Name</label>
                    <input name="name" type="text" placeholder="Enter Name" />
                </div>
                <div className="input-field">
                    <label htmlFor="username">Username</label>
                    <input name="username" type="text" placeholder="Enter Username" />
                    <span className="material-symbols-outlined">
                        refresh
                        </span>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input className="password" name="password" type="password" placeholder="Enter Password" />
                    <span className="material-symbols-outlined">
                        refresh
                        </span>
                    <span className="material-symbols-outlined view">
                        visibility
                        </span>
                </div>
                <div className="input-field">
                    <label htmlFor="web-url">Web Url</label>
                    <input name="web-url" type="text" placeholder="Enter Url" />
                </div>
                <div className="detail-type">
                    <label htmlFor="type-info">Select folder</label>
                    <select name="folder-info" id="folder-info">
                        <option value="">No Folder</option>
                    </select>
                    <span className="material-symbols-outlined">
                        expand_more
                        </span>
                </div>
                <div className="check">
                    <input type="checkbox" id="favourite" name="favourite" value="favourite" />
                    <label htmlFor="favourite"> Add to favourites</label><br />
                </div>
                <div className="input-field">
                    <label htmlFor="notes">Notes (optional)</label>
                    <textarea name="notes" id="notes" cols="30" rows="10" placeholder="Enter additional content"></textarea>
                </div>
                <button type="submit" className="btn-pry">Save details</button>
            </form></>
  )
}

export default NewItem