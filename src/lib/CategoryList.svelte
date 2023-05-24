<script>
    import { onMount } from "svelte";
    import { placemarkService } from "../services/placemark-service.js";

    let categoryList = [];

    onMount(async () => {
        categoryList = await placemarkService.getCategories();
    });

</script>

<div>
    {#each categoryList as category}
        <div class="column box has-text-centered">
            { category.name }
        </div>
    {/each}
</div>