<script>
    import Header from '$lib/Header.svelte';
    import LocationForm from "$lib/LocationForm.svelte";
    import LocationList from "$lib/LocationList.svelte";
    import MainNavigator from "$lib/MainNavigator.svelte";
</script>

<Header>
    <MainNavigator />
</Header>
<section class="section">
    <h1 class="title is-4">Locations</h1>
    <div class="column box">
        <LocationList />
    </div>
</section>