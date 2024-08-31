"use client"
import { useRouter } from "next/navigation";



export default function avisoLegal() {
    const router = useRouter();

    const goToBack = () => {
        router.push('/');
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-1 mt-20">
            <section className="left-0 top-0 flex-col m-auto max-sm:m-auto max-sm:mb-8 max-sm:h-10 max-sm:w-1/4 h-40 justify-center border-b border-gray-300 bg-gradient-to-b  from-zinc-200 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit backdrop-blur-2xl border-gray-300 text-[#fff] dark:border-neutral-800 
  md:w-auto  md:rounded-xl md:border md:bg-neutral-300 md:p-1 md:dark:bg-zinc-800/30
  lg:static  lg:rounded-xl lg:border lg:bg-neutral-300 lg:p-1 lg:dark:bg-zinc-800/30">
                <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex titleProyect p-5" style={{ margin: 'auto' }}>

                    <p>
                        Los usuarios reconocen que los datos proporcionados son meramente informativos
                        y pueden no reflejar con total exactitud la realidad o estar completamente actualizados en todo momento.
                        Los datos podrian no ser de fuentes oficiales.La información oficial debe ser consultada en las fuentes gubernamentales correspondientes.
                        No nos hacemos responsables por eventuales daños o perjuicios que pudieran resultar del uso de los datos proporcionados por nuestro sitio.
                    </p>

                </div>
                <div onClick={goToBack} className="left-0 top-0 flex max-sm:m-auto max-sm:mb-8 max-sm:h-10 max-sm:w-1/4 h-auto justify-center border-b border-gray-300 bg-gradient-to-b  from-zinc-200 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit backdrop-blur-2xl border-gray-300 text-[#fff] dark:border-neutral-800 
  md:w-auto  md:rounded-xl md:border md:bg-neutral-300 md:p-1 md:dark:bg-zinc-800/30
  lg:static  lg:rounded-xl lg:border lg:bg-neutral-300 lg:p-1 lg:dark:bg-zinc-800/30" >
                <button>Volver</button>
            </div>
            </section>
           
        </main>
    );
}
