export async function getPokemon(id: number) {
  if (!id) throw new Error(`Pokémon not found.`);

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();

  return {
    id: data.id,
    name: data.name,
    sprite: data.sprites.other["official-artwork"].front_default,
    types: data.types,
    stats: data.stats,
    base_experience: data.base_experience,
    height: data.height,
    weight: data.weight,
    abilities: data.abilities,
  };
}

export function capitalize(string: string) {
  if (!string) return;

  return string
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1, word.length);
    })
    .join(" ");
}
