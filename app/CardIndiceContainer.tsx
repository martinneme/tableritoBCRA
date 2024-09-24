"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "./loading";
import CardIndice from "./cardIndice";

const CardIndiceContainer = () => {
  const router = useRouter();
  const [chartsData, setChartsData] = useState<{ [key: number]: { fecha: string, valor: number } }>({});

  const cards = [
    { id: 1, title: "RIESGO PAIS", route: "/",url:"https://api.argentinadatos.com/v1/finanzas/indices/riesgo-pais/ultimo" },
    { id: 2, title: "INFLACION MENSUAL", route: "/",url:"https://api.argentinadatos.com/v1/finanzas/indices/inflacion" },
    { id: 3, title: "INFLACION INTERANUAL", route: "/",url:"https://api.argentinadatos.com/v1/finanzas/indices/inflacionInteranual" },
    { id: 4, title: "INDICA UVA", route: "/",url:"https://api.argentinadatos.com/v1/finanzas/indices/uva" },
    { id: 5, title: "VARIABLES PRINCIPALES", route: "/variablesPrincipales",url:"" },
    { id: 6, title: "DEUDORES", route: "/deudores",url:"" },

  ];

  async function getIndices(url:string) {
    if(url){
      const response = await fetch(url);
      const dataJson = await response.json();
      if(dataJson.length){
        return dataJson[dataJson.length - 1];
      }
   
     return dataJson 
    }
     return { }
  }


  useEffect(() => {
    const fetchAllData = async () => {
      if (cards.length === 0) return;

      // setLoading(true);
      try {
        const results = await Promise.all(
          cards.map(card => getIndices(card.url))
        );

        const newChartsData: { [key: number]: { fecha: string, valor: number } } = {};
        cards.forEach((card, index) => {
          const id = card.id; 
          newChartsData[id] = results[index];
        });

        setChartsData(newChartsData);

      } finally {
        // setLoading(false);
      }
    };

    fetchAllData();
  }, []); 
  

  
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {cards.map((card) => (
         <CardIndice key={card.id} title={card.title} data={chartsData[card.id]} route={card.route} />
      ))}
    </div>
  );
};

export default CardIndiceContainer;
