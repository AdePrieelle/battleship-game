import './Modal.scss';

export const Modal = ({ children, setShowModal }) => {
  return (
  <>
    <div className="modal-overlay"></div>
    <div className="modal">
      <div className="modal-content">
        {children}
      </div>
      <button 
        className="modal-close-button" 
        onClick={() => setShowModal(false)}
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  </>
  );
};
