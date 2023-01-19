import Head from "next/head";
import Image from "next/image";
import Pokeball from "../public/Pokéball.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokédex</title>
        <meta name="description" content="Explore the world of Pokémon!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-10 text-[#222] font-['Poppins']">
        <header className="flex flex-col items-center pb-20">
          <h1 className="flex items-center">
            <Image src={Pokeball} alt="Pokéball" width={36} height={36} />

            <span className="font-bold text-5xl leading-[72px] pl-3.5">
              Pokédex
            </span>
          </h1>

          <span className="w-[746px] text-xl text-center font-['Open_Sans'] leading-[27px] p-3">
            Welcome to the Pokédex challenge! The goal is to build out the UI
            from this Figma. Then you’ll make a request to the pokéapi endpoint
            to populate it with the data you receive.
          </span>

          <span className="bg-[#E6E6E6] rounded font-semibold leading-6 font-mono">
            https://pokeapi.co/api/v2/pokemon/
          </span>
        </header>
      </main>
    </>
  );
}
