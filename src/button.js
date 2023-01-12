const Button = ({ text, color, addEvent, }) => {
  return (
    <button 
    className="btn" 
    style={{ backgroundColor: color }}
    onClick= {addEvent}
    >
      {text}
    </button>
  );
};

export default Button;
