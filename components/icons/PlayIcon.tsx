import React from 'react';

export const PlayIcon: React.FC<{ className?: string }> = ({ className = "text-inherit" }) => (
  <div className={className} data-icon="Play" data-size="24px" data-weight="fill">
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
      <path
        d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"
      ></path>
    </svg>
  </div>
);
