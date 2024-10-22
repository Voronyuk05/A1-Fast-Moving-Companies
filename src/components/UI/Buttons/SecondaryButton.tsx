import { ReactNode } from 'react'
import styles from './Buttons.module.scss'

export const SecondaryButton = ({children, ...props}: {children: string | ReactNode,  onClick?: () => void}) => {
    return (
        <button className={styles.secondary_button} {...props}>{children}</button>
    )
}