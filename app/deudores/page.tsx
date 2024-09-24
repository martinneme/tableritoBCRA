"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeudoresMain() {
    const router = useRouter();
    const [inputValue, setInputValue] = useState('');
    const [deudor, setDeudorValue] = useState<any>(null);
    const [resultError, setResultError] = useState(false);

    async function getDeuda() {
        const url = `https://api.bcra.gob.ar/centraldedeudores/v1.0/Deudas/${inputValue}`;
        const response = await fetch(url);
        const dataJson = await response.json();
        if(dataJson.results){
               setDeudorValue(dataJson.results);
        }else{
                setResultError(true)
        }
     
    }

    const handleSearch = () => {
        setResultError(false)
        if (inputValue.length >= 11) {
            getDeuda();
        } else {
            alert("Por favor ingrese 11 dígitos");
        }
    };

    const goToBack = () => {
        router.push('/');
    };

    return (
        <main className="flex min-h-40 flex-col text-center items-center p-10">
            <section className="left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 p-3 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-2xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30" style={{ width: '90%', margin: 'auto' }}>
                <code className="mb4 text-4xl font-bold uppercase text-white sm:text-2xl md:mb-8 md:text-4xl titleProyect">
                    <b className="bcra">DEUDORES</b>
                </code>
                <div className="creator">
                    <p><i>Created by </i></p>
                    <p><button className="buttonLinkedin"><a href="https://ar.linkedin.com/in/martinneme">Martín Neme</a></button></p>
                </div>
            </section>

            <section className="left-0 top-0 flex-col mt-10 max-sm:h-30 h-70 justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit backdrop-blur-2xl border-gray-300 text-[#fff] dark:border-neutral-800 
  md:w-100 md:rounded-xl md:border md:bg-neutral-300 md:p-1 md:dark:bg-zinc-800/30 lg:static lg:rounded-xl lg:border lg:bg-neutral-300 lg:p-1 lg:dark:bg-zinc-800/30">

                <section className="flex flex-col md:flex-row items-center p-10">
                    <input
                        placeholder="CUIT/CUIL/CDI"
                        className="w-60 p-2 border border-gray-300 text-[#000] rounded-lg"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button onClick={handleSearch} className="ml-4 p-2 dark:bg-zinc-800/30 text-white rounded-lg">
                        Buscar
                    </button>
                </section>
                {resultError &&   <p className="text-lg font-semibold text-[#fffff]">No se han encontrado resultados para el identificador</p> }
                {deudor && (
                    <div className="mt-10 p-6 bg-gradient-to-b from-zinc-200 dark:bg-zinc-800/30 dark:from-inherit rounded-xl shadow-lg border border-gray-300 dark:border-neutral-800">
                        <h2 className="text-2xl font-bold uppercase text-[#fff] mb-4">{deudor.denominacion}</h2>
                        <p className="text-lg font-semibold text-[#fff]">Identificación: {deudor.identificacion}</p>

                        {deudor.periodos.map((periodo: any, index: number) => (
                            <div key={index} className="mt-6">
                                <h3 className="text-xl font-bold text-[#fff]">Periodo: {periodo.periodo}</h3>
                                {periodo.entidades.map((entidad: any, i: number) => (
                                    <div key={i} className="mt-2 p-4 bg-neutral-300 dark:bg-zinc-800/30 rounded-lg border border-gray-300 dark:border-neutral-800 text-start">
                                        <p className="text-lg text-[#000] dark:text-[#fff]">Entidad: {entidad.entidad}</p>
                                        <p className="text-lg text-[#000] dark:text-[#fff]">Monto: {entidad.monto}</p>
                                        <p className="text-lg text-[#000] dark:text-[#fff]">Fecha situación: {entidad.fechaSit1}</p>
                                        <p className="text-lg text-[#000] dark:text-[#fff]">Situación: {entidad.situacion}</p>
                                        <p className="text-lg text-[#000] dark:text-[#fff]">Refinanciaciones: {entidad.refinanciaciones == false ? "NO" : "SI" }</p>
                                        <p className="text-lg text-[#000] dark:text-[#fff]">Días de atraso en el pago: {entidad.diasAtrasoPago == false ? "NO" : "SI"}</p>
                                        <p className="text-lg text-[#000] dark:text-[#fff]">Recategorizacion obligatoria: {entidad.recategorizacionOblig == false ? "NO" : "SI"}</p>
                                        <p className="text-lg text-[#000] dark:text-[#fff]">Situacion juridica: {entidad.situacionJuridica == false ? "NO" : "SI"}</p>
                                        <p className="text-lg text-[#000] dark:text-[#fff]">Irrecuperable por Disposición Técnica: {entidad.irrecDisposicionTecnica == false ? "NO" : "SI"}</p>
                                        <p className="text-lg text-[#000] dark:text-[#fff]">En revisión: {entidad.enRevision == false ? "NO" : "SI"}</p>
                                        <p className="text-lg text-[#000] dark:text-[#fff]">Proceso judicial: {entidad.procesoJud == false ? "NO" : "SI"}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                )}

                <div onClick={goToBack} className="left-0 top-0 flex max-sm:m-auto max-sm:mb-8 max-sm:h-10 max-sm:w-1/4 h-auto justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit backdrop-blur-2xl border-gray-300 text-[#fff] dark:border-neutral-800 
  md:w-auto md:rounded-xl md:border md:bg-neutral-300 md:p-1 md:dark:bg-zinc-800/30 lg:static lg:rounded-xl lg:border lg:bg-neutral-300 lg:p-1 lg:dark:bg-zinc-800/30">
                    <button>Volver</button>
                </div>
            </section>
        </main>
    );
}
