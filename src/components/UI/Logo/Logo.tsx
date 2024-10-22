import Image from 'next/image'
import logoImg from '../../../../public/logo.png'
import styles from './Logo.module.scss'
import { Headings } from '../Headings/Headings';

export const Logo = () => {
    return (
        <div className={styles.wrapper_logo}>
            <Image src={logoImg} alt='A1-FAST-MOVING' width='25' height='25' />
            <Headings heading='h1' color='primary' weight='800'>A1 Fast Moving</Headings>
        </div>
    )
}