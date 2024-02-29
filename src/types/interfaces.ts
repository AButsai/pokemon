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
	id: number
	name: string
	stats: IStats[]
	sprites: ISprites
	types: ITypesPokemon[]
	weight: number
	moves: IMovies[]
}

export interface IStats {
	base_stat: number
	effort: number
	stat: IStat
}

export interface IStat {
	name: string
	url: string
}

export interface ISprites {
	front_default: string
	other: IOther
}

export interface IOther {
	dream_world: IDreamWorld
}

export interface IDreamWorld {
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

export interface IMovies {
	move: IMove
	version_group_details: IVersionGroupDetails[]
}

export interface IMove {
	name: string
	url: string
}

export interface IVersionGroupDetails {
	level_learned_at: number
	move_learn_method: IMove
	version_group: IMove
}

export interface ITotalInfo {
	name: string
	meaning: string | number
}
