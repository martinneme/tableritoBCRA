"use client";

import { useRouter } from "next/navigation";

interface CardDeudorResponse {
    status: number;
    results: Results;
}

interface Results {
    identificacion: number;
    denominacion: string;
    periodos: Periodo[];
}

interface Periodo {
    periodo: string;
    entidades: Entidad[];
}

interface Entidad {
    entidad: string;
    situacion: number;
    fechaSit1: string;
    monto: number;
    diasAtrasoPago: number;
    refinanciaciones: boolean;
    recategorizacionOblig: boolean;
    situacionJuridica: boolean;
    irrecDisposicionTecnica: boolean;
    enRevision: boolean;
    procesoJud: boolean;
}



const CardDeudor: React.FC<CardDeudorResponse> = ({ status, results }) => {
    const router = useRouter();
  
    const goToVariables = (route: string) => {
      router.push(route);
    };
  
    return (
      <div>
        <h1>Deudor: {results.denominacion}</h1>
        <p>Identificación: {results.identificacion}</p>
  
        {results.periodos.map((periodo, index) => (
          <div key={index}>
            <h2>Periodo: {periodo.periodo}</h2>
            {periodo.entidades.map((entidad, i) => (
              <div key={i}>
                <p>Entidad: {entidad.entidad}</p>
                <p>Monto: {entidad.monto}</p>
                <p>Días de atraso en el pago: {entidad.diasAtrasoPago}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };
  
  export default CardDeudor;
  
