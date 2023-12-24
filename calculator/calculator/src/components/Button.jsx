import style from "./Button.module.css";
const Button = ({ btn, onButtonClick }) => {
  return (
    <>
      {btn.map((item, index) => (
        <button
          className={style.btn}
          onClick={() => {
            onButtonClick(item);
          }}
          key={index}>
          {item}
        </button>
      ))}
    </>
  );
};
export default Button;
