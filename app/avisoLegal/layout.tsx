import React from 'react';

interface avisoLegalLayoutProps {
  children: React.ReactNode;
}

const avisoLegalLayout: React.FC<avisoLegalLayoutProps> = ({ children }) => (
  <>
    <main>
      {children}
    </main>
  </>
);

export default avisoLegalLayout;
