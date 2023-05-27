<script>
    import {afterUpdate, onMount} from "svelte";
    import { placemarkService } from "../services/placemark-service.js";
    import { categoryIdStore, locationStore } from "../stores.js";
    import {goto} from "$app/navigation";

    let locationList=[];
    //export let locationId = "";

    onMount(async () => {
        const { subscribe } = categoryIdStore;
        let categoryId;
        const unsubscribe = subscribe((value) => {
            categoryId = value.categoryId;
        });
        console.log("LOC VAR", categoryId);

        //store locations in local storage
        const storedLocationList = localStorage.getItem("locationList");
        if (storedLocationList) {
            locationList = JSON.parse(storedLocationList);
        } else {
            locationList = await placemarkService.getLocationsByCategoryId(categoryId);
            localStorage.setItem("locationList", JSON.stringify(locationList));
        }
        // console.log("LocList", locationList);
        unsubscribe();
    });

    afterUpdate(() => {
        console.log(locationList);
    });
    async function openLocation() {
        await goto('/location');
    }



</script>

<!--<div class="column box has-text-centered">-->
<!--    <table class="table is-fullwidth">-->
<!--        <thead>-->
<!--        <th>Name</th>-->
<!--        <th>Description</th>-->
<!--        </thead>-->
<!--        <tbody>-->
<!--        {#each locationList as location}-->
<!--            <tr>-->
<!--                <td>-->
<!--                    {location.name}-->
<!--                </td>-->
<!--                <td>-->
<!--                    {location.description}-->
<!--                </td>-->
<!--            </tr>-->
<!--        {/each}-->
<!--        </tbody>-->
<!--    </table>-->
<!--</div>-->
<div class="columns is-multiline">
    {#each locationList as location}
        <div class="column is-one-third">
            <div class="box" >
                <div class="content">
                    <div class="is-size-5" ><b>{ location.name }</b></div>
                </div>
                <div class="buttons is-right">
                    <button on:click={() => locationStore.set({
                            locationId: location._id
                            })}
                            on:click|preventDefault={openLocation} class="button is-link is-light"><i class="fas fa-folder-open"></i></button>
                    <button class="button is-link is-light"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        </div>
    {/each}
</div>

