import React, { useEffect } from 'react';

const EC = () => {
  const pdfUrl =
    'https://rennystrips.com/wp-content/uploads/2025/09/RENNY-EC-1-MERGER-APPROVAL.pdf';

  useEffect(() => {
    // Automatically open the PDF in the same window
    window.location.href = pdfUrl;
  }, []);

  return (
    <div style={styles.container}>
      <h2>Redirecting to Document...</h2>
      <p>
        If the PDF does not open automatically, please click the button below:
      </p>

      <a href={pdfUrl} style={styles.button}>
        Open PDF Manually
      </a>
    </div>
  );
};

// Basic styling for the fallback page
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
  },
};

export default EC;
