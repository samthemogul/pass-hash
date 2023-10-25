import { useDispatch, useSelector } from "react-redux"
import { userActions } from "../../../redux/slices/userSlice"
import { popupActions } from "../../../redux/slices/popupSlice"
import { infoActions } from "../../../redux/slices/infoSlice"


const DeleteItem = () => {
    const dispatch = useDispatch()


    const handleDelete = () => {
        dispatch(userActions.deleteItem())
        dispatch(popupActions.hide())
        dispatch(infoActions.show({ deleteSuccess: true }))

        setTimeout(()=> {
            dispatch(infoActions.hide())
        }, 4000)

    }
  return (
    <><h2>Delete Item</h2>
        <p>Are you sure you want to delete this item?</p>
        <button onClick={handleDelete} type="button" className="btn-pry danger">Delete details</button>
    </>
  )
}

export default DeleteItem