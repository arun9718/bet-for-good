import { Card } from '@mui/material';
import React, { useState, useEffect } from 'react';

const MainCard = ({ percent }) => {
    const isYes = percent >= 50;


  return (
    <Card title="Yes/No Bar" style={{ width: 300 }}>
      <div>
        <div
          style={{
            border: '1px solid #ddd',
            borderRadius: '5px',
            height: '20px',
            width: '100%',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: `${percent}%`,
              height: '100%',
              backgroundColor: isYes ? 'lightgreen' : 'red',
              transition: 'width 0.3s ease-in-out',
            }}
          ></div>
        </div>
        <p style={{ marginTop: '10px' }}>{isYes ? 'Yes' : 'No'}</p>
      </div>
    </Card>
  );
};

export default MainCard;