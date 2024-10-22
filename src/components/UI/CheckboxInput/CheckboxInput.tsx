import { IQuoteForm } from "@/types/forms.types"
import { Path, UseFormRegister } from "react-hook-form"
import styles from './CheckboxInput.module.scss'

export const CheckboxInput = ({register, label}: {register: UseFormRegister<IQuoteForm>, label:Path<IQuoteForm>}) => {
    return (
        <label className={styles.custom_big_checkbox}>
            <input {...register(label)} type="checkbox" className={styles.align_self_center} />
            <span className={styles.custom_big_checkbox__checkbox}></span>
        </label>
    )
}