"use client"
import React, { useState }  from 'react';
import { useRouter } from "next/navigation";

const Modal: React.FC = () => {
  const router = useRouter(); 
  const [isHidden, setIsHidden] = useState(false);

    const goToVariables = (route: string) => {
      router.push(route);
    };

  return (
    <div className={isHidden ? 'hidden' : ''} id="modalSection" >
      <div className="disclaimer">
      <p ><i >Este sitio obtiene información de las API públicas del BCRA y otras fuentes. No pertenece al gobierno ni a ningun movimiento político. Tiene como finalidad ser meramente informativo para la ciudadanía. </i></p>
      <button onClick={() => goToVariables("/avisoLegal")} className="buttonAcept">
    Aviso legal
      </button>
      <button className="buttonAcept" onClick={() => setIsHidden(true)}>Aceptar</button>
      </div>
    
    </div>
  );
};

export default Modal;