import React from 'react'
import NavBar from './NavBar';

const withCommonLayout = (WrappedComponent) => {
  
  const EnhancedComponent = () => {
    return (
      <>
        <NavBar />
        <WrappedComponent />
      </>
    );
  }
    return EnhancedComponent;
}

export default withCommonLayout