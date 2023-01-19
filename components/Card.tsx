import { useEffect, useState } from "react";

interface CardProps {
  id: number;
}

interface PokemonType {
  name: string;
  sprite: string;
}

function Card(props: CardProps) {
  const [pokemon, setPokemon] = useState({} as PokemonType);

  useEffect(() => {
    (async () => {
      const pokemon = await getPokemon(props.id);
      setPokemon({
        name: pokemon.name,
        sprite: pokemon.sprites.other["official-artwork"].front_default,
      });
    })();
  }, []);

  async function getPokemon(id: number) {
    if (!id) throw new Error(`Pokémon not found.`);

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return await response.json();
  }

  return (
    <div className="px-6 py-5">
      <div className="flex flex-col items-center border rounded-[15px] pt-6 px-[52.17px] drop-shadow-[0_6px_32px_rgba(0,0,0,6%)] bg-white">
        <img
          src={pokemon.sprite}
          alt="Pokémon sprite"
          width={170}
          height={170}
        />
        <span className="text-[#999] text-lg leading-[27px]">
          #{String(props.id).padStart(3, "0")}
        </span>
        <span className="pb-6 font-bold text-lg leading-[27px]">
          {pokemon.name}
        </span>
      </div>
    </div>
  );
}

export default Card;
