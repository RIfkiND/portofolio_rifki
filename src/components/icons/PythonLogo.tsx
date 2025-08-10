import React from 'react';
import { SiPython } from 'react-icons/si';

interface PythonLogoProps {
  className?: string;
  size?: number;
}

export const PythonLogo: React.FC<PythonLogoProps> = ({ className = "", size = 16 }) => {
  return (
    <SiPython 
      className={className}
      size={size}
      style={{ 
        color: '#3776ab'
      }}
    />
  );
};

export default PythonLogo;
