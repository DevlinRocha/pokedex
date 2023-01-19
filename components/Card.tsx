import { useEffect, useState } from "react";
import Link from "next/link";
import { PokemonInterface, setPokemon } from "@/features/pokemon";
import { useDispatch } from "react-redux";
import { getPokemon, capitalize } from "@/utilities/functions";

interface CardProps {
  id: number;
}

function Card(props: CardProps) {
  const [localPokemon, setLocalPokemon] = useState({} as PokemonInterface);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const pokemon = await getPokemon(props.id);
      setLocalPokemon({
        id: pokemon.id,
        name: pokemon.name,
        sprite: pokemon.sprite,
        types: pokemon.types,
        stats: pokemon.stats,
        base_experience: pokemon.base_experience,
        height: pokemon.height,
        weight: pokemon.weight,
        abilities: pokemon.abilities,
      });
    })();
  }, []);

  return (
    <Link
      onClick={() => dispatch(setPokemon(localPokemon))}
      href={String(props.id)}
      className="mx-6 my-5"
    >
      <div className="flex flex-col items-center border rounded-[15px] pt-6 px-[52.17px] drop-shadow-[0_6px_32px_rgba(0,0,0,6%)] bg-white">
        <img
          src={localPokemon.sprite}
          alt="Pokémon sprite"
          width={170}
          height={170}
        />
        <span className="text-[#999] text-lg leading-[27px]">
          #{String(props.id).padStart(3, "0")}
        </span>
        <span className="pb-6 font-bold text-lg leading-[27px]">
          {capitalize(localPokemon.name)}
        </span>
      </div>
    </Link>
  );
}

export default Card;
