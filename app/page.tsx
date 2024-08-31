"use client"
import Image from "next/image";
import Modal from "./modal";
import { useRouter } from "next/navigation";
import CardSection from "./cardSection";
import CardIndiceContainer from "./CardIndiceContainer";

export default function Home() {
  const router = useRouter(); 

  const goToVariables = () => {
    router.push('/variablesPrincipales');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-1">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex titleProyect">
        <div className="left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30" style={{ width: '90%',margin:'auto'}}>
          <code className="mb4 text-4xl font-bold uppercase text-white sm:text-5xl md:mb-8 md:text-6xl titleProyect">
            <b className="bcra">Tablerito</b>
            <b > ARG</b>
          </code>
          <div className="creator">
      <p><i>Created by </i></p>
      <p><button className="buttonLinkedin"><a href="https://ar.linkedin.com/in/martinneme">Martín Neme</a></button></p>
      </div>
        </div>
      </div>
    <CardIndiceContainer />
      <section>
        <Modal/>
      </section>
      <div className="footer"></div>
    </main>
  );
}
