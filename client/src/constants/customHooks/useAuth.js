import { useSelector } from "react-redux"

const useAuth = () => {
    const IsLoggedIn = useSelector(state => state.auth.IsLoggedIn)
    return IsLoggedIn
}

export default useAuth