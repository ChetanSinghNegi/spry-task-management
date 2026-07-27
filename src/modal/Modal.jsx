import { useEffect } from "react";
import { createPortal } from "react-dom";

const Modal = (props) => {
  const { openModal, closeModal } = props;
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!openModal) return <></>;

  return (
    <>
      {openModal && (
        <>
          {createPortal(
            <div
              style={{
                position: "fixed",
                top: "0",
                left: "0",
                width: "100vw",
                height: "100vh",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1000,
              }}
              onClick={() => {
                closeModal();
              }}
            >
              <div
                onClick={(event) => {
                  event.stopPropagation();
                }}
                style={{
                  backgroundColor: "white",
                  padding: "2rem",
                  borderRadius: "8px",
                  color: "black",
                  margin: "20px",
                  marginTop: "40px",
                  borderRadius: "8px",
                  width: "90%",
                  position: "relative",
                  maxHeight: "90%",
                  overflow: "auto",
                }}
              >
                <span
                  style={{
                    position: "sticky",
                    left: "100%",
                    top: "0px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    closeModal();
                  }}
                >
                  X
                </span>
                {props.children}
              </div>
            </div>,
            document.body,
          )}
        </>
      )}
    </>
  );
};

export default Modal;
