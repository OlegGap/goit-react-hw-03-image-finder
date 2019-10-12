import ContentLoader from 'react-content-loader';
import React from 'react';

const LoaderCard = () => (
  <ContentLoader>
    <rect x="20" y="0" rx="5" ry="5" width="80" height="80" />
    <rect x="20" y="84" rx="4" ry="4" width="50" height="7" />
    <rect x="20" y="93" rx="3" ry="3" width="60" height="7" />

    <rect x="120" y="0" rx="5" ry="5" width="80" height="80" />
    <rect x="120" y="84" rx="4" ry="4" width="50" height="7" />
    <rect x="120" y="93" rx="3" ry="3" width="60" height="7" />

    <rect x="220" y="0" rx="5" ry="5" width="80" height="80" />
    <rect x="220" y="84" rx="4" ry="4" width="50" height="7" />
    <rect x="220" y="93" rx="3" ry="3" width="60" height="7" />

    <rect x="320" y="0" rx="5" ry="5" width="80" height="80" />
    <rect x="320" y="84" rx="4" ry="4" width="50" height="7" />
    <rect x="320" y="93" rx="3" ry="3" width="60" height="7" />
  </ContentLoader>
);

export default LoaderCard;
