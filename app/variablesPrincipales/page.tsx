"use client";
import { useEffect, useState } from "react";
import LineChart from "./lineChart";
import Loading from "../loading";
import { useRouter } from "next/navigation";


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
  const router = useRouter(); 

  const goToBack = () => {
    router.push('/');
  };


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
      const endDate = getFormattedDate(new Date());
      const dateYearBefore = new Date();
      dateYearBefore.setFullYear(dateYearBefore.getFullYear() - 1);
      const startDate = getFormattedDate(dateYearBefore);
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
  }, [idsToShow]); 

  useEffect(() => {
    getIdsVariablesAll();
  }, []); 

  return (
    <div className="variablesSection" style={{ width: '90%' }}>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex titleProyect p-5" style={{ margin: 'auto' }}>
      <div onClick={goToBack} className="left-0 top-0 flex max-sm:m-auto max-sm:mb-8 max-sm:h-10 max-sm:w-1/4 h-24 justify-center border-b border-gray-300 bg-gradient-to-b  from-zinc-200 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit backdrop-blur-2xl border-gray-300 text-[#fff] dark:border-neutral-800 
  md:w-auto  md:rounded-xl md:border md:bg-neutral-300 md:p-1 md:dark:bg-zinc-800/30
  lg:static  lg:rounded-xl lg:border lg:bg-neutral-300 lg:p-1 lg:dark:bg-zinc-800/30" >
          <button>Volver</button>
        </div>
        <div className="left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 p-3 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-2xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 borderS" style={{ width: '90%', margin: 'auto' }}>
          <code className="mb4 text-4xl font-bold uppercase text-white sm:text-2xl md:mb-8 md:text-4xl titleProyect" >
            <b className="bcra">Variables Principales</b>
          </code>
          <div className="creator">
            <p><i>Created by </i></p>
            <p><button className="buttonLinkedin"><a href="https://ar.linkedin.com/in/martinneme">Martín Neme</a></button></p>
          </div>
        </div>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '20px', margin: 'auto' }}>
          {idsToShow.map((id, index) => (
            <div key={id} style={{ width: '100%', backgroundColor: 'white', margin: 'auto' }} className="titleLine">
              <h2></h2>
              <p className="titleProyect varTitle">
                <code className="font-mono font-bold f-white">{descriptVar[index]}</code>
              </p>
              <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">

              </div>

              {chartsData[id] && <LineChart data={chartsData[id].data} labels={chartsData[id].labels} />}
            </div>
          ))}
        </div>
      )}
      <div className="footer"></div>
    </div>
  );
}
