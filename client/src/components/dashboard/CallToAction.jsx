import paths from "../../statics/assetsImport"

const CallToAction = () => {
  return (
    <div className="call-to-action">
                        <div className="cta-block">
                            <img src={paths.extension} alt="" />
                            <h2>Turn on autofills</h2>
                            <p>Install the Passhash browser extension, it autosaves and autofills passwords and other secure details</p>
                            <button type="button" className="btn-pry">Install extension</button>
                        </div>
                        <div className="cta-block">
                            <img src={paths.app} alt="" />
                            <h2>Install the Pashapp App</h2>
                            <p>All your data will be synced so you have access to your credentials even when you're offline.</p>
                            <button type="button" className="btn-pry">Download</button>
                        </div>
                    </div>
  )
}

export default CallToAction