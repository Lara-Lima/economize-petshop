import styles from "./Input.module.css";

function Input({ name, placeholder, label, type = "text", onChange, ...rest }) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.input}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
}

export default Input;
