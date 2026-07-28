import { useDispatch } from "react-redux";
import { addToaster, removeToaster } from "../store/toaster-slice";

const useToaster = () => {
  const dispatch = useDispatch();
  const setToaster = (data) => {
    const id = Math.random() * 99999;
    const { type, message } = data;
    const toasterData = { id, type, message };
    console.log(toasterData);
    dispatch(addToaster(toasterData));
    setTimeout(() => {
      dispatch(removeToaster(id));
    }, 2000);
  };
  return { setToaster };
};
export default useToaster;
