import styles from "./Button.module.scss";

const Button = (props) => {
  const showLogo =
    props.img && props.alt ? (
      <img src={props.img} alt={props.alt} className={styles.buttonLogo} />
    ) : null;
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={`${styles.reUseableButton} ${props.className}`}
    >
      {showLogo}
      {props.text}
    </button>
  );
};

export default Button;
