import React from 'react';

interface deudores {
  children: React.ReactNode;
}

const deudores: React.FC<deudores> = ({ children }) => (
  <>
    <main>
      {children}
    </main>
  </>
);

export default deudores;
