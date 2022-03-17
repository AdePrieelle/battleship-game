import './Modal.scss';

export const Modal = ({ children, closeModal = false }) => {
  return (
  <>
    <div className="modal-overlay"></div>
    <div className="modal">
      <div className="modal-content">
        {children}
      </div>
      {
          closeModal
        ? <button 
            className="modal-close-button" 
            onClick={() => closeModal()}
          >
            <i className="fas fa-times"></i>
          </button>
        : null
      }
    </div>
  </>
  );
};
