import { useEffect } from 'react'
import { useNavigate } from 'react-router'

const PageNotFoundRedirect = () => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/404', { replace: true })
    }, [navigate])

    return null
}

export default PageNotFoundRedirect
