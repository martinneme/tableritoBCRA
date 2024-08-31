"use client";

import { useRouter } from "next/navigation";

const CardSection = () => {
  const router = useRouter();

  // Array de datos para cada tarjeta
  const cards = [
    { id: 1, title: "VARIABLES PRINCIPALES", route: "/variablesPrincipales" },
    { id: 2, title: "COTIZACIONES", route: "/section2" },
    { id: 3, title: "RIESGO PAIS", route: "/section3" },
    { id: 4, title: "TABLAS", route: "/section4" },
    { id: 4, title: "TABLAS", route: "/section4" },
  ];
  

  
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {cards.map((card) => (
        <div
          key={card.id}
          onClick={() => router.push(card.route)}
          className="flex w-full cursor-pointer items-center justify-center text-slate-400 hover:text-sky-700 rounded-lg border border-gray-200 bg-white p-6 text-center shadow-md hover:bg-gray-100 hover:shadow-lg sm:w-48 sm:h-48"
        >
          <h2 className="text-xl font-semibold">{card.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
