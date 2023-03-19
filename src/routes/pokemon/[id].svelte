<!-- THIS SCRIPT WILL RUN BEFORE LOADING THE PAGE -->
<script context="module">
  export async function load({ page }) {
    let id = page.params.id;
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokeman = await res.json();

    // THIS WILL THEN PASS THE pokeman PROPS TO THE NORMAL SCRIPT OF THE PAGE.
    return { props: { pokeman } };
  }
</script>

<script>
  export let pokeman; // getting value of pokemon from above script
  const type = pokeman.types[0].type.name;
</script>

<article class="flex  flex-col items-center">
  <h1 class="uppercase text-4xl text-center my-8">{pokeman.name}</h1>
  <p>
    Type: <strong>{type}</strong> | Height:
    <strong>{pokeman.height}</strong> | Weight:
    <strong>{pokeman.weight}</strong>
  </p>
  <img
    src={pokeman.sprites["front_default"]}
    alt={pokeman.name}
    class="card-image"
  />
</article>
