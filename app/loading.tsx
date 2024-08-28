import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="loaderContainer">
      <div className="loader"></div>
      <p className="loadingText">Obteniendo información del BCRA</p>
    </div>
  );
};

export default Loading;