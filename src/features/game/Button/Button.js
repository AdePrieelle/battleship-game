import "./Button.scss";

export const Button = ({ children, buttonOnClick, disableButtonGameSwitchPlayerTurn=false}) => {
  return (
    <button 
      className={`${disableButtonGameSwitchPlayerTurn ? "button button-disabled" : "button"}`}
      onClick={disableButtonGameSwitchPlayerTurn ? null : (() => buttonOnClick())}
    >
      {children}
    </button>
  );
};
