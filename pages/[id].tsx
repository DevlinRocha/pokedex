import Link from "next/link";
import Image from "next/image";
import type { RootState } from "@/store";
import { useSelector } from "react-redux";
import Detail from "@/components/Detail";
import ArrowLeft from "../public/arrow-left.svg";

export default function DetailPage() {
  const pokemon = useSelector((state: RootState) => state.pokemon);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="max-w-[740px] w-full">
        <Link className="self-start" href="/">
          <Image
            className="mt-[68px] mb-[52px]"
            src={ArrowLeft}
            alt="Back Arrow"
            width={24}
            height={24}
          />
        </Link>

        <img
          className="absolute z-10 top-16 right-[460px] "
          src={pokemon.pokemon.sprite}
          alt="Pokémon sprite"
          width={170}
          height={170}
        />

        <Detail />
      </div>
    </div>
  );
}
