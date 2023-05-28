<script>
    import Header from '$lib/Header.svelte';
    import Category from "$lib/Category.svelte";
    import MainNavigator from "$lib/MainNavigator.svelte";
    import LocationForm from "$lib/LocationForm.svelte";
    import Map from "$lib/Map.svelte";

    export const ssr = false;
</script>

<Header>
    <MainNavigator />
</Header>

<section class="columns">
    <aside class="column is-one-quarter">
        <div class="box">
            <h1 class="title is-4">POI Dashboard</h1>
            <LocationForm />
        </div>
    </aside>

    <div class="column">
        <Map />
        <br>
        <h1 class="title is-5">Categories</h1>
        <Category/>
    </div>
</section>