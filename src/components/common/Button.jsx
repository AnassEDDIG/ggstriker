import "./button.css";

export const Button = ({ name, children }) => {
  return <button className="special-btn">{name}{children}</button>;
};
