import './ModalMessage.scss';

export const ModalMessage = ({ modalMessage }) => {
  return (
    <div className="modal-message">
      {modalMessage}
    </div>
  );
};
