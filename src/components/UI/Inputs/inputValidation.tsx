import { IQuoteForm } from "@/types/forms.types"
import { IReply } from "@/types/replies.types"


export const validateEmailInput = (value: string): string => {
    if (!value.includes('@')) {
        return 'incorrect'
    } else if (value === '') {
        ''
    } else {
        return 'correct'
    }
    return ''
}

export const validateTelInput = (value: string): string => {
    if (!value.includes('+')) {
        return 'incorrect'
    } else if (value === '') {
        ''
    } else {
        return 'correct'
    }
    return ''
}

export const validateZipCodeInput = (value: string): string => {
    if (value.length !== 5) {
        return 'incorrect'
    } else if (value === '') {
        ''
    } else {
        return 'correct'
    }
    return ''
}

export const validateData = (data: IReply | IQuoteForm): boolean[] => {
    let validationArray: boolean[] = []
    validationArray = (Object.keys(data) as Array<keyof typeof data>).map(key => {
        if (key === 'email') {
            if (!validateEmailInput(data[key] as string).includes('incorrect')) {return true} else return false
        } else if (key === 'movingFrom' || key === 'movingTo') {
            if (!validateZipCodeInput(data[key]).includes('incorrect')) { return true } else return false
        } else if (key === 'tel') {
            if (!validateTelInput(data[key]).includes('incorrect')) { return true } else return false
        } 
        return true
    })

    return validationArray
}