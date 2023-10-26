import { useDispatch, useSelector } from "react-redux"
import { userActions } from "../../../redux/slices/userSlice"
import { popupActions } from "../../../redux/slices/popupSlice"
import { infoActions } from "../../../redux/slices/infoSlice"


const UpdateAccount = () => {
  const updatedUser = useSelector(state => state.user.updateUserInfo)
    const dispatch = useDispatch()


    const handleUpdate = () => {
        dispatch(userActions.updateUser(updatedUser))
        dispatch(popupActions.hide())
        dispatch(infoActions.show({ updateAccountSuccess: true }))

        setTimeout(()=> {
            dispatch(infoActions.hide())
        }, 4000)
        dispatch(userActions.unsetId())
    }
  return (
    <><h2>Update Credentials</h2>
        <p>Are you sure you want to change key credentials?</p>
        <button onClick={handleUpdate} type="button" className="btn-pry">Update details</button>
    </>
  )
}

export default UpdateAccount