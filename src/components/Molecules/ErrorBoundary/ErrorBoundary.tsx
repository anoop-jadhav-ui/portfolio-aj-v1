import React, { ErrorInfo } from "react";
import "./ErrorBoundary.scss";

import UseAnimations from "react-useanimations";
import alertOctagon from "react-useanimations/lib/alertOctagon";

interface Props {
  children: React.ReactNode;
  errorMessage: string;
}

class ErrorBoundary extends React.Component<Props, { hasError: boolean }> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="error">
          <div>
            <UseAnimations
              size={88}
              animation={alertOctagon}
              strokeColor="var(--primary-color)"
            />
          </div>
          <div className="error-message">{this.props.errorMessage}</div>
          later.
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
