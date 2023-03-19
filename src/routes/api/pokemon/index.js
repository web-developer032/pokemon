export async function get({ params }) {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=150";
  const res = await fetch(url);
  const data = await res.json();
  const pokemon = data.results.map((pokemon, i) => ({
    name: pokemon.name,
    id: i + 1,
    image: `https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/${
      i + 1
    }.png`,
  }));

  return {
    status: 200,
    body: pokemon,
  };
}
