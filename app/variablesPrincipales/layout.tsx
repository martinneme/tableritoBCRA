import React from 'react';

interface VarPrincipalesLayoutProps {
  children: React.ReactNode;
}

const VarPrincipalesLayout: React.FC<VarPrincipalesLayoutProps> = ({ children }) => (
  <>
    <main>
      {children}
    </main>
  </>
);

export default VarPrincipalesLayout;
