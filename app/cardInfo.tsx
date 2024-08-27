import React from 'react';


interface Variable {
  idVariable: number;
  cdSerie: number;
  descripcion: string;
  fecha: string;
  valor: number;
}

interface CardInfoProps {
    variable: Variable; 
  }


const CardInfo: React.FC<CardInfoProps> = ({ variable }) => {


  return (
    <>
        <div className="CardInfo" key={variable.idVariable}>
          <p className='CardInfo-value'>Description: {variable.descripcion}</p>
          <p className='CardInfo-value'>Valor: {variable.valor}</p>
          <p className='CardInfo-value '>Date: {variable.fecha}</p>
          <div className='buttonPanelItem'><button id='buttonGraf'><a href='/'>6 meses</a></button><button id='buttonGraf'><a>8 meses</a></button><button id='buttonGraf'><a>1 año</a></button></div>
        </div>
       
    </>
  );
}

export default CardInfo;
