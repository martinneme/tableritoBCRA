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
  const [chartsData, setChartsData] = useState<{ [key: number]: { labels: string[], data: number[] } }>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [idsToShow, setIdsToShow] = useState<number[]>([]);
  const [descriptVar, setDescriptVar] = useState<string[]>([]);

  function getFormattedDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  async function getIdsVariablesAll() {
    const url = `https://api.bcra.gob.ar/estadisticas/v2.0/PrincipalesVariables`;
    const response = await fetch(url);
    const dataJson = await response.json();
    const variablesData: Variable[] = Array.isArray(dataJson) ? dataJson : dataJson.results;
    const newIds = variablesData.map((e: Variable) => e.idVariable); 
    const newDesc = variablesData.map((e: Variable) => e.descripcion); 
    setIdsToShow(newIds);
    setDescriptVar(newDesc);
  }

  const fetchIndividualVar = async (variableId: number) => {
    try {
      const startDate = '2023-09-01';
      const endDate = getFormattedDate(new Date()); 
      const url = `https://api.bcra.gob.ar/estadisticas/v2.0/DatosVariable/${variableId}/${startDate}/${endDate}`;
      const response = await fetch(url);
      const dataJson = await response.json();
      
      const variablesData: Var[] = dataJson.results;
      const data = variablesData.map(element => element.valor);
      const labels = variablesData.map(element => element.fecha);
      
      return { labels, data };
    } catch (error) {
      console.error('Error fetching data:', error);
      return { labels: [], data: [] };
    }
  };

  useEffect(() => {
    const fetchAllData = async () => {
      if (idsToShow.length === 0) return; 

      setLoading(true);
      try {
        const results = await Promise.all(
          idsToShow.map(id => fetchIndividualVar(id))
        );

        const newChartsData: { [key: number]: { labels: string[], data: number[] } } = {};
        idsToShow.forEach((id, index) => {
          newChartsData[id] = results[index];
        });
      
        setChartsData(newChartsData);
       
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, [idsToShow]); // Agrega idsToShow como dependencia para el efecto

  useEffect(() => {
    getIdsVariablesAll();
  }, []); // Solo se ejecuta una vez para obtener los IDs inicialmente

  return (
    <div style={{ width: '100%' }}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' ,margin:'auto'}}>
          {idsToShow.map((id,index) => (
            <div key={id} style={{ width: '100%',  backgroundColor: 'white', margin: 'auto' }} className="titleLine">
              <h2></h2>
        <p className="titleProyect">
          <code className="font-mono font-bold f-white">{descriptVar[index]}</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
         
        </div>

              {chartsData[id] && <LineChart data={chartsData[id].data} labels={chartsData[id].labels} />} {/* Solo renderizar el gráfico si los datos están disponibles */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
