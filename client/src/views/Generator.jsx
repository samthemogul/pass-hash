import GeneratorEngine from "../components/dashboard/GeneratorEngine"
import paths from "../statics/assetsImport"

const Generator = () => {
    const imagePaths = {
        password: paths.genPassword,
        user: paths.genUser
    }
    const values = {
        username: "user1234",
        password: "Su53$gd&Gh"
    }
    const ButtonTexts = {
        userButton: "Regenerate username",
        passwordButton: "Regenerate password"
    }
    const LinkTexts = {
        userLink: "Username Settings",
        passwordLink: "Password Settings"
    }
  return (
    <div className="gen-body">
        <GeneratorEngine imagePath={imagePaths.user} value={values.username} buttonText={ButtonTexts.userButton} linkText={LinkTexts.userLink} action="usernameSet" />
        <GeneratorEngine imagePath={imagePaths.password} value={values.password} buttonText={ButtonTexts.passwordButton} linkText={LinkTexts.passwordLink} action="passwordSet" />
    </div>
  )
}

export default Generator