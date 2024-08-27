"use client";
import { useEffect, useState } from "react";
import LineChart from "./lineChart";

// Define la estructura de los datos esperados
interface Variable {
  idVariable: number;
  cdSerie: number;
  descripcion: string;
  fecha: string;
  valor: number;
}

interface Var {
    idVariable: number;
    fecha: string;
    valor: number;
}


export default function CardFetch() {
  const [variables, setVariables] = useState<Variable[]>([]);
  const [individualVar,setIndividualVar] = useState<Var[]>([]);
  const [labels,setLabels] = useState<any>([])
  const [data,setData] = useState<number[]>([]);

  const idsToShow = [1,40]; // IDs que deseas mostrar

  function getFormattedDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses son de 0 a 11
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const fetchIndividualVar = async () => {
    try {
        const startDate = '2023-12-01';
        const endDate = getFormattedDate(new Date()); // Fecha de hoy
        const variableId = 1;
        
        const url = 'https://api.bcra.gob.ar/estadisticas/v2.0/DatosVariable/' + variableId + '/' + startDate + '/' + endDate;
        const response = await fetch(url);
      const dataJson = await response.json();

      const variablesData: Var[] = dataJson.results;
      const datita = variablesData.map(element=>element.valor)
      const fechita = variablesData.map(element=>element.fecha)
      setData(datita);
      setLabels(fechita);
      console.log(fechita)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://api.bcra.gob.ar/estadisticas/v2.0/PrincipalesVariables');
//         const dataJson = await response.json();

//         const variablesData: Variable[] = dataJson.results;
//         setVariables(variablesData);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }},[]);


    useEffect(() => {
       

        fetchIndividualVar();
  }, []);


  return (
    <div style={{ width: '100%'}}>
    {data ?  ( <div style={{ width: '100%', height: '100%',backgroundColor:'white',margin:'auto' }}> {/* Ajusta el tamaño aquí */}
      <h2>Line Chart</h2>
      <LineChart data={data} labels={labels} />
    </div>)
     : (
      <p>Loading...</p>
    )}
  </div>
  );
}
