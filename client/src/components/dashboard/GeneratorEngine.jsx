

const GeneratorEngine = ({ imagePath, value, buttonText, linkText }) => {
  return (
    <div className="gen-section">
                <img src={imagePath} alt="" />
                <div className="generated">
                    <input type="text" value={value} />
                    <span className="material-symbols-outlined">
                        file_copy
                        </span>
                </div>
                <button type="button" className="btn-pry">{buttonText}</button>
                <p>Edit <span>{linkText}</span></p>
            </div>
  )
}

export default GeneratorEngine