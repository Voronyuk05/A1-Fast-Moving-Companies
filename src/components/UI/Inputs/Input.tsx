import { ICommentForm, IQuoteForm, ISearchForm } from "@/types/forms.types"
import { IReply } from "@/types/replies.types"
import { Path, UseFormRegister } from "react-hook-form"
import styles from './Input.module.scss'

export const Input = ({placeHolder, register, label, error, ...props}: {placeHolder: string, register: UseFormRegister<IReply> | UseFormRegister<IQuoteForm> | UseFormRegister<ISearchForm> | UseFormRegister<ICommentForm>, label:Path<IReply | IQuoteForm | ICommentForm | ISearchForm>, error?: boolean }) => {
    return (
        <div className={styles.wrapper_input}>
            <input className={styles.input} type="text" placeholder={placeHolder} {...register(label)} {...props}/>
            {error ? (
                <img className={styles.signal} src="/incorrect.svg" alt="" />
            ) : (
                ''
            )}
        </div>
    )
}