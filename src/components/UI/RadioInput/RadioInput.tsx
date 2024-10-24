import styles from './RadioInput.module.scss'
import { ChangeEvent } from "react"


export const RadioInput = ({handleChange, label, value, checked, ...props}: {handleChange: (e: ChangeEvent<HTMLInputElement>) => void, label: string, value: string, checked: boolean}) => {
    return (
        <div className={styles.radio}>
            <input onChange={handleChange} name={label} value={value}  type="radio" checked={checked} {...props}/>
            <label className={styles.radio_label}>{label}</label>
        </div>
    )
}