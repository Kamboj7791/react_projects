import style from "./Input.module.css";
const Input = ({ calVal }) => {
  return <input type="text" className={style.input} value={calVal} readOnly />;
};
export default Input;
