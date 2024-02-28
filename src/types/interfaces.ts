export interface IResponsePokemons {
	count: number
	next: string | null
	previous: string | null
	results: IPokemon[]
}

export interface IPokemon {
	name: string
	url: string
}

export interface IPokemonInfo {
	name: string
	sprites: ISprites
	types: ITypesPokemon[]
}

export interface ISprites {
	front_default: string
}

export interface ITypesPokemon {
	slot: number
	type: ITypePokemon
}

export interface ITypePokemon {
	name: string
	url: string
}

export interface ITypePokemonResponse {
	pokemon: ITypePokemonResponseObj[]
}

export interface ITypePokemonResponseObj {
	pokemon: IPokemon
	slot: number
}

export interface IQueryPokemons {
	offset: number
	limit: number
}
