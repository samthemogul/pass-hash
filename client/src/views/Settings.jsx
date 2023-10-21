import SettingOption from "../components/dashboard/SettingOption"

const Settings = () => {
    const settingTexts = [
        {
            icon: "edit",
            span: "Auto-fill (unavailable)",
            text: "Simplify your online life by letting our app securely complete your login details with a single click."
        },
        {
            icon: "folder",
            span: "Manage Folders",
            text: "Effortlessly organize and manage your files with our intuitive folder management feature."
        },
        {
            icon: "enhanced_encryption",
            span: "Two-step Login",
            text: "Enhance your account security with our two-step login for added protection."
        },
        {
            icon: "info",
            span: "About us",
            text: "Learn more about our mission and team and discover the heart behind our passion for technology"
        },
        {
            icon: "thumb_up",
            span: "Rate us",
            text: "Enjoying our app? We'd love to hear your thoughts! Rate us and help us serve you even better."
        },
    ]
  return (
    <div className="set-body">
        <h3>MANAGE</h3>
        <SettingOption  icon={settingTexts[0].icon} span={settingTexts[0].span} text={settingTexts[0].text}/>
        <SettingOption  icon={settingTexts[1].icon} span={settingTexts[1].span} text={settingTexts[1].text}/>
        <h3>SECURITY</h3>
        <SettingOption  icon={settingTexts[2].icon} span={settingTexts[2].span} text={settingTexts[2].text}/>
        <h3>OTHER</h3>
        <SettingOption  icon={settingTexts[3].icon} span={settingTexts[3].span} text={settingTexts[3].text}/>
        <SettingOption  icon={settingTexts[4].icon} span={settingTexts[4].span} text={settingTexts[4].text}/>
    </div>
  )
}

export default Settings