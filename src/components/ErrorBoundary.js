import React, { Component } from 'react';
import { Link, Redirect } from '@reach/router';

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught a error', error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to='/' />;
    }
    if (this.state.hasError) {
      return (
        <p className='error'>
          There was a error with this listing. <Link to='/'>Click Here</Link> to
          go back to the home page or wait five seconds
        </p>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
