import React, { Component } from "react";
import "./ErrorBoundary.css";
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="error">
          Something went wrong. Please try again later.
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
