import React, { ErrorInfo } from 'react'
import './ErrorBoundary.css'

import { OctagonAlert } from 'lucide-react'

interface Props {
    children: React.ReactNode
    errorMessage: string
}

class ErrorBoundary extends React.Component<Props, { hasError: boolean }> {
    constructor(props: Props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // You can also log the error to an error reporting service
        console.log(error)
        console.log(errorInfo)
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div className="error">
                    <div>
                        <OctagonAlert size={88} color="var(--primary-color)" />
                    </div>
                    <div className="error-message">
                        {this.props.errorMessage}
                    </div>
                </div>
            )
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundary
