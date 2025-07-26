import React from 'react';

export const YouTubeLogoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <div className={className} data-icon="YouTubeLogo" data-size="24px" data-weight="regular">
    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
      <path d="M252.66,69.11a32.31,32.31,0,0,0-22.6-22.6C209.82,40,128,40,128,40s-81.82,0-102.06,6.51A32.31,32.31,0,0,0,3.34,69.11,337.53,337.53,0,0,0,0,128a337.53,337.53,0,0,0,3.34,58.89,32.31,32.31,0,0,0,22.6,22.6C46.18,216,128,216,128,216s81.82,0,102.06-6.51a32.31,32.31,0,0,0,22.6-22.6A337.53,337.53,0,0,0,256,128,337.53,337.53,0,0,0,252.66,69.11ZM102,159.08V96.92l54,31.08Z"></path>
    </svg>
  </div>
);
