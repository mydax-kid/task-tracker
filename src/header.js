import Button from "./button";

const Header = ({ title, addEvent, add }) => {
  return (
    <div className="header">
      <h2>{title}</h2>

      <Button 
      text= { add ? 'Close' : 'Add'} 
      color= { add ? 'red' : "dodgerblue" }
      addEvent= {addEvent}
       />

    </div>
  );
};

export default Header;
