'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './Nav.module.scss'

export const Nav = () => {
    const path = usePathname()

    return (
        <nav className={styles.navigation}>
            <Link className={`${path.includes('/home') ? styles.active : ''}`} href='/home'>Home</Link>
            <Link className={`${path.includes('/location') ? styles.active : ''}`} href='/location'>Location</Link>
            <Link className={`${path.includes('/tips-tricks') ? styles.active : ''}`} href='/tips-tricks'>Tips & Tricks</Link>
        </nav>
    )
}