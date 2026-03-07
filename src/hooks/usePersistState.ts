import { useEffect, useState } from 'react'

function usePersistState<T>(
    key: string,
    defaultValue: T
): [T, (value: T) => void] {
    const [value, setValue] = useState<T>(defaultValue)

    useEffect(() => {
        if (typeof window === 'undefined') {
            return
        }

        const returnVal = sessionStorage.getItem(key)
        if (returnVal) {
            setValue(JSON.parse(returnVal))
        } else {
            sessionStorage.setItem(key, JSON.stringify(defaultValue))
        }
    }, [defaultValue, key])

    return [
        value,
        (newValue) => {
            if (typeof window === 'undefined') {
                return
            }
            sessionStorage.setItem(key, JSON.stringify(newValue))
            setValue(newValue)
        },
    ]
}

export default usePersistState
