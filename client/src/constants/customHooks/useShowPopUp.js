import { useDispatch } from "react-redux";
import { popupActions } from "../../redux/slices/popupSlice";

const useShowPopUp = () => {
    const dispatch = useDispatch();
    const hidePopUp = () => {
        dispatch(popupActions.hide())
    }
    const showPopUp = () => {
        dispatch(popupActions.show())
    }
    const methods = {
        hide : hidePopUp(),
        show : showPopUp()
    }
    return methods
}

export default useShowPopUp