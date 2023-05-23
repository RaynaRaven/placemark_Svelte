<script>
    import { onMount } from "svelte";
    import { placemarkService } from "../services/placemark-service.js";

    let locationList = [];
    onMount(async () => {
        locationList = await placemarkService.getLocations();
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

