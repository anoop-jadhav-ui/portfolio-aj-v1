import React, { ErrorInfo } from "react";
import "./ErrorBoundary.scss";
import { BiMessageError as ErrorIcon } from "react-icons/bi";
import T from "../../../translations/en_IN";

interface Props {
  children: React.ReactNode;
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
            <ErrorIcon title={T.PAGE_LOAD_ERROR}></ErrorIcon>
          </div>
          <div className="error-message">{T.PAGE_LOAD_ERROR}</div>
          later.
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
