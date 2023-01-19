import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PokemonState {
  pokemon: PokemonInterface;
}

export interface PokemonInterface {
  id: number;
  name: string;
  sprite: string;
  types: PokemonTypeInterface[];
  stats: PokemonStatsInterface[];
  base_experience: number;
  height: number;
  weight: number;
  abilities: PokemonAbilitiesInterface[];
}

interface PokemonTypeInterface {
  slot: number;
  name: string;
  url: string;
}

interface PokemonStatsInterface {
  base_stat: number;
  effort: number;
  stat: GenericInterface;
}

interface GenericInterface {
  name: string;
  url: string;
}

interface PokemonAbilitiesInterface {
  slot: number;
  ability: GenericInterface;
  is_hidden: boolean;
}

const initialState: PokemonState = {
  pokemon: {
    id: 0,
    name: "",
    sprite: "",
    types: [],
    stats: [],
    base_experience: 0,
    height: 0,
    weight: 0,
    abilities: [],
  },
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemon: (state, action: PayloadAction<PokemonInterface>) => {
      state.pokemon = action.payload;
    },
  },
});

export const { setPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
