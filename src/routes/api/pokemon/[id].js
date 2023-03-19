export async function get({ params }) {
  let id = params.id;
  let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokeman = await res.json();

  // THIS WILL THEN PASS THE pokeman PROPS TO THE NORMAL SCRIPT OF THE PAGE.
  return {
    status: 200,
    body: pokeman,
  };
}
