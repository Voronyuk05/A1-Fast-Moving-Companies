import { UseFormRegister,Path } from "react-hook-form"
import { IReply } from "@/types/replies.types"
import { ICommentForm, IQuoteForm, ISearchForm } from "@/types/forms.types"
import styles from './TextArea.module.scss'

export const TextArea = ({placeHolder, register, label, value, ...props}: {placeHolder: string, value?: string, error?: boolean, register: UseFormRegister<IReply> | UseFormRegister<IQuoteForm> | UseFormRegister<ISearchForm> | UseFormRegister<ICommentForm>, label:Path<IReply> | Path<IQuoteForm>}) => {
    return (
        <textarea value={value}  {...register(label)} className={styles.text_area} placeholder={placeHolder} {...props}></textarea>
    )
}