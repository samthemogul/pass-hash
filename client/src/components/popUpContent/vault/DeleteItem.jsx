import { useDispatch, useSelector } from "react-redux"
import { userActions } from "../../../redux/slices/userSlice"
import { popupActions } from "../../../redux/slices/popupSlice"
import { infoActions } from "../../../redux/slices/infoSlice"
import axios from "axios"


const DeleteItem = () => {
    const dispatch = useDispatch()
    const itemId = useSelector(state => state.user.deleteId)
    const email = useSelector(state => state.user.email)

    const deleteInfo = {
      itemId,
      email
    }


    const handleDelete = () => {
      dispatch(popupActions.hide())
      dispatch(popupActions.setLoading())
      axios.delete('https://passhash.onrender.com/users/delete-login', {
        data: deleteInfo
      })
      .then((response) => {
        dispatch(popupActions.setLoading())
        dispatch(userActions.deleteItem(response.data))
        dispatch(infoActions.show({ deleteSuccess: true }))
      })
        

        setTimeout(()=> {
            dispatch(infoActions.hide())
        }, 4000)
        dispatch(userActions.unsetId())
    }
  return (
    <><h2>Delete Item</h2>
        <p>Are you sure you want to delete this item?</p>
        <button onClick={handleDelete} type="button" className="btn-pry danger">Delete details</button>
    </>
  )
}

export default DeleteItem