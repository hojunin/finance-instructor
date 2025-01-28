import React from 'react';
import ErrorSection from './error-section';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorSection
          message={
            this.state.error?.message || '알 수 없는 오류가 발생했습니다'
          }
          retry={() => this.setState({ hasError: false })}
        />
      );
    }

    return this.props.children;
  }
}
