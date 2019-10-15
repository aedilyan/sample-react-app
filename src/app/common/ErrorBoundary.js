import React from "react";
import ErrorLoggingSvc from '../services/errorLoggingService';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // log the error to an error reporting service
        ErrorLoggingSvc(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // custom fallback UI
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;