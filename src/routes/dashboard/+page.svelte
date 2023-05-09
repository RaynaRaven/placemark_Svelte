<script>
    import Header from '$lib/Header.svelte';
    import CategoryForm from "$lib/CategoryForm.svelte";
    import CategoryList from "$lib/CategoryList.svelte";
    import MainNavigator from "$lib/MainNavigator.svelte";
</script>

<Header>
    <MainNavigator />
</Header>
<section class="section">
    <h1 class="title is-4">POI Dashboard</h1>
    <div class="column box">
        <CategoryList />
        <CategoryForm />
    </div>
</section>
