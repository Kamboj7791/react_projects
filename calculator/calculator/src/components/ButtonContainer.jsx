import Button from "./Button";
import style from "./ButtonContainer.module.css";
const ButtonContainer = ({ arr, onButtonClick }) => {
  return (
    <>
      <div className={style.container}>
        <Button btn={arr} onButtonClick={onButtonClick}></Button>
      </div>
    </>
  );
};
export default ButtonContainer;
