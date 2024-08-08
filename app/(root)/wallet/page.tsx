"use client";

import React from 'react';

const WelcomePage = () => {
  const handleLinkClick = () => {
    window.open('https://66b492e59d0accd24a206006--dainty-custard-b79037.netlify.app/', '_blank');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>WELCOME TO NOPA WALLET!!</h1>
      <h6 style={styles.subHeader}>HOP UNTO OUR CROWD FUNDING APP AND CREATE A CAMPAIGN NOW!</h6>
      <a href="#" onClick={handleLinkClick} style={styles.link}>
        Click here to visit the NOPA crowdfunding app now!
      </a>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as 'column', // TypeScript needs this explicit cast
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center' as 'center', // TypeScript needs this explicit cast
    backgroundColor: '#000', // Set the background color to black
    padding: '20px',
  },
  header: {
    fontSize: '36px', // Adjust size as needed
    fontWeight: 'bold',
    color: '#f97316', // Orange color
    marginBottom: '10px', // Space between the lines
  },
  subHeader: {
    fontSize: '20px', // Adjust size as needed
    // fontWeight: 'bold',
    color: '#f97316', // Orange color
    marginBottom: '20px', // Space before the link
  },
  link: {
    fontSize: '20px', // Adjust size as needed
    color: '#4F4F4F', // Grey color for the link
    textDecoration: 'underline',
    cursor: 'pointer',
  },
};

export default WelcomePage;
