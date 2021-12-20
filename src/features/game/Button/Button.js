import "./Button.scss";

export const Button = ({ children, buttonOnClick, disableButton=false}) => {
  return (
    <button 
      className={`${disableButton ? "button button-disabled" : "button"}`}
      onClick={disableButton ? null : (() => buttonOnClick())}
    >
      {children}
    </button>
  );
};
