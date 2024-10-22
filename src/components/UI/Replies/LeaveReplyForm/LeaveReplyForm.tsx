import { useRouter } from 'next/navigation';
import { usePostReply } from '../../../../hooks/usePostReply';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Headings } from '../../Headings/Headings';
import { Paragraph } from '../../Paragraph/Paragraph';
import { IReply } from '@/types/replies.types';
import { TextArea } from '../../TextArea/TextArea';
import { PrimaryButton } from '../../Buttons/PrimaryButton';
import { Input } from '../../Inputs/Input';
import { useState } from 'react';
import { RatingReview } from '../../RatingReview/RatingReview';
import { LoadingCircle } from '../../LoadingCircle/LoadingCircle';
import styles from './LeaveReplyForm.module.scss'

export const LeaveReplyForm = ({companyName}: {companyName: string}) => {
    const {back} = useRouter()
    const [rating, setRating] = useState<number>(5)
    const {mutate: mutateReply, isSuccess, isPending} = usePostReply()
    const {register, handleSubmit, reset} = useForm<IReply>()

    const onSubmit: SubmitHandler<IReply> = (data) => {
        const {comment, name} = data
        const userName = name ? name : 'User'
        const currentDate = new Date()
        mutateReply({
            id: Date.now(),
            comment: comment,
            name: userName,
            company: companyName,
            rating: rating,
            publishedAt: currentDate.toISOString().split('T')[0]
        })
        reset()
        setRating(5)
    }

    if (isPending) <LoadingCircle/>

    if (isSuccess) {
        return (
            <section className={styles.reply_form} data-testid='success'>
                <div className={styles.container}>
                    <Headings heading='h3' color='black' weight='700'>Your reply sent!</Headings>
                    <PrimaryButton onClick={() => back()}>Go back</PrimaryButton>
                </div>
            </section>
        )
    }

    if (!isSuccess)
    return (
        <section className={styles.reply_form}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <Headings heading='h3' color='black' weight='700'>Leave a Reply</Headings>
                    <Paragraph color='black' weight='400'>Your email address will not be published. Required fields are marked *</Paragraph>
                </div>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        <Headings heading='h5' color='black' weight='500'>Comment</Headings>
                        <TextArea register={register} label='comment' placeHolder='Your comment...' data-testid='comment'/>
                    </label>
                    <label >
                        <Headings heading='h5' color='black' weight='500'>Name</Headings>
                        <Input register={register} label='name' placeHolder='What’s your name?' data-testid='name'/>
                    </label>
                    <label >
                        <Headings heading='h5' color='black' weight='500'>Rating</Headings>
                        <RatingReview rating={rating} setRating={setRating}/>
                    </label>
                    <PrimaryButton data-testid='submit_button'>Post reply</PrimaryButton>
                </form>
            </div>
        </section>
    )
}