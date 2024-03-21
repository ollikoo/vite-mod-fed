import "./Button.css";

export const Button = ({ text, onClick }) => {
  return (
    <div>
      <button className="button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
