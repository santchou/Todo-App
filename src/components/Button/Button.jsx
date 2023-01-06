import "./Button.css";

const Button = ({ name, color, backgroundColor, handleTask, width }) => {
  return (
    <button
      onClick={handleTask}
      style={{ color, backgroundColor, width }}
      className="btn"
    >
      {name}
    </button>
  );
};

export default Button;
