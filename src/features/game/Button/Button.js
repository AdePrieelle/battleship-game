import "./Button.scss";

export const Button = ({ children, buttonOnClick }) => {
  return (
    <button 
      className="button"
      onClick={() => buttonOnClick()}
    >
      {children}
    </button>
  );
};
