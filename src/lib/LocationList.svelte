<script>
    import { onMount } from "svelte";
    import { placemarkService } from "../services/placemark-service.js";
    import { categoryIdStore } from "../stores.js";

    let locationList=[];

    onMount(async () => {
        const { subscribe } = categoryIdStore;
        let categoryId;
        const unsubscribe = subscribe((value) => {
            categoryId = value.categoryId;
        });
        console.log("LOC VAR", categoryId);

        locationList = await placemarkService.getLocationsByCategoryId(categoryId);
        // console.log("LocList", locationList);
        unsubscribe();
    });


</script>

<div class="column box has-text-centered">
    <table class="table is-fullwidth">
        <thead>
        <th>Name</th>
        <th>Description</th>
        </thead>
        <tbody>
        {#each locationList as location}
            <tr>
                <td>
                    {location.name}
                </td>
                <td>
                    {location.description}
                </td>
            </tr>
        {/each}
        </tbody>
    </table>
</div>

