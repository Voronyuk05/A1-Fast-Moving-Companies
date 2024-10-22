import { SubmitHandler, useForm } from 'react-hook-form'
import { usePutTipsTricksComment } from '@/hooks/usePutTipsTricksComment';
import { ITipsTricksArticle, ITipsTricksComment } from '@/types/tipsTricks.types';
import { TextArea } from '../../TextArea/TextArea';
import { ICommentForm } from '@/types/forms.types';
import { PrimaryButton } from '../../Buttons/PrimaryButton';
import { Headings } from '../../Headings/Headings';
import { leaveCommentFormId } from '../../../../store/comments';
import styles from './TipsTricksCommentForm.module.scss'
import { useAtom } from 'jotai';

export const TipsTricksCommentForm = ({itemData, articleId, refetch}: {itemData: ITipsTricksArticle | ITipsTricksComment, articleId?: number, refetch? : () => void}) => {
    const {register, handleSubmit, reset} = useForm<ICommentForm>()
    const {mutate, isError} = usePutTipsTricksComment(itemData.id, articleId, refetch)
    const [, setIsLeaveCommentFormId] = useAtom(leaveCommentFormId)
    
    const onSubmit: SubmitHandler<ICommentForm> = (data) => {
        const {comment} = data
        const dateNow = Date.now()
        const currentDate = new Date()
        if (comment) {
            mutate({
                ...itemData, 
                comments: [
                    ...itemData.comments,
                    {
                        id: dateNow,
                        userComment: comment,
                        publishedAt: currentDate.toISOString().split('T')[0],
                        comments: []
                    }
                ]
            })
            reset()
            setIsLeaveCommentFormId(0)
        }
    }

    return (
        <form className={styles.tips_tricks_form} onSubmit={handleSubmit(onSubmit)} data-testid='comment_form'>
            <TextArea register={register} label='comment' placeHolder='Your comment...' data-testid='comment_text'/>
            <PrimaryButton data-testid='submit_button'>Post comment</PrimaryButton>
            {isError && <Headings heading='h5' color='black' weight='300'>Wrong Data. Try Later</Headings>}
        </form>
    )
}