import styles from "./Buttons.module.scss";
interface ButtonProps {
  children: string;
}

export const Button = ({children}: ButtonProps) => {
  return (
    <div className={styles.container}>

      <button className={styles.InterBtn}>{children}</button>
    </div>
    
  )
};
