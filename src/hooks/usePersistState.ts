import { useState } from 'react'

function usePersistState<T>(
    key: string,
    defaultValue: T
): [T, (value: T) => void] {
    const [value, setValue] = useState<T>(() => {
        if (typeof window === 'undefined') {
            return defaultValue
        }

        const returnVal = sessionStorage.getItem(key)
        if (returnVal) {
            return JSON.parse(returnVal)
        } else {
            sessionStorage.setItem(key, JSON.stringify(defaultValue))
            return defaultValue
        }
    })

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
