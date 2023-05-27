<script>
    import Header from '$lib/Header.svelte';
    import CategoryForm from "$lib/CategoryForm.svelte";
    import MainNavigator from "$lib/MainNavigator.svelte";
    import LocationForm from "$lib/LocationForm.svelte";
</script>

<Header>
    <MainNavigator />
</Header>
<section class="column box">
    <h1 class="title is-4">POI Dashboard</h1>
    <div>
        <CategoryForm />
        <br><br>
    </div>
    <div >
        <LocationForm />
    </div>
</section>
