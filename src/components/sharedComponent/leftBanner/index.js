import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import './leftBanner.scss';

const LeftBanner = (props) => {
  const { children, backgroundImage } = props;
  return (
    <Box>
      <Card className="custom-card d-flex align-items-end" style={{ backgroundImage: `url(${backgroundImage})` }}>
        {children && (
          <>{children}</>
        )}
      </Card>
    </Box>
  );
};
export default LeftBanner;