<!-- SCRIPT -->
<script>
    import PokemanCard from "../components/PokemanCard.svelte";
    import { pokemon } from "../stores/PokeStore";

    let searchInput = "";
    let filteredPokemon = [...$pokemon];

    $: {
        if (searchInput) {
            filteredPokemon = $pokemon.filter((pokeman) =>
                pokeman.name.toLowerCase().includes(searchInput.toLowerCase())
            );
        } else filteredPokemon = [...$pokemon];
    }
</script>

<!-- HTML -->
<svelte:head>
    <title>Svelte-Home</title>
</svelte:head>
<h1 class="text-4xl text-center uppercase mb-8">Welcome to Pokemon Store</h1>
<input
    type="text"
    name="search_pokemon"
    id="search-pokemon"
    placeholder="Search Pokemon"
    class="rounded-md w-full text-lg p-2 mb-4 border-2  border-gray-200"
    bind:value={searchInput}
/>
<section class="grid  sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
    {#each filteredPokemon as pokeman}
        <PokemanCard {pokeman} />
    {/each}
</section>

<!-- STYLE -->
<style>
</style>
