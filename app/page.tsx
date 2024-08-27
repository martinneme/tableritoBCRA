import Image from "next/image";
import CardFetch from "./cardFetch"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
  <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex titleProyect">
  <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    <code className="font-mono font-bold text-2xl lg:text-4xl">
      Tablerito BCRA
    </code>
  </p>
</div>

      <div className="z-10 w-full max-w-2xl items-center justify-between font-mono text-sm lg:flex titleProyect">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold">Reservas internacionales en millones de USD</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
    
          </a>
        </div>
      </div>
      <CardFetch/>


<p>Este sitio obtiene información de las API públicas del BCRA, pero no pertenece al gobierno ni a un movimiento político. Tiene como finalidad ser meramente informativo para la ciudadanía.</p>
    </main>
  );
}
