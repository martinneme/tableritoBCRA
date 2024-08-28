import Image from "next/image";
import CardFetch from "./cardFetch"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-1">
  <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex titleProyect">
  <p className=" left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    <code className="font-mono font-bold text-2xl lg:text-4xl">
      Tablerito BCRA
    </code>
  </p>
</div>
<p><i style={{
    fontSize: "0.75rem;" }}>Este sitio obtiene información de las API públicas del BCRA. No pertenece al gobierno ni a ningun movimiento político. Tiene como finalidad ser meramente informativo para la ciudadanía. </i></p>

      <CardFetch/>
    </main>
  );
}
