import styles from "./button.module.css";

function Button(props) {
  return (
    <div className={ props.is_Outline ?styles.outline_btn  :styles.primary_btn}>
      {props.icons}
      {props.text}
         </div>
  )
}

export default Button