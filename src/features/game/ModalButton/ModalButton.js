import "./ModalButton.scss";

export const ModalButton = ({ modalButtonLabel, modalButtonOnClick }) => {
  return (
    <button 
      className="modal-button"
      onClick={() => modalButtonOnClick()}
    >
      {modalButtonLabel}
    </button>
  );
};
