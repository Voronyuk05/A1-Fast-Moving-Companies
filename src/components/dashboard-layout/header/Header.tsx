'use client'
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { Nav } from '../../UI/Nav/Nav';
import { Logo } from '@/components/UI/Logo/Logo';
import { useGetCompaniesBySearchParams } from "@/hooks/useGetCompaniesBySearchParams";
import styles from './Header.module.scss'
import Link from "next/link";

export const Header = () => {
    const {push} = useRouter()
    const [isShowed, setIsShowed] = useState<boolean>(false)
    const [isSearch, setIsSearch] = useState<boolean>(false)
    const [query, setQuery] = useState<string>('')
    const {data} = useGetCompaniesBySearchParams(query ? {name: query} : {})
    const path = usePathname()

    useEffect(() => {
        setIsShowed(false)
        setIsSearch(false)
        setQuery('')
    }, [path])

    const handleMenu = () => {
        setIsShowed(!isShowed)
    }

    const handleSearch = () => {
        setIsSearch(!isSearch)
        if (query) {push(`/location/${query}`)}
    }

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Logo/>
                <div className={styles.header_bar}>
                    <div className={`${styles.menu} ${isShowed ? styles.showed : ''}`}>
                        <Nav />
                    </div>
                    <div className={styles.actions}>
                        <div className={`${isSearch ? styles.showed_input : ''} ${styles.wrapper_input}`}>
                            <input type="text" placeholder="What are you looking for" value={query} onChange={(e) => setQuery(e.currentTarget.value)}/>
                            <IoSearch onClick={handleSearch} />
                            <div className={`${styles.serach_menu} ${data?.length && query ? styles.showed_search : ''}`}>
                                <ul>
                                    {data?.map(({id, name}) => (
                                        <li key={id}><Link href={`/location/${name}`}>{name}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className={`${styles.burger} ${isShowed ? styles.checked : ''}`} onClick={handleMenu}>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}