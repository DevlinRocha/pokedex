import { PokemonTypeInterface } from "@/features/pokemon";
import { RootState } from "@/store";
import { capitalize } from "@/utilities/functions";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Detail() {
  const pokemon = useSelector((state: RootState) => state.pokemon);

  useEffect(() => {
    console.log(pokemon);
  }, [pokemon]);

  return (
    <div>
      <div className="flex flex-col items-center border rounded-t-[15px] pt-[120px] px-[52.17px] drop-shadow-[0_6px_32px_rgba(0,0,0,6%)] bg-[#2b2b2b] max-w-[740px] w-full">
        <span className="text-[#999] text-lg leading-[27px]">
          #{String(pokemon.pokemon.id).padStart(3, "0")}
        </span>
        <span className="pb-[27px] font-bold text-4xl text-white leading-[27px]">
          {capitalize(pokemon.pokemon.name)}
        </span>
        <div className="flex">
          {pokemon.pokemon.types.map((type: PokemonTypeInterface) => {
            return (
              <span
                className="px-4 py-2 mb-[48px] mx-2.5 rounded-full bg-[#BF3535] font-sm font-bold text-white leading-[21px]"
                key={type.slot}
              >
                {type.slot}grass
              </span>
            );
          })}
        </div>
      </div>
      <section className="flex flex-col items-center">
        <div className="flex justify-center p-4 w-full">
          {[
            { name: "hp", display: "HP" },
            { name: "attack", display: "Attack" },
            { name: "defense", display: "Defense" },
          ].map((stat, index) => {
            return (
              <div
                className="flex flex-col items-center justify-center p-4 m-4 bg-[#F3F3F3] rounded-3xl max-w-[158.67px] w-full max-h-[134px] h-[134px]"
                key={index}
              >
                {pokemon.pokemon.stats.map((statData) => {
                  return (
                    statData.stat.name === stat.name && (
                      <span className="text-[32px] font-bold leading-[48px] text-black pb-4">
                        {statData.base_stat}
                      </span>
                    )
                  );
                })}
                <span className="text-[#888] leading-[21.79px] font-['Open_Sans']">
                  {stat.display}
                </span>
              </div>
            );
          })}
        </div>

        <div className="w-[540px]">
          <div className="flex w-full justify-between">
            <span className="text-lg text-[#999] leading-[27px] font-['Open_Sans']">
              Base XP
            </span>
            <span className="font-bold text-lg leading-[27px] font-['Open_Sans']">
              {pokemon.pokemon.base_experience}
            </span>
          </div>

          <div className="w-full bg-[#EEE] h-0.5 my-6" />

          <div className="flex w-full justify-between">
            <span className="text-lg text-[#999] leading-[27px] font-['Open_Sans']">
              Height
            </span>
            <span className="font-bold text-lg leading-[27px] font-['Open_Sans']">
              {pokemon.pokemon.height}
            </span>
          </div>

          <div className="w-full bg-[#EEE] h-0.5 my-6" />

          <div className="flex w-full justify-between">
            <span className="text-lg text-[#999] leading-[27px] font-['Open_Sans']">
              Weight
            </span>
            <span className="font-bold text-lg leading-[27px] font-['Open_Sans']">
              {pokemon.pokemon.weight}
            </span>
          </div>

          <div className="w-full bg-[#EEE] h-0.5 my-6" />

          <div className="flex w-full justify-between">
            <span className="text-lg text-[#999] leading-[27px] font-['Open_Sans']">
              Abilities
            </span>
            <span className="font-bold text-lg leading-[27px] font-['Open_Sans']">
              {pokemon.pokemon.abilities.map((ability, index) => (
                <span key={index}>{ability.ability.name}, </span>
              ))}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
