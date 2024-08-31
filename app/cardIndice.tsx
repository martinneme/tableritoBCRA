"use client";

import { useRouter } from "next/navigation";

interface CardIndiceData {
  valor: number;
  fecha: string;
}

interface CardIndiceProps {
  title: string,
  data: CardIndiceData | undefined,
  route: string
};


const CardIndice: React.FC<CardIndiceProps> = ({ title, data, route }) => {
  const router = useRouter();


  const goToVariables = (route: string) => {
    router.push(route);
  };

  return (
    <div onClick={() => goToVariables(route)} className="flex flex-wrap justify-center gap-4 p-4">
      <div
        className="grid justify-items-stretch w-full max-w-64 min-w-64 min-h-40 text-center cursor-pointer items-center justify-center text-slate-400 hover:text-sky-700 rounded-lg border border-gray-200 bg-white p-6 text-center shadow-md hover:bg-gray-100 hover:shadow-lg sm:w-48 sm:h-48"
      >
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        { data?.valor && (
          <>
              <div>
    <p className="text-4xl font-semibold  h-10">{data?.valor}</p>
</div>
<div className="border-t-2 border-t-indigo-500 my-4 mt-auto" >
<p className="">{data?.fecha}</p>
</div>
          </>

) 
}

      </div>
    </div>
  );
};

export default CardIndice;
