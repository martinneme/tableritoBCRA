"use client"
import React, { useState }  from 'react';


const Modal: React.FC = () => {
    const [isHidden, setIsHidden] = useState(false);

  return (
    <div className={isHidden ? 'hidden' : ''} id="modalSection" >
      <div className="disclaimer">
      <p ><i >Este sitio obtiene información de las API públicas del BCRA. No pertenece al gobierno ni a ningun movimiento político. Tiene como finalidad ser meramente informativo para la ciudadanía. </i></p>
      <button className="buttonAcept" onClick={() => setIsHidden(true)}>Aceptar</button>
      </div>
    </div>
  );
};

export default Modal;