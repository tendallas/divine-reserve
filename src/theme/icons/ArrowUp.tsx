import React from 'react';
import { Icon } from './types';

const ArrowUp: React.FC<Icon & { size?: number }> = React.memo((
  { color = '#232323', size = 24 },
) => (
  <svg fill={color} width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.71,5.29l-3-3a1,1,0,0,0-1.42,0l-3,3A1,1,0,0,0,9.71,6.71L11,5.41V21a1,1,0,0,0,2,0V5.41l1.29,1.3a1,1,0,0,0,1.42,0A1,1,0,0,0,15.71,5.29Z" />
  </svg>
));

ArrowUp.displayName = 'ArrowUp';

export default ArrowUp;
