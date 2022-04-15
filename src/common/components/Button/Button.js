import "./Button.scss";

export const Button = ({ buttonOnClick, children, disableButton=false }) => {
  return (
    <button 
      className={`${disableButton ? "button button-disabled" : "button"}`}
      disabled={disableButton}
      onClick={disableButton ? null : (() => buttonOnClick())}
    >
      {children}
    </button>
  );
};
