import { useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { IoSearch } from "react-icons/io5";
import styles from './SearchNameInput.module.scss'

export const SearchNameInput = () => {
    const searchParams = useSearchParams()
    const {push} = useRouter()
    const path = usePathname()
    const [name, setName] = useState<string>('')

    const handleSearch = () => {
        const params = new URLSearchParams(searchParams.toString())
        const urlName = name.replace(/ /, "%20")
        params.set('name', urlName)
        
        push(`${path}?${params.toString()}&`)
    }
    return (
        <div className={styles.wrapper_input}>
            <input className={styles.input_name} onChange={(e) => setName(e.target.value)} name="name" value={name} type="text" placeholder="What are you looking for" />
            <IoSearch onClick={handleSearch} />
        </div>
    )
}