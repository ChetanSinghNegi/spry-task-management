import "./toaster.css";
import { useDispatch, useSelector } from "react-redux";
import useToaster from "./useToast";
import { removeToaster } from "../store/toaster-slice";

const toasterType = {
  success: "success",
  error: "error",
  info: "info",
  warning: "warning",
};
const toasterAligment = ["left", "center", "right"];
const Toaster = ({ alignment }) => {
  const dispatch = useDispatch();
  const toasters = useSelector((state) => state.toaster);

  const getAlignment = () => {
    switch (alignment) {
      case toasterAligment[0]: {
        return { left: "5%", right: "" };
      }
      case toasterAligment[2]: {
        return { left: "", right: "5%" };
      }
      default: {
        return { left: "30%", right: "" };
      }
    }
  };

  const getToasterStyles = (type) => {
    switch (type) {
      case toasterType.error: {
        return { backgroundColor: "red", textColor: "white" };
      }
      case toasterType.warning: {
        return { backgroundColor: "yellow", textColor: "black" };
      }
      case toasterType.info: {
        return { backgroundColor: "silver", textColor: "white" };
      }
      default:
        return { backgroundColor: "green", textColor: "white" };
    }
  };
  return (
    <>
      {toasters?.length > 0 && (
        <>
          <div
            style={{
              position: "fixed",
              top: "0",
              left: getAlignment().left,
              right: getAlignment().right,
              zIndex: 100,
              width: "40%",
              minHeight: "30px",
            }}
          >
            {toasters.map((toaster) => {
              const toasterStyles = getToasterStyles(toaster.type);
              return (
                <div
                  style={{
                    position: "relative",
                    transition: "all ease 1s",
                  }}
                  className="toast"
                  key={toaster.id}
                >
                  <h1
                    style={{
                      width: "100%",
                      textAlign: "center",
                      backgroundColor: toasterStyles.backgroundColor,
                      color: toasterStyles.textColor,
                      position: "relative",
                    }}
                  >
                    <span
                      className="close-btn"
                      style={{
                        position: "absolute",
                        top: "-20px",
                        right: "-10px",
                        cursor: "pointer",
                        color: "black",
                      }}
                      onClick={() => {
                        removeToaster(toaster.id);
                      }}
                    >
                      X
                    </span>
                    {toaster.message}
                  </h1>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};
export default Toaster;
