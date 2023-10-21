

const SettingOption = ({ icon, span, text }) => {
  return (
    <div className="setting-option">
                <h4><span className="material-symbols-outlined">
                    {icon}
                    </span>{span}</h4>
                <p>{text}</p>
            </div>
  )
}

export default SettingOption