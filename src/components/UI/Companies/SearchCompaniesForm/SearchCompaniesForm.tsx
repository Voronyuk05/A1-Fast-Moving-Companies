import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { locationDefaultValue, locationsFilterArray, tagDefaultValue, tagsFilterArray } from '../../../../data/dataFilters';
import { SelectEl } from '../../Select/Select';
import { Input } from '../../Inputs/Input';
import { ISearchForm } from '@/types/forms.types';
import { ISelectOptions } from '@/types/select.types';
import { PrimaryButton } from '../../Buttons/PrimaryButton';
import styles from './SearchCompaniesForm.module.scss'

export const SearchCompaniesForm = () => {
    const {push} = useRouter()
    const [location, setLocation] = useState<ISelectOptions>(locationDefaultValue)
    const [tag, setTag] = useState<ISelectOptions>(tagDefaultValue)
    const {register, handleSubmit, reset} = useForm<ISearchForm>()

    const onSubmit:SubmitHandler<ISearchForm> = async (data) => {
        const {name} = data

        push(`/location?${name ? `name=${name}&` : ''}${tag.value ? `tags=${tag.value}&` : ''}${location.value ? `addres=${location.value}&` : ''}`)
        setTag(tagDefaultValue)
        setLocation(locationDefaultValue)
        reset()
    }

    return (
        <form className={styles.search_form} onSubmit={handleSubmit(onSubmit)}>
            <Input register={register} label='name' placeHolder='What are you looking for' data-testid='name'/>
            <SelectEl options={tagsFilterArray} selectedOption={tag} setSelectedOption={setTag} />
            <SelectEl options={locationsFilterArray} selectedOption={location} setSelectedOption={setLocation} />
            <PrimaryButton data-testid='submit_button'>Search Moving Companies</PrimaryButton>
        </form>
    )
}