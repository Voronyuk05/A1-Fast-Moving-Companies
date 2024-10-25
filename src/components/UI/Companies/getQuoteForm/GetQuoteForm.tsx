import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { usePostQuote } from '../../../../hooks/usePostQuote';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Headings } from '../../Headings/Headings';
import { Paragraph } from '../../Paragraph/Paragraph';
import { PrimaryButton } from '../../Buttons/PrimaryButton';
import { Input } from '../../Inputs/Input';
import { RadioInput } from '../../RadioInput/RadioInput';
import { LoadingCircle } from '../../LoadingCircle/LoadingCircle';
import { ICompany } from '@/types/companies.types';
import { IQuoteForm } from '@/types/forms.types';
import styles from './GetQuoteForm.module.scss'
import { validateData } from '../../Inputs/inputValidation';

export const GetQuoteForm = ({companyData}: {companyData: ICompany}) => {
    const [moveSize, setMoveSize] = useState<string>('Studio')
    const [error, setError] = useState<boolean>(false)
    const {back} = useRouter()
    const {mutate: mutateReply, isSuccess, isPending} = usePostQuote(companyData.id)
    const {register, handleSubmit, reset} = useForm<IQuoteForm>()

    const onSubmit: SubmitHandler<IQuoteForm> = (data) => {
        if (companyData) {
            const {movingFrom, movingTo, email, date, name, tel} = data    
            const validatedData = validateData(data)
            if (!validatedData.includes(false)) {
                const companyQuote = {
                    id: Date.now(),
                    movingFrom: movingFrom,
                    movingTo: movingTo,
                    email: email,
                    date: date,
                    name: name,
                    tel: tel,
                    sizeOfMove: moveSize
                }
                const patchedCompany = companyData?.quotes ? [
                    ...companyData.quotes,
                    companyQuote
                ] : [companyQuote]
                mutateReply({
                    ...companyData, 
                    quotes: patchedCompany
                })
                reset()
            } else {
                setError(true)
            }
        }
    }

    const hanldeChangeMoveSize = (e: ChangeEvent<HTMLInputElement>) => {
        setMoveSize(e.currentTarget.value)
    }

    if (isPending) <LoadingCircle/>

    if (isSuccess) {
        return (
            <section className={styles.reply_form} data-testid='success'>
                <div className={styles.container}>
                    <Headings heading='h3' color='black' weight='700'>Your quote will be sent soon!</Headings>
                    <PrimaryButton onClick={() => back()}>Go back</PrimaryButton>
                </div>
            </section>
        )
    }

    if (!isSuccess && companyData)
    return (
        <section className={styles.reply_form}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <Headings heading='h3' color='black' weight='700'>Get qoute</Headings>
                    <Paragraph color='black' weight='400'>Your email address will not be published. Required fields are marked *</Paragraph>
                    {error && <div className={styles.error} data-testid='error'>
                        <Paragraph color='black' weight='400'>Wrong data!</Paragraph>
                    </div>}
                </div>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        <Headings heading='h5' color='black' weight='500'>Moving from</Headings>
                        <Input register={register} label='movingFrom' placeHolder='Zip Code' data-testid='zip_code_from' />
                    </label>
                    <label >
                        <Headings heading='h5' color='black' weight='500'>Moving to</Headings>
                        <Input register={register} label='movingTo' placeHolder='Zip Code' data-testid='zip_code_to'/>
                    </label>
                    <label >
                        <Headings heading='h5' color='black' weight='500'>E-mail address</Headings>
                        <Input register={register} label='email' placeHolder='example@gmail.com'  data-testid='mail'/>
                    </label>
                    <label >
                        <Headings heading='h5' color='black' weight='500'>Date of move</Headings>
                        <input className={styles.input_date} type="date" {...register('date')} placeholder='00.00.0000'  data-testid='date'/>
                    </label>
                    <label >
                        <Headings heading='h5' color='black' weight='500'>Name</Headings>
                        <Input register={register} label='name' placeHolder='What’s your name?'  data-testid='name'/>
                    </label>
                    <label >
                        <Headings heading='h5' color='black' weight='500'>Phone number</Headings>
                        <Input register={register} label='tel' placeHolder='+1 (***) **-**-**'  data-testid='tel'/>
                    </label>
                    <div className={styles.move_size}>
                        <label htmlFor="">
                            <RadioInput handleChange={hanldeChangeMoveSize} label='Studio' value='Studio' data-testid='radio_input' checked={moveSize === 'Studio'}/>
                        </label>
                        <label htmlFor="">
                            <RadioInput handleChange={hanldeChangeMoveSize} label='2-bedroom' value='2-bedroom' data-testid='radio_input' checked={moveSize === '2-bedroom'}/>
                        </label>
                        <label htmlFor="">
                            <RadioInput handleChange={hanldeChangeMoveSize} label='3-bedroom' value='3-bedroom' data-testid='radio_input' checked={moveSize === '3-bedroom'}/>
                        </label>
                        <label htmlFor="">
                            <RadioInput handleChange={hanldeChangeMoveSize} label='Office' value='Office' data-testid='radio_input' checked={moveSize === 'Office'}/>
                        </label>
                        <label htmlFor="">
                            <RadioInput handleChange={hanldeChangeMoveSize} label='Other' value='Other' data-testid='radio_input' checked={moveSize === 'Other'}/>
                        </label>
                    </div>
                    <PrimaryButton data-testid='submit_button'>Post reply</PrimaryButton>
                </form>
            </div>
        </section>
    )
}