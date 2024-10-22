'use client'

import { useRouter } from 'next/navigation';
import styles from './NotFoundEl.module.scss'
import { Headings } from '../Headings/Headings';
import { PrimaryButton } from '../Buttons/PrimaryButton';

export const NotFoundEl = () => {
    const {push} = useRouter()

    return (
        <div className={styles.not_found}>
            <Headings heading='h2' weight='700' color='primary'>404</Headings>
            <Headings heading='h3' weight='500' color='primary'>Сторінку не знайдено</Headings>
            <PrimaryButton onClick={() => push('/home')}>
                На Головну
            </PrimaryButton>
        </div>
    )
}