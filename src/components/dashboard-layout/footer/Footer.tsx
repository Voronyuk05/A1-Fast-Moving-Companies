'use client'
import { Logo } from '../../UI/Logo/Logo';
import Link from 'next/link';
import { Headings } from '../../UI/Headings/Headings';
import { usePathname } from 'next/navigation';
import styles from './Footer.module.scss'

export const Footer = () => {
    const path = usePathname()

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footer_bar}>
                    <Logo/>
                    <div className={styles.menu}>
                        <nav className={styles.navigation}>
                            <Link className={`${path === '/home' ? styles.active : ''}`} href='/home'>Home</Link>
                            <Link className={`${path === '/location' ? styles.active : ''}`} href='/location'>Location</Link>
                            <Link className={`${path === '/services' ? styles.active : ''}`} href='/services'>Services</Link>
                            <Link className={`${path === '/tips-tricks' ? styles.active : ''}`} href='/tips-tricks'>Tips & Tricks</Link>
                        </nav>
                        <Headings heading='h5' color='secondary' weight='400'>2005-2020 © A1 Fast Moving - Top Rated California Moving Companies</Headings>
                    </div>
                </div>
                <div className={styles.column}>
                    <Headings heading='h4' color='black' weight='700'>Moving Services</Headings>
                    <ul className={styles.column_items}>
                        <Link href='/tips-tricks'>Local Movers</Link>
                        <Link href='/tips-tricks'>Long Distance</Link>
                        <Link href='/tips-tricks'>Movers</Link>
                        <Link href='/tips-tricks'>Office Movers</Link>
                        <Link href='/tips-tricks'>Piano Movers</Link>
                        <Link href='/tips-tricks/state-to-state'>State to State</Link>
                        <Link href='/tips-tricks'>Movers</Link>
                        <Link href='/tips-tricks'>Storages</Link>
                    </ul>
                </div>
                <div className={styles.column}>
                    <Headings heading='h4' color='black' weight='700'>Moving Services</Headings>
                    <ul className={styles.column_items}>
                        <Link href='/locations/'>San Francisco</Link>
                        <Link href='/'>Oakland</Link>
                        <Link href='/'>San Jose</Link>
                        <Link href='/'>San Diego</Link>
                        <Link href='/'>Los Angeles</Link>
                        <Link href='/'>Ontario</Link>
                    </ul>
                </div>
            </div>
        </footer>
    )
}